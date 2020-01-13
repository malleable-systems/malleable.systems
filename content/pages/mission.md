---
title: Mission
date: 2019-12-26T23:46:42Z
featured_image:
description:
menu: main
weight: 1
toc: true
postscript:
  Thanks to Ben Robbins for feedback on earlier drafts.
---

## Community

The Malleable Systems Lab is a community space that [catalogs][catalog], builds,
and experiments with **malleable software and systems** that reset the balance
of power via several essential principles detailed below.

For all of these principles, it is not yet clear how to best achieve them, and
there are sure to be many possible solutions with different tradeoffs. We'll
need to experiment as community with various approaches. The Lab's
primary goal is to report on such efforts and raise awareness of work in these
directions.

## Principles

### Easy to change

_Software must be as easy to change as it is to use it.[^1]_

We have spent many decades in the worthy pursuit of making computing easier to
use, and many such improvements to the experience of using software do in fact
come to life and improve the computing applications we use everyday.

By contrast, the process of changing the features and interfaces of most
software is not _just_ difficult: in many modern ecosystems, such as
the app stores of smartphones and increasingly on desktop operating systems as
well, each application is sandboxed and effectively untouchable by you, the
owner of the hardware on which it runs.

We must empower people to tailor and customise their computing experience in
ways to support their personal workflows which likely will be never be
prioritised or even imagined by the original application vendor.

Some may believe open source applications achieve this, but having the source
available still implies a software engineering toolchain and skill set, which
effectively prohibits most people from making the changes they desire.

### Arbitrary recombination and reuse

_All layers, from the user interface through functionality to the data
within, must support arbitrary recombination and reuse in new environments._

Some software architectures, such as the plugin APIs that support things like
browser extensions, exist today that allow for some amount of customisation.
However, you are still limited to what the API vendor has imagined someone might
want to customise, which leaves us with a similar dilemma as with most
applications: we must beseech the vendor to support our needs if the plugin API
does not already offer it.

We argue an even more radical level of customisation is required: it must be
possible to extract arbitrary bits of user interface, logic, and data for
recombination in a new environment. If I want to grab a UI control from one
application, some processing logic from another, and run it all against a data
source from somewhere else again, it should be possible to do so.

### Open-ended potential

_Tools should strive to be easy to begin working with but still have lots of
open-ended potential._

While we do have systems such as IFTTT and Zapier that simplify snapping
together specific triggers and actions, the possibilities are once again limited
by what each application vendor imagines you might want to do.

We should instead aim for a wider spectrum of possibilities as we once had with
tools like HyperCard: it was easy to get started by making a few cards and
linking them together, which could be enough for a simple problem. As you
learned more about the system through gradual experience, you could grow into
the scripting system and achieve a much larger set of things which did not have
to be pre-imagined by the creators of the system.

### Retain ownership and control

_People of all experience levels must be able to retain ownership and control._

A fundamental problem of today's software ecosystem is that we do not own or
control the software that runs on our devices. In addition, much of the actual
processing logic has been passed off to remote systems in the cloud, so only the
inputs and outputs are observable.

We must ensure that malleable software approaches allow the customisations and
personal workflows you create to be owned and used as you see fit. If an
approach relies on some amount of remote functionality (perhaps to assist with
pulling apart an application or service), we must ensure there's a clear path
for anyone interested to keep those dependencies alive so that their workflows
are not disturbed if the remote service were to shut down.

This has many parallels with the ongoing movement towards data ownership, which
is gaining popular awareness. Although the data ownership movement typically
focuses on identity and social data, the programs and customisations that
authors create are personal creative expressions. Authors must retain ownership
of their data, programs, and customisations just as anyone would
expect to have control over a book they wrote or art they created.

### Freely sharable

_Recombined workflows and experiences must be freely sharable with others.[^2]_

Malleable system approaches must allow each author to share their creations as
they see fit. For example, it must be possible to share a workflow you've
created with a curious friend or coworker by using a transmission channel that
does not depend on a centralised service. Similarly, you must have the option of
adding workflows that others have created to your personal tool set.

We can only consider the works we create on a computer to truly be "ours" if we
can share them in the same ways you share physical tools in a workshop. Digital
workflows have the lucky advantage of being easily copied, but we must ensure we
don't create artificial restrictions that limit what a workflow creator can do
with what they have made.

### Modifying in the context of use

_Modifying a system should happen in the context of use, rather than through
some separate development toolchain and skill set.[^3]_

In the current ecosystem, it is _possible_ for software experts to achieve
limited change, but to do so, they must use a set of tools and skills that are
completely separate from the application itself. This is far too high of a bar
to make a simple customisation to some tool you use every day.

Instead, it should be possible to _modify_ a system using interfaces and
techniques that are consistent with _using_ the same system. This allows you to
naturally build on what you already know about the system at hand while tweaking
and extending it.

### Thoughtfully crafted

_Computing should be a thoughtfully crafted, fun, and empowering experience._

Modern computing is a jungle of arcane, inscrutable tools that throw up walls of
difficult to parse errors that slowly chip away at your enjoyment of the
creative work of building something new. While today much of this is only seen
by software developers, it does sometimes leak through, such as when raw error
messages are displayed.

If we are to have any hope of giving all people the same power over computers
currently accessible only to experts, we must get rid of these obstacles by
refining our tools so that we can focus more on the actual goal, which should
make computing more fun and accessible to all.

## Revolution

Most contemporary applications fail to meet all of these principles, leaving us
with no pathway towards improvement. The only option is to plead with the app
developer and hope they will deign to grant your request. As the importance of
computing in everyday life grows with each passing year, we must fight for these
values to ensure the power of computing is evenly distributed.

We hope you agree this is a revolution worth fighting for.

[catalog]: {{< relref "/catalog/_index.md">}}

[^1]: This paraphrases [User-tailorable systems: pressing the issues with
buttons](https://dl.acm.org/citation.cfm?doid=97243.97271) (MacLean et al.,
1990): "it should be as easy to change the environment as it is to use it".
[^2]: This is adapted from [What Lies in the Path of the Revolution]({{< relref
"/catalog/_index.md#revolution" >}}) (Basman and Tchernavskij, 2018) who argue
that "all authors should have the ability to freely contribute their expressions
to the work of others, and freely 'buy into' and 'buy out of' the expressions
of others".
[^3]: This draws on similar themes from the [in-place
toolchain](https://www.inkandswitch.com/end-user-programming.html#in-place-toolchain)
section of [End-user programming]({{< relref "/catalog/_index.md#enduser" >}})
(Ink & Switch, 2019).
