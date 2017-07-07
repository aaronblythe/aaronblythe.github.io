---
layout: post
title:  "Kubernetes Hands On Tutorial"
date:   2017-05-23 20:00:00 -0600
categories: kubernetes
---

For the [July 2017 DevOpsKC Meetup](https://www.meetup.com/DevOps-Kansas-City/events/241145640/) we are planning on trying something new. The [May 2017 DevOpsKC Meetup](https://www.meetup.com/DevOps-Kansas-City/events/238800554/) was very popular on the topic of using Kubernetes and OpenShift.

The feedback I have heard from many people is that they are very interested in Kubernetes, however have not had a chance to play with it because:

* they don't feel like they have time
* they don't feel like they understand all the things behind it and would not be successful on their own, or would spend too much time fighting
* kubernetes is not something they use or plan to use at work, so it is not appropriate to use work time on
* they are afraid of cloud computing bills

I believe we can address all of these concerns by having a focused two hour session where those that understand the technology better help others that are interested in learning more.

The loose plan is to build on the awesome work that is out there by [Kelsey Hightower's](https://twitter.com/kelseyhightower) tutorial [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) and walk through this as a group to set up a Kubernetes cluster on Google Cloud Platfom.

Below are my notes from my first run through the tutorial.

## Credit to Google Cloud

Google Cloud Platform has had a promoted tweet for a couple months now with $300 for the next year in free credit.  This should be more than enough to do this tutorial.  This will require adding your credit card, however there are simple safeguards to put in place to ensure you are not charged.

https://twitter.com/googlecloud/status/867413663178797056

Please remember to clean up after you are done with all of this, we cannot be responsible for any charges you are incurred.

## Setting up Google Cloud SDK

Install the [Google SDK](https://cloud.google.com/sdk/):

Since I am on a Mac that already has python, I just used the "x86_64" from: https://cloud.google.com/sdk/docs/quickstart-mac-os-x

Then:

    cd Downloads
    ./google-cloud-sdk/install.sh

Follow the prompts, pretty accepting the defaults, then open a new shell.

    Run: gcloud init

This will open a browser, accept the terms. Then back to terminal. Mostly accepting defaults but when presented with this:

    Pick cloud project to use: 
    [1] ...
    [2] ...
    [3] Create a new project

I chose [3] Create a new project, then named it ‘kubes-tute-aaron’

Then tried to start the tutorial:

    gcloud compute instances list

I received:

    ERROR: (gcloud.compute.instances.list) Some requests did not succeed:
    - Failed to find project kubes-tute-aaron

I had to enable billing in the Google Cloud Console: https://console.cloud.google.com/billing

![import]({{ site.url }}/images/enable_billing.png){:class="img-responsive"}

After a few minutes then I could run the first line in the tutorial

    gcloud compute instances list
    Listed 0 items.

## Kubernetes the Hard Way Tutorial from Kelsey Hightower

Overall this took around 2 hours.  It was a fair amount of of copy/paste to 3 machines that likely could be scripted on these three labs:

* [Bootstrapping a H/A etcd cluster](https://github.com/kelseyhightower/kubernetes-the-hard-way/blob/master/docs/04-etcd.md)
* [Bootstrapping an H/A Kubernetes Control Plane](https://github.com/kelseyhightower/kubernetes-the-hard-way/blob/master/docs/05-kubernetes-controller.md)
* [Bootstrapping Kubernetes Workers](https://github.com/kelseyhightower/kubernetes-the-hard-way/blob/master/docs/06-kubernetes-worker.md)

### gcloud compute ssh

Having never used Google Cloud Platform before, it was not immediately apparent to me that how to ssh on to the machine, so I spent some time figuring that out. Luckily it is simple.

At start of "Bootstrapping a H/A etcd cluster"

    gcloud compute ssh controller0
    gcloud compute ssh controller1
    gcloud compute ssh controller2

There is a pull request for this documentation. And there are hints later in the tutorial.

https://github.com/kelseyhightower/kubernetes-the-hard-way/pull/178

### Use version 1.7.0

I ran into an issue described here: https://github.com/kelseyhightower/kubernetes-the-hard-way/issues/156

    ablythe@controller0:~$ kubectl get componentstatuses
    NAME                 STATUS      MESSAGE                                                                       ERROR
    controller-manager   Healthy     ok                                                                            
    scheduler            Healthy     ok                                                                            
    etcd-1               Unhealthy   Get https://10.240.0.11:2379/health: remote error:     tls: bad certificate   
    etcd-2               Unhealthy   Get https://10.240.0.12:2379/health: remote error:     tls: bad certificate   
    etcd-0               Unhealthy   Get https://10.240.0.10:2379/health: remote error:     tls: bad certificate   
    ablythe@controller0:~$ sudo etcdctl \
    >   --ca-file=/etc/etcd/ca.pem \
    >   --cert-file=/etc/etcd/kubernetes.pem \
    >   --key-file=/etc/etcd/kubernetes-key.pem \
    >   cluster-health
    2017-07-07 04:00:07.289224 I | warning: ignoring ServerName for user-provided CA for     backwards compatibility is deprecated
    2017-07-07 04:00:07.290257 I | warning: ignoring ServerName for user-provided CA for     backwards compatibility is deprecated
    member 3a57933972cb5131 is healthy: got healthy result from https://10.240.0.12:2379
    member f98dc20bce6225a0 is healthy: got healthy result from https://10.240.0.10:2379
    member ffed16798470cab5 is healthy: got healthy result from https://10.240.0.11:2379
    cluster is healthy

I simply stopped all the services on all 3 machines, modified the download links to use v1.7.0, moved the binaries to the proper location and restarted the services.

### Smoke Test

I ran into an issue where the final smoke test was not work working:

    curl http://$\{NODE_PUBLIC_IP\}:$\{NODE_PORT\}
    curl: (6) Could not resolve host: $NODE_PUBLIC_IP

Simply changing this to:

    curl http://\{$NODE_PUBLIC_IP\}:\{$NODE_PORT\}

Worked fine for me

## Google Cloud Usage

I left the cluster up over night. So far it states that I have used less than one dollar over that 14 hour period.  I have no idea if there is lag on the billing, however I think the credit should cover this tutorial just fine.

![import]({{ site.url }}/images/google_cloud_usage_first_12_hours.png){:class="img-responsive"}

## Next Steps

* Watch the tutorials from Kelsey to see how he explains this
  * https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615
  * https://www.youtube.com/watch?v=h8VnWL7WGu8
* Continue to gather knowledgeable people to help facilitate/run this
* Consider scripting this to help the installation go faster, so more time can be spent playing
* Other links suggested by [Kyle Sexton](https://twitter.com/mocker)
    * https://github.com/kubernetes/examples
    * http://kamalmarhubi.com/blog/2015/08/27/what-even-is-a-kubelet/
    * http://kamalmarhubi.com/blog/2015/09/06/kubernetes-from-the-ground-up-the-api-server/
    * http://kamalmarhubi.com/blog/2015/11/17/kubernetes-from-the-ground-up-the-scheduler/

