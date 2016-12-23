---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "httpd"
title: "Httpd"
header_sub_title: "Class in module "
doc: "Httpd"
docType: "class"
---







<h1 class="api-title">
  
  Httpd
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/httpd.ts#L19">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add https://github.com/floatinghotpot/cordova-httpd.git</code></pre>
<p>Repo:
  <a href="https://github.com/floatinghotpot/cordova-httpd">
    https://github.com/floatinghotpot/cordova-httpd
  </a>
</p>

<!-- description -->

<p>Embedded httpd for Cordova apps. Light weight HTTP server.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import {Httpd, HttpdOptions} from &#39;ionic-native&#39;;

let options: HttpdOptions = {
     www_root: &#39;httpd_root&#39;, // relative path to app&#39;s www directory
     port: 80,
     localhost_only: false
 };

Httpd.startServer(options).subscribe((data) =&gt; {
 console.log(&#39;Server is live&#39;);
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="startServer"></div>
<h3><code>startServer(options)</code>
  
</h3>




Starts a web server.


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
      
<code>HttpdOptions</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;string&gt;</code> Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
</div>



<div id="getUrl"></div>
<h3><code>getUrl()</code>
  
</h3>


Gets the URL of the running server






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise that resolves with the URL of the web server.
</div>



<div id="getLocalPath"></div>
<h3><code>getLocalPath()</code>
  
</h3>


Get the local path of the running webserver






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise that resolves with the local path of the web server.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="HttpdOptions" href="#HttpdOptions"></a>HttpdOptions</h2>


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
      www_root
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The public root directory for your web server. This path is relative to your app&#39;s www directory.
Default is current directory.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      port
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The port number to use.
Default is 8888</p>

    </td>
  </tr>
  
  <tr>
    <td>
      localhost_only
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Setting this option to false will allow remote access to your web server (over any IP).
Default is false.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

