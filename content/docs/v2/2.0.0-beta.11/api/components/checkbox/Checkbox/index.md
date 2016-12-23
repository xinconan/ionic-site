---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "checkbox"
title: "Checkbox"
header_sub_title: "Ionic API Documentation"
doc: "Checkbox"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/checkbox/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="checkbox" href="#checkbox"></a>

Checkbox
<h3><code>ion-checkbox</code></h3>






</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/components/checkbox/checkbox.ts#L8">
Improve this doc
</a>






<p>The Checkbox is a simple component styled based on the mode. It can be
placed in an <code>ion-item</code> or used as a stand-alone checkbox.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular 2 Docs</a>
for more info on forms and inputs.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Pepperoni&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;pepperoni&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Sausage&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;sausage&quot; disabled=&quot;true&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Mushrooms&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;mushrooms&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
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
      <td><code>boolean</code></td>
      <td><p> whether or not the checkbox is checked (defaults to false)</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> whether or not the checkbox is disabled or not.</p>
</td>
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
      <td><p> expression to evaluate when the checkbox value changes</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#checkbox'>Checkbox Component Docs</a><!-- end content block -->


<!-- end body block -->

