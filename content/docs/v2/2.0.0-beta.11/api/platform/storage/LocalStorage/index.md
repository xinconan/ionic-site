---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "localstorage"
title: "LocalStorage"
header_sub_title: "Ionic API Documentation"
doc: "LocalStorage"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/local-storage/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="local-storage" href="#local-storage"></a>

LocalStorage





</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/platform/storage/local-storage.ts#L0">
Improve this doc
</a>






<p>The LocalStorage storage engine uses the browser&#39;s local storage system for
storing key/value pairs.</p>
<p>Note: LocalStorage should ONLY be used for temporary data that you can afford to lose.
Given disk space constraints on a mobile device, local storage might be &quot;cleaned up&quot;
by the operating system (iOS).</p>
<p>For guaranteed, long-term storage, use the SqlStorage engine which stores data in a file.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { Storage, LocalStorage } from &#39;ionic-angular&#39;;
@Component({
  template: `&lt;ion-content&gt;&lt;/ion-content&gt;`
});
export class MyClass{
 constructor(){
   this.local = new Storage(LocalStorage);
   this.local.set(&#39;didTutorial&#39;, &#39;true&#39;);
 }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="get"></div>

<h3>
<a class="anchor" name="get" href="#get"></a>
<code>get(key)</code>
  

</h3>

Get the value of a key in LocalStorage


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
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key you want to lookup in LocalStorage</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the value has been retrieved</p>


</div>




<div id="set"></div>

<h3>
<a class="anchor" name="set" href="#set"></a>
<code>set(key,&nbsp;value)</code>
  

</h3>

Set a key value pair and save it to LocalStorage


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
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key you want to save to LocalStorage</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the value of the key you&#39;re saving</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the key value pair have been set</p>


</div>




<div id="remove"></div>

<h3>
<a class="anchor" name="remove" href="#remove"></a>
<code>remove(key)</code>
  

</h3>

Remove a key from LocalStorage


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
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key you want to remove from LocalStorage</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the key has been removed</p>


</div>




<div id="clear"></div>

<h3>
<a class="anchor" name="clear" href="#clear"></a>
<code>clear()</code>
  

</h3>

Clear data stored in LocalStorage






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the data have been cleared</p>


</div>







<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/platform/storage/'>Storage Platform Docs</a><!-- end content block -->


<!-- end body block -->

