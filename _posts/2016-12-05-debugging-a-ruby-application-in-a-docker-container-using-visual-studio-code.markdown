---
layout: post
title:  "Debugging a Ruby Application in a Docker Container using Visual Studio Code"
date:   2016-12-05 09:28:31 -0600
categories: ruby
---
Ever since DockerCon 2016 in Seattle, I was quite impressed with what I saw with [Debugging a ES6 Node.js application in a Docker container using Visual Studio Code](https://alexanderzeitler.com/articles/debugging-a-nodejs-es6-application-in-a-docker-container-using-visual-studio-code/) from [Alexander Zeitler](https://twitter.com/alexzeitler_).  However I wanted to do this for Ruby.  

To start you will need: 

* [Visual Studio Code](https://code.visualstudio.com/) <- yes, this runs awesome on your Mac, Windows, or Linux machine.
* [Ruby Plugin for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
* [Docker](https://www.docker.com/products/overview) I personally have tested this with Docker for Mac 1.12.3 Stable.

# Get up and running quick:

Start by cloning the repository and opening Visual Studio Code

{% highlight bash %}
git clone https://github.com/aaronblythe/ruby_docker_breakpoint.git
cd ruby_docker_breakpoint
code .
{% endhighlight %}

Build the docker container and run it

{% highlight bash %}
docker-compose build
docker-compose up
{% endhighlight %}

At this point you should see something similar to:

{% highlight bash %}
➜  ruby_docker_breakpoint git:(master) ✗ docker-compose up
Recreating rubydockerbreakpoint_hellorubyvscode_1
Attaching to rubydockerbreakpoint_hellorubyvscode_1
hellorubyvscode_1  | Fast Debugger (ruby-debug-ide 0.6.0, debase 0.2.1, file filtering is supported) listens on 0.0.0.0:1234
{% endhighlight %}

It will wait here until you Navigate the to Debug View in Visual Studio Code and click the Play button on "Attach to Docker". After it attaches 

![start-vs-code-debugger]({{ site.url }}/images/start_vs_code_debug.png){:class="img-responsive"}

then you should see:

{% highlight bash %}
hellorubyvscode_1  | [2016-11-29 21:15:46] INFO  WEBrick 1.3.1
hellorubyvscode_1  | [2016-11-29 21:15:46] INFO  ruby 2.1.10 (2016-04-01) [x86_64-linux]
hellorubyvscode_1  | [2016-11-29 21:15:46] INFO  WEBrick::HTTPServer#start: pid=1 port=4567
{% endhighlight %}

From here set a breakpoint in the code in myapp.rb. Then navigate to http://0.0.0.0:4567

You should now hit the breakpoint and be able to step over or step into or play.

![debugging]({{ site.url }}/images/debugging.png){:class="img-responsive"}




