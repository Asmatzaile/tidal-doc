---
title: release
permalink: wiki/release/
layout: wiki
tags:
 - Control Functions
---

<languages/> <translate> [Type](/wiki/Type_signature "wikilink"):

    release :: Pattern Double -> ControlPattern

**release** turns a number pattern into a control pattern that changes
the "fade out" time of a sample.

    d1 $ s "jvbass*8" # release "<0.1 0.3 0.6>"

</translate>
