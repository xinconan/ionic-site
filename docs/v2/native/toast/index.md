---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "toast"
title: "Toast"
header_sub_title: "Class in module "
doc: "Toast"
docType: "class"
---







<h1 class="api-title">
  
  Toast
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/toast.ts#L36">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-x-toast</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
  </a>
</p>

<!-- description -->

<p>This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It&#39;s great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-x-toast</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin">Toast plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Toast } from &#39;ionic-native&#39;;


Toast.show(&quot;I&#39;m a toast&quot;, &#39;5000&#39;, &#39;center&#39;).subscribe(
  toast =&gt; {
    console.log(toast);
  }
);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="show"></div>
<h3><code>show(message,&nbsp;duration,&nbsp;position)</code>
  
</h3>




Show a native toast for the given duration at the specified position.



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
      message
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The message to display.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      duration
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Duration to show the toast, either &#39;short&#39;, &#39;long&#39; or any number of milliseconds: &#39;1500&#39;.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      position
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Where to position the toast, either &#39;top&#39;, &#39;center&#39;, or &#39;bottom&#39;.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>



<div id="hide"></div>
<h3><code>hide()</code>
  
</h3>


Manually hide any currently visible toast.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves on success.
</div>



<div id="showWithOptions"></div>
<h3><code>showWithOptions(options)</code>
  
</h3>




Show a native toast with the given options.



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
      
<code>Object</code>
    </td>
    <td>
      <p>Options for showing a toast. Available options:
  message  The message to display.
  duration  Duration to show the toast, either &#39;short&#39;, &#39;long&#39; or any number of milliseconds: &#39;1500&#39;.
  position  Where to position the toast, either &#39;top&#39;, &#39;center&#39;, or &#39;bottom&#39;.
  addPixelsY  Offset in pixels to move the toast up or down from its specified position.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>



<div id="showShortTop"></div>
<h3><code>showShortTop()</code>
  
</h3>




Shorthand for `show(message, 'short', 'top')`.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>



<div id="showShortCenter"></div>
<h3><code>showShortCenter()</code>
  
</h3>




Shorthand for `show(message, 'short', 'center')`.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>



<div id="showShortBottom"></div>
<h3><code>showShortBottom()</code>
  
</h3>




Shorthand for `show(message, 'short', 'bottom')`.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>



<div id="showLongTop"></div>
<h3><code>showLongTop()</code>
  
</h3>




Shorthand for `show(message, 'long', 'top')`.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>



<div id="showLongCenter"></div>
<h3><code>showLongCenter()</code>
  
</h3>




Shorthand for `show(message, 'long', 'center')`.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>



<div id="showLongBottom"></div>
<h3><code>showLongBottom()</code>
  
</h3>




Shorthand for `show(message, 'long', 'bottom')`.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable</code> Returns an Observable that notifies first on success and then when tapped, rejects on error.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>


<h3><a class="anchor" name="ToastOptions" href="#ToastOptions"></a>ToastOptions</h3>


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
      message
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>Message to display</p>

    </td>
  </tr>
  
  <tr>
    <td>
      duration
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      <p>Duration in ms to show</p>

    </td>
  </tr>
  
  <tr>
    <td>
      position
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>Position</p>

    </td>
  </tr>
  
  <tr>
    <td>
      addPixelsY
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      <p>Add negative value to move it up a bit</p>

    </td>
  </tr>
  
  <tr>
    <td>
      data
      <div><em>(optional)</em></div>
    </td>
    <td>
      any
    </td>
    <td>
      <p>Pass JSON object to be sent back in success callback</p>

    </td>
  </tr>
  
  <tr>
    <td>
      styling
      <div><em>(optional)</em></div>
    </td>
    <td>
      {
    opacity?: number;
    backgroundColor?: string;
    textColor?: string;
    cornerRadius?: number;
    horizontalPadding?: number;
    verticalPadding?: number;
  }
    </td>
    <td>
      <p>Styling</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

