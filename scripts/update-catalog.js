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

async function getJSON(path) {
  const response = await fetch(forumSite + path, {
    headers: {
      "Accept": "application/json",
    },
  });
  return response.json();
}

async function processPost(post, topic) {
  const postDoc = await getJSON(postPath + post.id);
  console.log(`Processing post ${postDoc.id}: ${topic.title}...`)
  const { raw } = postDoc;

  const locationMatch = raw.match(/^http.*/m);
  if (!locationMatch) {
    console.warn("No location found, skipping", raw);
    return;
  }
  const location = locationMatch[0];

  const bylineMatch = raw.match(/^(\w+) by (.*) \((\d{4})\)/im);
  if (!bylineMatch) {
    console.warn("No byline match, skipping", raw);
    return;
  }
  const kind = bylineMatch[1].toLowerCase();
  const authors = bylineMatch[2].split(", ");
  const year = bylineMatch[3];

  const suggestersMatch = raw.match(/suggesters: (.*)/i);
  const suggesters = suggestersMatch?.[1].split(", ") ?? [];

  const curatorsMatch = raw.match(/curators: (.*)/i);
  const curators = curatorsMatch?.[1].split(", ") ?? [];

  const resourcesMatch = [...raw.matchAll(/\[(.*)\]\((.*)\)/ig)];
  const resources = resourcesMatch.map(match => {
    return {
      label: match[1],
      url: match[2],
    };
  });

  const quotesMatch = [...raw.matchAll(/>\s+(.*)/ig)];
  const quotes = quotesMatch.map(match => match[1]);

  const entry = {
    kind,
    authors,
    title: topic.title,
    year,
    location,
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
}
