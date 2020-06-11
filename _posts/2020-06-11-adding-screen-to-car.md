---
layout: post
title:  "Adding a Screen to Car"
date:   2020-06-11 01:00:00 -0600
categories: devopsdays
---

# Found Time, Brain Stuffing, and Fresh Car Situation

Let me start by saying that I do not recommend doing what I did. However I did do it. For the last couple years I had a full time job, I am a parent of 3 kids, I am in grad school, and I have a 30-45 minute commute to and from work. So I was looking for whatever time I could double up on things. So I decided to watch my online lectures on my commute and when on the elliptical machine at the gym. I referred to this as “found time”. It started with my iPhone propped up on my Prius screen.  I also used an after-market blue-tooth device plunged into the auxiliary port to make the sound as you would expect to be in a car (to minimize distraction). The screen was small and close enough to eye level and the slides did not change that often and I was mostly listening at double speed twice through so I could soak up the information to get my mind turning on the statistics and machine learning stuff. I would download the lectures ahead of time on Coursera on my home wifi, so I would not have to use data plan while driving. I am supposed to have unlimited data… but I was getting weird text messages from my provider about getting throttled. (But more on that later…).  I started doing this early in 2019. Late in 2019, my Prius crapped out for the second time and I didn’t want to order another hybrid battery.  So, I decided to go try to trade it in and that is when I was able to upgrade my car by 6 years (moving from a 2007 Prius to a 2012 Lexus Hybrid CT200h). I made this decision right at CarMax which is more hasty than I usually make decisions, but it happened and it was done.

When I got home I started googling about things my car could do, which is when I found out that newer cars than this had things you could plug your phone into or even better that you could blue-tooth into. (NOTE: this was by about the newest car I have ever had, I usually get a car when it is around 6 years old like this). I found out that there were only two years that they made a model similar to mine and the next year after mine they changed it and kept it the same for many years and there were all sorts of options… however for my car, the options were limited.  The only place I could find anything was at: https://www.dvdgpsnav.com/blog/10-25-touch-screen-lexus-ct200h-android-head-unit-gps-stereo-upgrade/ The site was just a Wordpress blog and the whois was not the most comforting. So I sat on it for a while. The difference in this car was there was not a screen as there was in the Prius, and worse the place to prop up my phone was farther away. So I ended up switching to a 10 inch Amazon Fire Tablet ($29.99 at Kohl’s) for my lectures using the Blue Tooth. This was actually better, and beyond my lectures at double speed there were certain days of the week that I would watch AWS training geared toward certifications. I was addicted to watching lectures while I drove and could not get that head unit out of my head.

# The Decision and Interacting with China

Over Christmas break I decided to do it. I emailed them about it on December 24th with pictures of the interior of my car. They emailed back the same day. After some back and forth they sent me an invoice, and I Western Unioned the money to China. I’ll be honest, there was a big part of me that thought I may never see that $550 again. There was also a part of me that thought I was a privileged little shit to even gamble like this. But there is also the part that was thrilled to see what would happen. 

I did email them every week to check up on things. Jan 4th response “Hi, I will check on Monday, it's weekend the factory closed now. Have a nice weekend.” Jan 8th response “ Sorry for the delay, our factory are very busy at this time, because we are going to have a long holiday for Chinese Spring Festival. I just checked your order can be sent out tomorrow. I will send you the tracking number once got it from the shipping company.” Jan 13th response "The tracking number is XXXX, you can track it on http://ems.com.cn/english.html later today or tomorrow, as there may be delay in the weekend.”

This is where it gets fun, that website was sort of in English, sort of in Chinese… A puzzle:

[<img align="right" src="/images/car_screen/shipping_puzzle.PNG" hspace="20">](/images/car_screen/shipping_puzzle.PNG)

However it would not let me copy from it… So I had to right-click and use the inspect element to pull out:

```
<p style=“-moz-user-select: none; -khtml-user-select: none; user-select: none;font-size:12px;color: #486C80
;line-height:28px;margin:0;text-align:right;padding-right:22px;text-align: center;“>


按住左边滑块，拖动完成上方拼图</p>
```

I put that into Google Translate and "Hold down the left slider, drag the above completed jigsaw puzzle”
From there I realized it was an “Are you a robot?” test. I slid the puzzle piece over and got to the next screen.

On January 23rd I received a text from my wife:

[<img src="/images/car_screen/package_arrived.jpg" hspace="20">](/images/car_screen/package_arrived.jpg)

Yes!! It all worked out. Time to move on to installation.

# Installation

Sunday January 26th I installed it in a little two hours (trying to half the 4 hour time frame set out for me by my friend Dustin).

[<img src="/images/car_screen/dash_open_1.JPG" hspace="20">](/images/car_screen/dash_open_1.JPG) [<img src="/images/car_screen/dash_open_2.JPG" hspace="20">](/images/car_screen/dash_open_2.JPG)

[<img src="/images/car_screen/dash_screen_1.JPG" hspace="20">](/images/car_screen/dash_screen_1.JPG) [<img src="/images/car_screen/dash_screen_2.JPG" hspace="20" >](/images/car_screen/dash_screen_2.JPG)

The instructions were abysmal, but I was able to get it up and running to the Android Auto Screen.

# Troubleshooting and Losing Roll Over Minutes

It was at this point that I realized that to get this to work I would need a phone plan that allows tethering. I have not upgraded my phone plan since the iPhone 3, because I have unlimited data (in addition to rollover minutes and free nights and weekends).  So it was off to the AT&T store. I upgraded my wife's and my plan. Apparently things have changed quite a bit and unlimited data is now standard. We had some laughs about losing my rollover minutes, but in the end our overall bill will go down by $50/month so that alone will pay for this thing in 11 months. Nice.

[<img src="/images/car_screen/att_store_screen.JPG" hspace="20">](/images/car_screen/att_store_screen.JPG) [<img src="/images/car_screen/coursera_screen.JPG" hspace="20">](/images/car_screen/coursera_screen.JPG)

When I got home I was able to get far enough to get the Google Play Store up and install Coursera. However the sound wasn’t working I tried to make sure the connection was good… but it still wouldn’t work. I was crushed… so close...

[<img src="/images/car_screen/soldering.JPG" hspace="20">](/images/car_screen/soldering.JPG)

Two days later I went through everything in the box and I found this “blank”.

Basically I needed to put this in the auxiliary port, then sound would come out when the radio was set to AUX.

[<img src="/images/car_screen/blank_aux_plug.JPG" hspace="20">](/images/car_screen/blank_aux_plug.JPG) [<img src="/images/car_screen/blank_aux_plugged_in.JPG" hspace="20">](/images/car_screen/blank_aux_plugged_in.JPG)

Now we were in business. I had full Android Auto and I could watch/listen to lectures on this screen. I could download lectures to the device in the garage off the wifi and then would not need to use data on the go other than to launch the app… but this still was not Apple CarPlay… I could not for the life of me figure out how to turn that on.

At the beginning of February, my wife said after driving my car “that was a really smooth experience. I just plugged in and the map came up to where I had just googled for a location.” I was like what? That has never happened for me. Could you show me? Sure enough when she plugged in she got straight to Apple CarPlay. It seems she had set it up some time on a rental car and it just worked. So this told me it was not the set up on my car, but the setup on my phone.  

Eventually it was this on iOS 12:

CarPlay is Restricted
The answer I eventually found, buried away, is within Screen Time there is an Allowed Apps section, where CarPlay was for some reason disabled. This setting is even more hidden away in iOS12 than it was in iOS11.
Go to: Settings > Screen Time > Content & Privacy Restrictions > Allowed apps – and enable CarPlay

[https://www.techonthego.co.uk/2019/05/carplay-not-working-how-to-fix-it-21389](https://www.techonthego.co.uk/2019/05/carplay-not-working-how-to-fix-it-21389)

[<img src="/images/car_screen/car_play_screen.JPG" hspace="20">](/images/car_screen/car_play_screen.JPG)

So I got it all set up right before my final haircut prior to the quarantine.


