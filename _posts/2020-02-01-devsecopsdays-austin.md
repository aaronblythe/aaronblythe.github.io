---
layout: post
title:  "DevSecOpsDays Austin 2019"
date:   2020-02-01 1:00:00 -0600
categories: devopsdays
---

This past December I got the chance to attend and participate in [DevSecOpsDays Austin 2019](https://www.devsecopsdays.com/2019-devsecopsdays-austin). It was had an incredible line up of speakers that I really look up to. Before we even got to the first morning break we heard from [Andrew Clay Shafer](https://twitter.com/littleidea), [Shannon Lietz](https://twitter.com/devsecops), [Kat Sweet](https://twitter.com/) and [Matt Tesauro](https://twitter.com/matt_tesauro). In the afternoon it didn't stop with [tons more awesome speakers](https://www.devsecopsdays.com/2019-devsecopsdays-austin).

The organizers [James Wickett](https://twitter.com/wickett), [Ernest Mueller](https://twitter.com/ernestmueller), and [Karthik Gaekwad](https://twitter.com/iteration1) and all of the volunteers did a tremendous job and put on an excellent show.

In the afternoon I got to talk about using Shodan in the Pipeline, a little side project I have been working on:

<div class="jekyll-twitter-plugin"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">⁦<a href="https://twitter.com/ablythe?ref_src=twsrc%5Etfw">@ablythe</a>⁩ talking ⁦<a href="https://twitter.com/shodanhq?ref_src=twsrc%5Etfw">@shodanhq</a>⁩ at <a href="https://twitter.com/hashtag/devsecopsdaysaustin?src=hash&amp;ref_src=twsrc%5Etfw">#devsecopsdaysaustin</a> <a href="https://t.co/dBpHDrAXPN">pic.twitter.com/dBpHDrAXPN</a></p>&mdash; James Wickett (@wickett) <a href="https://twitter.com/wickett/status/1206686136103587840?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/k6cV7z3mw1Q" frameborder="0" allowfullscreen></iframe>

Over the last few years I have [done](https://www.youtube.com/watch?v=elnKbIvl_lI) [several](https://www.youtube.com/watch?v=zSAZeAgWMYQ) [talks](https://www.youtube.com/watch?v=ubeTlQwwUss) [on](https://www.youtube.com/watch?v=yV1TAs4Vxnc) [Shodan](https://www.shodan.io/). Because I believe that the bad guys know how to use this tool, so I should help to teach my friends how to protect their assets and their companies assets. In the talk I try to build off of other things I heard at the conference about making sure you prioritize which CVE's you work on. These CVE's are the ones that are advertised to the world that you have. These are the type that get you on the list of emails of people that have interacted with the a Nigerian Prince email scam. Having CVE's on this list is not a good look.

For this talk I open sourced a very simple pipeline on Gitlab at [https://gitlab.com/aaronblythe/shodan_pipeline](https://gitlab.com/aaronblythe/shodan_pipeline)

In this project you would go to the only merge request to see how it works: [https://gitlab.com/aaronblythe/shodan_pipeline/-/merge_requests/1](https://gitlab.com/aaronblythe/shodan_pipeline/-/merge_requests/1)

The Merge Request has a pipeline attached to it: [https://gitlab.com/aaronblythe/shodan_pipeline/pipelines/102176632](https://gitlab.com/aaronblythe/shodan_pipeline/pipelines/102176632)

Each of the jobs have output that should be easy to read to show the failure.

I did this work in about 2x2 hour sessions and tried to keep the best notes I could here:

* [https://gitlab.com/aaronblythe/shodan_pipeline/blob/e1106bf402aa5518842d248e97eccba636160e57/RESEARCH_SHODAN_CLI.md](https://gitlab.com/aaronblythe/shodan_pipeline/blob/e1106bf402aa5518842d248e97eccba636160e57/RESEARCH_SHODAN_CLI.md)
* [https://gitlab.com/aaronblythe/shodan_pipeline/blob/e1106bf402aa5518842d248e97eccba636160e57/RESEARCH_GITLABCI_YAML.md](https://gitlab.com/aaronblythe/shodan_pipeline/blob/e1106bf402aa5518842d248e97eccba636160e57/RESEARCH_GITLABCI_YAML.md)

Please reach out if you have any questions. What is here is pretty rudimentary. I would love to see someone build on this and for the number of CVE's for you and your company or city go down.

Any please reach out if you think one of my Shodan talks would be good for your user groups, your conference or your company.

People had some nice things to say about the talk in Austin:

<div class="jekyll-twitter-plugin"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Now this is some deep <a href="https://twitter.com/shodanhq?ref_src=twsrc%5Etfw">@shodanhq</a> content that I love hearing. <a href="https://twitter.com/ablythe?ref_src=twsrc%5Etfw">@ablythe</a> dropping some knowledge that I&#39;m definitely going to check out... <a href="https://twitter.com/hashtag/devsecopsdaysaustin?src=hash&amp;ref_src=twsrc%5Etfw">#devsecopsdaysaustin</a> <a href="https://t.co/Oic7ao7yxv">pic.twitter.com/Oic7ao7yxv</a></p>&mdash; DJ Schleen, ⬡ Dev{x}Ops Advocate (@djschleen) <a href="https://twitter.com/djschleen/status/1206689036062134273?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>


<div class="jekyll-twitter-plugin"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">“GitLab is my tool of choice” - <a href="https://twitter.com/ablythe?ref_src=twsrc%5Etfw">@ablythe</a> 🙌🏼 Great presenters at  <a href="https://twitter.com/hashtag/devsecopsdaysaustin?src=hash&amp;ref_src=twsrc%5Etfw">#devsecopsdaysaustin</a>. Learning a lot about Shodan from Aaron Blythe. <a href="https://t.co/TSgpfH4vRM">pic.twitter.com/TSgpfH4vRM</a></p>&mdash; Brandon Brooks 🇯🇵🦝🐶 (@bbm0n) <a href="https://twitter.com/bbm0n/status/1206687808313790464?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<div class="jekyll-twitter-plugin"><blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/DevSecOpsDaysAustin?src=hash&amp;ref_src=twsrc%5Etfw">#DevSecOpsDaysAustin</a> <a href="https://twitter.com/ablythe?ref_src=twsrc%5Etfw">@ablythe</a>: Remember: Use this for positive purposes. Do the right thing. (Also, don&#39;t forget there&#39;s honeypots out there)</p>&mdash; Laura 👩🏽‍💻🧶 (@nimbinatus) <a href="https://twitter.com/nimbinatus/status/1206689279763714050?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<div class="jekyll-twitter-plugin"><blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/DevSecOpsDaysAustin?src=hash&amp;ref_src=twsrc%5Etfw">#DevSecOpsDaysAustin</a> <a href="https://twitter.com/ablythe?ref_src=twsrc%5Etfw">@ablythe</a>: Thanks for the talk!</p>&mdash; Laura 👩🏽‍💻🧶 (@nimbinatus) <a href="https://twitter.com/nimbinatus/status/1206689493564231680?ref_src=twsrc%5Etfw">December 16, 2019</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

