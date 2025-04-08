#! /usr/bin/env node

import config from "config";
import YAML from "yaml";
import fs from "fs";
import path from "path";

const forumSite = config.get("forumSite");
const categoryPath = config.get("categoryPath");
const topicPath = config.get("topicPath");
const postPath = config.get("postPath");
const dataDir = config.get("dataDir");

const catalogLinksRE = new RegExp(forumSite + topicPath + "(.+)/\\d+", "g");

async function getJSON(path) {
  const response = await fetch(forumSite + path, {
    headers: {
      "Accept": "application/json",
    },
  });
  let text;
  let json;
  try {
    text = await response.text();
    json = JSON.parse(text);
  } catch (e) {
    console.error(text, response.headers);
    throw new Error("Parsing failed");
  }
  return json;
}

async function processPost(post, topic) {
  const postDoc = await getJSON(postPath + post.id);
  console.log(`Processing post ${postDoc.id}: ${topic.title}...`)
  const { raw, cooked } = postDoc;

  const locationMatch = raw.match(/^http.*/m);
  if (!locationMatch) {
    console.warn("No location found, skipping", raw);
    return;
  }
  const location = locationMatch[0];

  const bylineMatch = raw.match(/^(\w+) by (.+) \((\d{4})( -- (\d{4}|present))?\)/im);
  if (!bylineMatch) {
    console.warn("No byline match, skipping", raw);
    return;
  }
  const kind = bylineMatch[1].toLowerCase();
  const authors = bylineMatch[2].split(", ").map(author => {
    const authorTypeMatch = author.match(/(.+) \((\w+)\)/);
    if (!authorTypeMatch) {
      return author;
    }
    return {
      name: authorTypeMatch[1],
      type: authorTypeMatch[2],
    };
  });
  let year, years;
  if (bylineMatch[5]) {
    years = [bylineMatch[3], bylineMatch[5]];
    years = years.map(y => y == "present" ? y : parseInt(y));
  } else {
    year = parseInt(bylineMatch[3]);
  }

  let description;
  const afterByline = raw.split("\n")[4];
  if (!/^[>!]/.test(afterByline)) {
    description = afterByline;
  }

  // Replace any description links to other catalog entries with slug anchors
  const catalogLinksMatches = [...raw.matchAll(catalogLinksRE)];
  for (const match of catalogLinksMatches) {
    // TODO: Perhaps check an in-memory list of topics instead of files...?
    const target = match[1];
    const targetFileName = target + ".yaml";
    const targetDataPath = path.join(dataDir, targetFileName);
    if (!fs.existsSync(targetDataPath)) {
      continue;
    }
    description = description.replace(match[0], `#${target}`);
  }

  let image;
  const imageMatch = cooked.match(/<img src="(.+?)" alt/i);
  if (imageMatch) {
    image = imageMatch[1];
  }

  const suggestersMatch = raw.match(/suggesters: (.*)/i);
  let suggesters = suggestersMatch?.[1].split(", ") ?? [];
  suggesters = suggesters.map(name => {
    return name.replace(/^@/, "");
  });

  const curatorsMatch = raw.match(/curators: (.*)/i);
  let curators = curatorsMatch?.[1].split(", ") ?? [];
  curators = curators.map(name => {
    return name.replace(/^@/, "");
  });

  const resourcesMatches = [...raw.matchAll(/^[-*] \[(.*)\]\((.*)\)(: (.*))?/mg)];
  let resources = resourcesMatches.map(match => {
    return {
      label: match[1],
      url: match[2],
      description: match[4] ? match[4] : undefined,
    };
  });
  if (!resources.length) {
    resources = undefined;
  }

  const quotesMatches = [...raw.matchAll(/(^>\s+.*\n)+/gm)];
  let quotes = quotesMatches.map(match => {
    return match[0].replaceAll(/>\s+/g, "").trim();
  });
  if (!quotes.length) {
    quotes = undefined;
  }

  const entry = {
    kind,
    authors,
    title: topic.title,
    year,
    years,
    location,
    description,
    image,
    suggesters,
    curators,
    additional_resources: resources,
    quotes,
  };

  const fileName = topic.slug + ".yaml";
  const dataPath = path.join(dataDir, fileName);
  fs.writeFileSync(dataPath, YAML.stringify(entry));
  console.log(`Wrote ${fileName}`);
}

async function processTopic(topic) {
  if (topic.pinned)
    return;
  const topicDoc = await getJSON(topicPath + topic.id);
  return processPost(topicDoc.post_stream.posts[0], topic)
}

if (!fs.existsSync(dataDir)) {
  throw new Error("Data directory does not exist!");
}

const topicsDoc = await getJSON(categoryPath);
const topics = topicsDoc.topic_list.topics;

for (const topic of topics) {
  await processTopic(topic);
  await new Promise(resolve => setTimeout(resolve, 500));
}
