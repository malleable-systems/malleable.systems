---
title: "The most successful malleable system in history"
date: 2020-04-01T10:00:00Z
author: "[Konrad Hinsen](https://khinsen.net/)"
authorAvatar: khinsen
tags:
  - Tool
featured_image:
description:
summary:
  "Emacs is probably the most successful malleable system in the history
  of computing. What can we learn from it for designing the malleable
  systems of the future?"
---

Malleable systems, as defined in the [mission statement][mission], were more fashionable in the past than they are now. There was a time, in the 1970s and 1980s, when malleability was a goal for influential systems designers. It was most prominently advertised by the Smalltalk design team, but it was strong as well in the Lisp community. [Lisp machines][lisp-machine], for example, were malleable systems. But Lisp machines are gone, and Smalltalk has remained a niche product to this day. Only one malleable system of the 1970s is still in wide use: [Emacs][emacs]. However, "wide use" is relative: it's true only in comparison to other malleable systems. On an absolute scale of software popularity, malleable systems are hardly visible. So what can we learn from the relative success of Emacs for the design of future malleable systems?

## Lesson #1: Provide significant out-of-the-box utility

The demise of Lisp machines can be easily explained by their price tag. So let's compare Emacs to Smalltalk. What did Emacs get right that Smalltalk didn't? I believe that the main aspect was an out-of-the-box utility for a large number of computer users. Emacs is advertised and used as a text editor. It's of course advertised as an *extensible* text editor (see the [GNU Emacs home page][gnu-emacs]), and that claim is easy to verify by a Web search, so it's probably a frequent reason why people choose Emacs over other text editors. But most Emacs users start out as plain users of Emacs' text editing features.

Compare this to a typical Smalltalk system, such as [Pharo][pharo], which I [started to explore][pharo-blog-post] about a year ago. As a malleable environment, Pharo is in many ways superior to Emacs. For example, it has support for malleable graphical user interfaces, where Emacs is limited to text plus embedded inert images. But Pharo on its own isn't good for anything. You have to write code yourself to make it do anything useful for you. In other words, you have to approach Pharo with the mindset of a software developer. Pharo code is certainly easy to change (principle number one of the mission statement), but there is nothing in Pharo that a typical computer end user would *want* to use, and then change. And yet, Pharo has already made a lot of progress compared to earlier Smalltalk systems, which were completely disconnected from mainstream computing. You *can* implement immediately useful tools in Pharo, because you can read files, open HTTP connections, and call non-Pharo code. Someone *could* write a killer app in Pharo that would give it the same attractiveness as Emacs. But it hasn't happened yet.

Consider the typical trajectory of Emacs power users. They start by downloading Emacs, and learning enough of it for their editing needs. At some point, they want to do some basic customization. Then some less basic customization, which is likely to be the first contact with Emacs Lisp, even if it's only a copy-paste of a small function found on the [Emacs Stack Exchange][emacs-stack-exchange]. With the confidence gained from such minor tweaking, they move on to more ambitious tasks. Some end up developing and maintaining major Emacs Lisp packages, but most don't, and that's perfectly fine.

One important attraction on the road from plain user to power user is [Org mode][orgmode], which has been part of Emacs for a while. It's one of the most versatile personal information management systems in existence, but it's also one that doesn't make much sense unless you are already familiar with the overall philosophy of Emacs. Moreover, productive use of Org mode requires significant customization. The move from text editing in Emacs to PIM management with Org mode is a step up the ladder that is much smaller than the step to "Emacs Lisp development", and yet it comes with a high reward. Many other Emacs add-ons play a similar role. Mail handling in Emacs, via [notmuch][notmuch] or [mu4e][mu4e] requires more coding than running a standard mail client, but much less than writing your own mail client from scratch. The malleability of Emacs had led to an ecosystem of add-ons that are themselves malleable, and often have malleability as their main advantage compared to conventional silo-type applications. This ecosystem is important for Emacs' attractiveness today. But the seed that got the ecosystem started is out-of-the-box utility.

## Lesson #2: Think carefully about barriers

It's also interesting to compare Emacs (or Smalltalk) to platforms implementing extensibility through a plug-in framework. Web browsers are the best comparison here, because they share the useful-out-of-the-box feature with Emacs. The big difference is that browsers make a clear distinction between customization through a built-in preference panel and writing extensions using external development tools. There is no continuity on the path from plain user to power user. At some point you have to make the decision to become an extension developer, and attack the steep learning curve that comes with it. Moreover, browsers severely restrict what extensions can modify. In fact, users can't even explore the code of the browser itself from the browser, let alone change it. In contrast, most of Emacs' functionality is implemented in the same language as user extensions, and it is fully documented and accessible from inside Emacs.

Note: [Geoffrey Litt's post][browser-extension-blog-post] on browser extensions takes a different point of view, considering browser extensions as a way to modify not browsers but Web applications. That's the starting point of a another direction of investigation: how to add malleability to systems that were *not* designed for it. But that's not my topic here.

In general, barriers of all kinds severely reduce malleability. Browsers are written in different languages than their extensions, using different development tools. This requires a much higher learning effort from prospective tinkerers. Emacs also has such a barrier, as its low-level foundation is written in C rather than Emacs Lisp. But that barrier is so far away from what even power users ever interact with that it doesn't matter in practice. Not so for browsers.

That may sound as if I am saying "avoid barriers in malleable systems", but it isn't that simple. Accidental barriers such as language barriers are probably best avoided. But other barriers are part of a system's design and serve a purpose. The functional restrictions on browser extensions belong to this category. They protect the browser against accidental or malicious manipulation by its extensions. This in turn protects the browser user against malicious extensions, and the browser's authors against additional customer support inquiries due to buggy extensions.

Emacs (like Smalltalk) has no barriers except at its low-level foundations. Emacs users can change, and break, anything they like. Emacs packages made available for download can potentially contain very malicious code. The Emacs philosophy, going back to the 1970s when there were neither cybercriminals nor completely tech-naive users, is that Emacs users are fully responsible for managing their Emacs environment. This actually works very well in practice, even today, because Emacs is neither attractive for completely tech-naive users, nor sufficiently popular to be an interesting target for cybercriminals.

Barriers are thus an important subject in the design of malleable systems. Their social counterpart is the division of responsibility between the system's designers, its end users, and the authors of published add-ons. It's not obvious how to find the right balance between empowering and protecting users, plus making sure that they understand clearly what they are expected to do themselves for their own protection.

Emacs says that end users get the full power and take the full responsibility. This is a good choice for malleable systems designed for a sufficiently narrow audience, e.g. professionals of some kind. Today such a choice should be made and documented explicitly, rather than tacitly as Emacs did in the 1970s. Mainstream Web browsers say that the browser developers are responsible for security aspects, and therefore limit the power of end users and extension writers. That's also a reasonable attitude, in particular for tools implementing open specifications that allow for choice - if you prefer a browser with an Emacs attitude, you can use [Next][next], for example. But that also means creating a new type of barrier: the barrier between different browsers. Next users and Firefox users cannot share browser extensions.

A satisfactory solution to the division of responsibility question remains to be found, which is in my opinion an important obstacle on the way to malleable systems for everyone. A good solution is likely to contain technical measures, such as sandboxes for constraining execution, or content-addressed storage to replace mutable file systems. But it will also have to contain social measures for establishing trust in software components. These can range from expert audits and quality labels, as used for industrial products, to reputation scores on social networks.

[mission]: https://malleable.systems/mission/
[lisp-machine]: https://en.wikipedia.org/wiki/Lisp_machine
[emacs]: https://en.wikipedia.org/wiki/Emacs
[gnu-emacs]: https://www.gnu.org/software/emacs/
[pharo]: https://pharo.org/
[pharo-blog-post]: https://blog.khinsen.net/posts/2018/12/19/exploring-pharo/
[emacs-stack-exchange]: https://emacs.stackexchange.com/
[orgmode]: https://orgmode.org/
[notmuch]: https://notmuchmail.org/
[mu4e]: https://www.emacswiki.org/emacs/mu4e
[browser-extension-blog-post]: https://www.geoffreylitt.com/2019/07/29/browser-extensions.html
[next]: https://next.atlas.engineer/
