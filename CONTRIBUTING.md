## Contribution guide

We hope the collective's [mission][mission] has inspired you to follow the
community's work, post your thoughts, and share your experiments. There are many
ways to get involved and contribute to this movement.

### Blog

We'd like to host several kinds of posts from different voices in the community.
If you'd like to write something, please [open an issue][issue] or [get in touch][mail].

Some of the types of content we have in mind include:

* Summaries of papers and projects in the community
* Reports of experiments in progress
* Essays on what malleable software should be and how we can get there

### Catalog

Along with the blog, we've also started a [catalog][catalog] of projects,
people, discussions, and other efforts in this field. We hope it can grow to
become a comprehensive list of resources for the community.

If you know of people, projects, threads, or anything else that should be added
to [the catalog][catalog], please feel free to [edit the data][catalog-data] and
open a pull request. If you're not sure what should be added, but you'd like to
help with the curation effort, there's a [queue of items waiting to be
added][catalog-issues], and we'd be happy to have your help curating them. If
curation sounds like too much work, please at least [open an issue][issue] so it
can eventually be added when someone has time to do so.

The current workflow for adding something to catalog looks roughly like this:

1. Read / try / examine the item you're interested in adding
2. Quotes that highlight the connection to the collective's mission are a big
   part of the catalog, so try to find a few as you go along
3. If this is your first contribution, add yourself to the [contributors
   list][contributors-data] using your username as the ID and including your
   avatar
4. Add a new entry to the list of works in the [catalog data][catalog-data]
5. For help with filling out the various fields, you can look at other examples
   in the catalog as well as the [template][catalog-template] that renders the
   catalog page (it's not a very strict schema, so you occasionally may need to
   add new fields or tweak the template)
6. The list of `actors` in the catalog data highlights key people who have
   authored significant related works. Only a subset of authors are added here,
   and it's a bit of a subjective choice. If someone is appearing in several
   works, that suggests it's a good moment to add more info about them in the
   actors list and reference them by their actor ID in the author list of all
   their works. If you're adding the first work by a particular author, it's
   likely best to just list their name explicitly in the work data and skip the
   `actors` list.
7. The `suggestors` field tracks anyone who may have mentioned the item might be
   a good fit for the catalog, and ideally this references their ID from the
   [contributors list][contributors-data], but we can clean that up in a
   separate pass if it's too much trouble
8. The `curators` field tracks anyone involved in summarising and writing up the
   catalog metadata, and that's you, so please add your ID from the
   [contributors list][contributors-data] here
9. Add at least one and up to a few quotes that highlight how the item relates
   to the collective's mission
10. Open a pull request, and we'll review and merge your addition! 🎉

You may have noticed there's quite a few fields tracking who did what along the
way. At the collective, we believe it's important to recognise all forms of
contribution, so we're doing our best to record everyone involved in the process
so we can feature them on the site ([soon][feature-contributors]).

If you would like to preview your new item before submission, you should be able
to do so by installing [Hugo][hugo] and running `hugo server` at root level of
this repo. Our CI system will also deploy a preview site once you open your PR,
so it's easy for everyone to check over your contribution.

If you made it this far, thanks so much for your help! 😄

### Feedback

At the end of the day, we want this to be a space for anyone working to advance
the goals of malleable software. If you have thoughts or feedback on how best to
achieve that, please [open an issue][issue] or [send us a note][mail].

[mission]: https://malleable.systems/mission/
[catalog]: https://malleable.systems/catalog/
[issue]: https://github.com/malleable-systems/malleable.systems/issues/new
[mail]: mailto:hello@malleable.systems
[catalog-data]: data/catalog.yaml
[catalog-template]: layouts/catalog/list.html
[catalog-issues]: https://github.com/malleable-systems/malleable.systems/issues?q=is%3Aissue+is%3Aopen+label%3Acatalog
[contributors-data]: data/contributors.yaml
[avatars]: static/avatars/
[feature-contributors]: https://github.com/malleable-systems/malleable.systems/issues/42
[hugo]: https://gohugo.io/
