---
title: "Wildcard review"
date: 2020-02-29T18:44:32Z
author: "[J. Ryan Stinnett](https://convolv.es)"
authorAvatar: jryans
tags:
  - Review
featured_image:
description:
summary:
  "Geoffrey Litt and Daniel Jackson have been working on Wildcard, which
  enables customising websites via one of the most popular programming models
  in existence today: the spreadsheet. Wildcard's sheet is bidirectionally
  linked to the site content, so that changes and also user additions to the
  sheet are reflected back in the site's UI. Similarly, if the site content
  changes, the sheet is updated as well."
---

[Geoffrey Litt][litt] and [Daniel Jackson][jackson] have been working on
[Wildcard: Spreadsheet-Driven Customization of Web Applications][wildcard],
which they will be presenting at the [Convivial Computing Salon 2020][salon]
workshop in March. (_Disclaimer: I am on the program committee for the
Salon, but I was not involved in any part of Wildcard's review process at the
workshop._)

## Summary

Wildcard enables customising websites via one of the most popular programming
models in existence today: the spreadsheet. Wildcard's sheet is bidirectionally
linked to the site content, so that changes and also user additions to the sheet
are reflected back in the site's UI. Similarly, if the site content changes, the
sheet is updated as well.

![Wildcard in action](/works/wildcard.png)

The [web version of the paper][wildcard] includes several videos demonstrating
how this concept can be used to augment search results with additional data, add
small bits of functionality based on user-added data, and drive form inputs
with smarter controls.

> Our approach requires extracting structured data from the user interfaces of
> existing applications, but we hide the complexity of data extraction from end
> users. Programmers write site adapters which use web scraping techniques to
> extract structured data from existing applications and map it to the
> spreadsheet table.

Since websites in 2020 do not contain much in the way of attached metadata that
would support extracting the sheet's data, Wildcard relies on experts to write
site-specific adapters to extract data, keep it in sync, etc. This
does mean the approach can't immediately be used on a new site, but the Wildcard
authors believe that if the tool proves popular, a growing repository of
adapters would come to life. After the one-time step of writing a site adapter,
anyone of any experience level can use Wildcard to explore, manipulate, and
extend the site's content for their own purposes.

> Low floor, high ceiling: Wildcard provides an easy entry point for end users,
> since small tweaks like sorting data can be performed with a single click. At
> the same time, it also supports a variety of richer customizations, like
> adding private annotations to a webpage or joining in related data from a web
> API.

Wildcard's spreadsheet model allows for a form of [open-ended
potential][mission-3]: it's very easy to get started, but also allows you to
achieve more complex customisations as you become more familiar with the system.

> Generic tools are especially important for software customization, because a
> common barrier to customizing software is not having enough time [Mackay 1991]
> — it’s more likely that people will customize software frequently if they can
> reuse the same tools across many applications.

One of the major design goals of Wildcard is supporting customisation through a
"universal data structure". While Unix tools have historically piped text around
for such things, Wildcard focuses on the spreadsheet / relational table as a
view of data that can be used in many contexts. All designers of tools that
enable software malleability would do well to remember that their tool is just
supporting the user in completing the actual goal they want to achieve.
Anything that helps users understand and use the tool more quickly and easily
will greatly boost its general utility. For Wildcard, focusing on the
spreadsheet model is one way the authors have given their tool more generality.

> Documents (e.g. Google Docs) or graphs (e.g. social network friend graphs) may
> prove more challenging to map to the table abstraction.

Of course, there are also many sites that are more interactive or involve data
that does not map well to a list of items. Even with that limitation, I think
Wildcard will still prove useful, as there are quite a lot of sites that do fit
well with a table-style data model.

## Questions and future work

From reading the paper, I couldn't tell how the extra user columns are mapped
onto each list item in the site. In the demo videos, user data added to the
sheet seems to magically appear in a relevant part of the site's UI. This leads
me to assume that the site adapters define a fixed, generic location for user
data to appear that can't be changed from the sheet. Assuming that's the case,
it does seem better than having no user data at all, but the ideal UI location
is likely highly variable and dependent on the type, length, etc. of the content
that the user wants to add. I would like to see future work that explores ways
of allowing more control over how and where the user data attaches to the page.

As the authors suggest several times in the paper, maintaining a reliable set of
site adapters could easily become complex. Sites are constantly changing, and
the adapters would need to be updated to match. At the very least, structural
changes to the DOM would likely imply work for adapter maintainers, but perhaps
even more kinds of site changes would as well.

While this reliance on expert curation of site adapters is reasonable given
what's possible today, I believe we'll need to do much better for malleable
approaches to empower the computing experience of people at all experience
levels. I would like to see future work that automates as much possible both:

* the creation of site adapters for snapshots of a site at a point in time
* the continual maintenance of the adapters over time as sites change

I am hoping to share some approaches to this in my own research, and I'd like to
see ideas from others in the community as well. I expect it will take a while to
to find the best way to make this work without a lot of manual effort.

Wildcard is currently implemented as a browser extension, and so it can only
influence web content. That does indeed seem like a natural place to prototype
such a tool, as there is a lot of the list-like content on the web. At the same
time, computing is more than just the web, and so I'd like to see systems that
apply some of these ideas to even more of our computing experience.

## Review summary

Overall, I think Wildcard is an exciting step towards greater user customisation
of existing websites and applications, and it aims towards a number of the
collective's [core principles][principles].

I have signed up for the [mailing list][list] to try it out and discover more
about how it works in detail.

[litt]: https://www.geoffreylitt.com/
[jackson]: http://people.csail.mit.edu/dnj/
[wildcard]: https://www.geoffreylitt.com/wildcard/salon2020/
[salon]: https://2020.programming-conference.org/home/salon-2020
[mission-3]: {{< relref "/pages/mission.md#3-open-ended-potential" >}}
[principles]: {{< relref "/pages/mission.md">}}
[list]: https://docs.google.com/forms/d/e/1FAIpQLSf8nJZ5hY0ZTB0g3WmHEpvP-p8keRzWbWRltEidTK8awsfBEw/viewform?usp=sf_link
