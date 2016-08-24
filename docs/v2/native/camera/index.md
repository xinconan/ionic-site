---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "camera"
title: "Camera"
header_sub_title: "Class in module "
doc: "Camera"
docType: "class"
---








<h1 class="api-title">

  
  Camera
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/camera.ts#L85">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-camera</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-camera">
    https://github.com/apache/cordova-plugin-camera
  </a>
</p>

<!-- description -->

<p>Take a photo or capture video.</p>
<p>Requires <a href='module:driftyco/ionic-native'>ionic-native</a> and the Cordova plugin: <code>cordova-plugin-camera</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-camera">Cordova Camera Plugin Docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>BlackBerry</li>
  
  <li>Browser</li>
  
  <li>Firefox</li>
  
  <li>FireOS</li>
  
  <li>iOS</li>
  
  <li>Windows</li>
  
  <li>Windows Phone 8</li>
  
  <li>Ubuntu</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Camera } from &#39;ionic-native&#39;;


Camera.getPicture(options).then((imageData) =&gt; {
 // imageData is either a base64 encoded string or a file URI
 // If it&#39;s base64:
 let base64Image = &#39;data:image/jpeg;base64,&#39; + imageData;
}, (err) =&gt; {
 // Handle error
});
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="getPicture"></div>
<h3><code>getPicture(options)</code>
  
</h3>



Take a picture or video, or load one from the library.


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
      options
      
      
    </td>
    <td>
      
<code>CameraOptions</code>
    </td>
    <td>
      <p>Options that you want to pass to the camera. Encoding type, quality, etc. Optional</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
</div>



<div id="cleanup"></div>
<h3><code>cleanup()</code>
  
</h3>


<p>
<b>Platforms:</b>
<code>iOS</code>&nbsp;
</p>


Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>




<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

