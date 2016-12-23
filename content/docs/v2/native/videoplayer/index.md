---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "videoplayer"
title: "VideoPlayer"
header_sub_title: "Class in module "
doc: "VideoPlayer"
docType: "class"
---







<h1 class="api-title">
  
  VideoPlayer
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/video-player.ts#L16">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-videoplayer</code></pre>
<p>Repo:
  <a href="https://github.com/moust/cordova-plugin-videoplayer">
    https://github.com/moust/cordova-plugin-videoplayer
  </a>
</p>

<!-- description -->

<p>A Codova plugin that simply allows you to immediately play a video in fullscreen mode.</p>
<p>Requires Cordova plugin: <code>com.moust.cordova.videoplayer</code>. For more info, please see the <a href="https://github.com/moust/cordova-plugin-videoplayer">VideoPlayer plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { VideoPlayer } from &#39;ionic-native&#39;;


// Playing a video.
VideoPlayer.play(&quot;file:///android_asset/www/movie.mp4&quot;).then(() =&gt; {
 console.log(&#39;video completed&#39;);
}).catch(err =&gt; {
 console.log(err);
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="play"></div>
<h3><code>play(fileUrl,&nbsp;options)</code>
  
</h3>


Plays the video from the passed url.


<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      fileUrl
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>File url to the video.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>VideoOptions</code>
    </td>
    <td>
      <p>Optional video playback settings. See options above.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Resolves promise when the video was played successfully.
</div>



<div id="close"></div>
<h3><code>close()</code>
  
</h3>




Stops the video playback immediatly.











<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="VideoOptions" href="#VideoOptions"></a>VideoOptions</h2>


<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      volume
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set the initial volume of the video playback, where 0.0 is 0% volume and 1.0 is 100%.
For example: for a volume of 30% set the value to 0.3.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      scalingMode
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>There are to options for the scaling mode. SCALE_TO_FIT which is default and SCALE_TO_FIT_WITH_CROPPING.
These strings are the only ones which can be passed as option.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

