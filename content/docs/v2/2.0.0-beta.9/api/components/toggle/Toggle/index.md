---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.9"
versionHref: "/docs/v2/2.0.0-beta.9"
path: ""
category: api
id: "toggle"
title: "Toggle"
header_sub_title: "Ionic API Documentation"
doc: "Toggle"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/toggle/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="toggle" href="#toggle"></a>

Toggle
<h3><code>ion-toggle</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/components/toggle/toggle.ts#L11">
Improve this doc
</a>






<p>A toggle technically is the same thing as an HTML checkbox input,
except it looks different and is easier to use on a touch device.
Toggles can also have colors assigned to them, by adding any color
attribute.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular 2 Docs</a>
for more info on forms and inputs.</p>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Pepperoni&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;pepperoni&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Sausage&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;sausage&quot; disabled=&quot;true&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Mushrooms&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;mushrooms&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->

<h2><a class="anchor" name="attributes" href="#attributes"></a>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>












<th>Type</th>


<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
checked
</td>


<td>
boolean
</td>


<td>
whether the toggle it toggled or not
</td>
</tr>

<tr>
<td>
disabled
</td>


<td>
boolean
</td>


<td>
whether the toggle is disabled or not
</td>
</tr>

</tbody>
</table>



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="pointerDown"></div>

<h3>
<a class="anchor" name="pointerDown" href="#pointerDown"></a>
<code>pointerDown()</code>
  

</h3>












<div id="pointerMove"></div>

<h3>
<a class="anchor" name="pointerMove" href="#pointerMove"></a>
<code>pointerMove()</code>
  

</h3>












<div id="pointerUp"></div>

<h3>
<a class="anchor" name="pointerUp" href="#pointerUp"></a>
<code>pointerUp()</code>
  

</h3>











<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>checked</td>
      <td><code></code></td>
      <td></td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code></code></td>
      <td></td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>ionChange</td>
      <td><p> expression to evaluate when the toggle value changes</p>
</td>
    </tr>
    
  </tbody>
</table>


<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#toggle'>Toggle Component Docs</a><!-- end content block -->


<!-- end body block -->

