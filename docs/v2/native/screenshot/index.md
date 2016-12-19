---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "screenshot"
title: "Screenshot"
header_sub_title: "Class in module "
doc: "Screenshot"
docType: "class"
---







<h1 class="api-title">
  
  Screenshot
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/screenshot.ts#L3">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add https://github.com/gitawego/cordova-screenshot.git</code></pre>
<p>Repo:
  <a href="https://github.com/gitawego/cordova-screenshot.git">
    https://github.com/gitawego/cordova-screenshot.git
  </a>
</p>

<!-- description -->

<p>Captures a screen shot</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import {Screenshot} from &#39;ionic-native&#39;;

// Take a screenshot and save to file
Screenshot.save(&#39;jpg&#39;, 80, &#39;myscreenshot.jpg&#39;).then(onSuccess, onError);

// Take a screenshot and get temporary file URI
Screenshot.URI(80).then(onSuccess, onError);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="save"></div>
<h3><code>save(format.,&nbsp;quality.,&nbsp;filename.)</code>
  
</h3>

Takes screenshot and saves the image



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
      format.
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Format can take the value of either &#39;jpg&#39; or &#39;png&#39;
On ios, only &#39;jpg&#39; format is supported</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      quality.
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Determines the quality of the screenshot.
       Default quality is set to 100.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      filename.
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of the file as stored on the storage</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="URI"></div>
<h3><code>URI(quality.)</code>
  
</h3>

Takes screenshot and returns the image as an URI



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
      quality.
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Determines the quality of the screenshot.
       Default quality is set to 100.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

