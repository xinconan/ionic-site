---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "haptic"
title: "Haptic"
header_sub_title: "Ionic API Documentation"
doc: "Haptic"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="haptic" href="#haptic"></a>

Haptic





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/util/haptic.ts#L4">
Improve this doc
</a>






<p>The <code>Haptic</code> class interacts with a haptic engine on the device, if available. Generally,
Ionic components use this under the hood, but you&#39;re welcome to get a bit crazy with it
if you fancy.</p>
<p>Currently, this uses the Taptic engine on iOS.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">export class MyClass{
 constructor(haptic: Haptic){
   haptic.selection();
 }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="available"></div>

<h3>
<a class="anchor" name="available" href="#available"></a>
<code>available()</code>
  

</h3>

Check to see if the Haptic Plugin is available






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Retuns true or false if the plugin is available</p>


</div>




<div id="selection"></div>

<h3>
<a class="anchor" name="selection" href="#selection"></a>
<code>selection()</code>
  

</h3>

Trigger a selection changed haptic event. Good for one-time events (not for gestures)











<div id="gestureSelectionStart"></div>

<h3>
<a class="anchor" name="gestureSelectionStart" href="#gestureSelectionStart"></a>
<code>gestureSelectionStart()</code>
  

</h3>

Tell the haptic engine that a gesture for a selection change is starting.











<div id="gestureSelectionChanged"></div>

<h3>
<a class="anchor" name="gestureSelectionChanged" href="#gestureSelectionChanged"></a>
<code>gestureSelectionChanged()</code>
  

</h3>

Tell the haptic engine that a selection changed during a gesture.











<div id="gestureSelectionEnd"></div>

<h3>
<a class="anchor" name="gestureSelectionEnd" href="#gestureSelectionEnd"></a>
<code>gestureSelectionEnd()</code>
  

</h3>

Tell the haptic engine we are done with a gesture. This needs to be
called lest resources are not properly recycled.











<div id="notification"></div>

<h3>
<a class="anchor" name="notification" href="#notification"></a>
<code>notification()</code>
  

</h3>

Use this to indicate success/failure/warning to the user.
options should be of the type `{ type: 'success' }` (or `warning`/`error`)











<div id="impact"></div>

<h3>
<a class="anchor" name="impact" href="#impact"></a>
<code>impact()</code>
  

</h3>

Use this to indicate success/failure/warning to the user.
options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)














<!-- related link --><!-- end content block -->


<!-- end body block -->

