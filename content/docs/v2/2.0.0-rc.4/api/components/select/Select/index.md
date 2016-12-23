---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.4"
versionHref: "/docs/v2/2.0.0-rc.4"
path: ""
category: api
id: "select"
title: "Select"
header_sub_title: "Ionic API Documentation"
doc: "Select"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/select/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="select" href="#select"></a>

Select
<h3><code>ion-select</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/select/select.ts#L18">
Improve this doc
</a>






<p>The <code>ion-select</code> component is similar to an HTML <code>&lt;select&gt;</code> element, however,
Ionic&#39;s select component makes it easier for users to sort through and select
the preferred option or options. When users tap the select component, a
dialog will appear with all of the options in a large, easy to select list
for users.</p>
<p>The select component takes child <code>ion-option</code> components. If <code>ion-option</code> is not
given a <code>value</code> attribute then it will use its text as the value.</p>
<h3 id="interfaces">Interfaces</h3>
<p>By default, the <code>ion-select</code> uses the <a href='../../alert/AlertController'>AlertController API</a>
to open up the overlay of options in an alert. The interface can be changed to use the
<a href='../../action-sheet/ActionSheetController'>ActionSheetController API</a> by passing
<code>action-sheet</code> to the <code>interface</code> property. Read the other sections for the limitations of the
action sheet interface.</p>
<h3 id="single-value-radio-buttons">Single Value: Radio Buttons</h3>
<p>The standard <code>ion-select</code> component allows the user to select only one
option. When selecting only one option the alert interface presents users with
a radio button styled list of options. The action sheet interface can only be
used with a single value select. If the number of options exceed 6, it will
use the <code>alert</code> interface even if <code>action-sheet</code> is passed. The <code>ion-select</code>
component&#39;s value receives the value of the selected option&#39;s value.</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Gender&lt;/ion-label&gt;
  &lt;ion-select [(ngModel)]=&quot;gender&quot;&gt;
    &lt;ion-option value=&quot;f&quot; selected=&quot;true&quot;&gt;Female&lt;/ion-option&gt;
    &lt;ion-option value=&quot;m&quot;&gt;Male&lt;/ion-option&gt;
  &lt;/ion-select&gt;
&lt;/ion-item&gt;
</code></pre>
<h3 id="multiple-value-checkboxes">Multiple Value: Checkboxes</h3>
<p>By adding the <code>multiple=&quot;true&quot;</code> attribute to <code>ion-select</code>, users are able
to select multiple options. When multiple options can be selected, the alert
overlay presents users with a checkbox styled list of options. The
<code>ion-select multiple=&quot;true&quot;</code> component&#39;s value receives an array of all the
selected option values. In the example below, because each option is not given
a <code>value</code>, then it&#39;ll use its text as the value instead.</p>
<p>Note: the action sheet interface will not work with a multi-value select.</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Toppings&lt;/ion-label&gt;
  &lt;ion-select [(ngModel)]=&quot;toppings&quot; multiple=&quot;true&quot;&gt;
    &lt;ion-option&gt;Bacon&lt;/ion-option&gt;
    &lt;ion-option&gt;Black Olives&lt;/ion-option&gt;
    &lt;ion-option&gt;Extra Cheese&lt;/ion-option&gt;
    &lt;ion-option&gt;Mushrooms&lt;/ion-option&gt;
    &lt;ion-option&gt;Pepperoni&lt;/ion-option&gt;
    &lt;ion-option&gt;Sausage&lt;/ion-option&gt;
  &lt;/ion-select&gt;
&lt;/ion-item&gt;
</code></pre>
<h3 id="select-buttons">Select Buttons</h3>
<p>By default, the two buttons read <code>Cancel</code> and <code>OK</code>. Each button&#39;s text
can be customized using the <code>cancelText</code> and <code>okText</code> attributes:</p>
<pre><code class="lang-html">&lt;ion-select okText=&quot;Okay&quot; cancelText=&quot;Dismiss&quot;&gt;
  ...
&lt;/ion-select&gt;
</code></pre>
<p>The action sheet interface does not have an <code>OK</code> button, clicking
on any of the options will automatically close the overlay and select
that value.</p>
<h3 id="select-options">Select Options</h3>
<p>Since <code>ion-select</code> uses the <code>Alert</code> and <code>Action Sheet</code> interfaces, options can be
passed to these components through the <code>selectOptions</code> property. This can be used
to pass a custom title, subtitle, css class, and more. See the
<a href='../../alert/AlertController/#create'>AlertController API docs</a> and
<a href='../../action-sheet/ActionSheetController/#create'>ActionSheetController API docs</a>
for the properties that each interface accepts.</p>
<pre><code class="lang-html">&lt;ion-select [selectOptions]=&quot;selectOptions&quot;&gt;
  ...
&lt;/ion-select&gt;
</code></pre>
<pre><code class="lang-ts">this.selectOptions = {
  title: &#39;Pizza Toppings&#39;,
  subTitle: &#39;Select your toppings&#39;
};
</code></pre>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="open"></div>

<h3>
<a class="anchor" name="open" href="#open"></a>
<code>open()</code>
  

</h3>

Open the select interface.










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
      <td>cancelText</td>
      <td><code>string</code></td>
      <td><p> The text to display on the cancel button. Default: <code>Cancel</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>okText</td>
      <td><code>string</code></td>
      <td><p> The text to display on the ok button. Default: <code>OK</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>placeholder</td>
      <td><code>string</code></td>
      <td><p> The text to display when the select is empty.</p>
</td>
    </tr>
    
    <tr>
      <td>selectOptions</td>
      <td><code>any</code></td>
      <td><p> Any additional options that the <code>alert</code> or <code>action-sheet</code> interface can take.
See the <a href="../../alert/AlertController/#create">AlertController API docs</a> and the
<a href="../../action-sheet/ActionSheetController/#create">ActionSheetController API docs</a> for the
create options for each interface.</p>
</td>
    </tr>
    
    <tr>
      <td>interface</td>
      <td><code>string</code></td>
      <td><p> The interface the select should use: <code>action-sheet</code> or <code>alert</code>. Default: <code>alert</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>selectedText</td>
      <td><code>string</code></td>
      <td><p> The text to display instead of the selected option&#39;s value.</p>
</td>
    </tr>
    
    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode to apply to this component.</p>
</td>
    </tr>
    
    <tr>
      <td>multiple</td>
      <td><code>boolean</code></td>
      <td><p> Whether or not the select component can accept multiple values. Default: <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> Whether or not the select component is disabled. Default <code>false</code>.</p>
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
      <td><p> Any expression you want to evaluate when the selection has changed.</p>
</td>
    </tr>
    
    <tr>
      <td>ionCancel</td>
      <td><p> Any expression you want to evaluate when the selection was cancelled.</p>
</td>
    </tr>
    
  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">
    
      
      
      <a ng-init="setSassPlatform('ios')" ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')" >iOS</a>
      
      
      
      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>
      
      
      
      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>
      
      
    
  </div>


  
  <table ng-show="active === 'ios'" id="sass-ios" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$select-ios-padding-top</code></td>
        
          <td><code>$item-ios-padding-top</code></td>
        
        <td><p>Padding top of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-ios-padding-right</code></td>
        
          <td><code>($item-ios-padding-right / 2)</code></td>
        
        <td><p>Padding right of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-ios-padding-bottom</code></td>
        
          <td><code>$item-ios-padding-bottom</code></td>
        
        <td><p>Padding bottom of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-ios-padding-left</code></td>
        
          <td><code>$item-ios-padding-left</code></td>
        
        <td><p>Padding left of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-ios-icon-color</code></td>
        
          <td><code>#999</code></td>
        
        <td><p>Color of the select icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-ios-placeholder-color</code></td>
        
          <td><code>$select-ios-icon-color</code></td>
        
        <td><p>Color of the select placeholder</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
  <table ng-show="active === 'md'" id="sass-md" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$select-md-padding-top</code></td>
        
          <td><code>$item-md-padding-top</code></td>
        
        <td><p>Padding top of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-md-padding-right</code></td>
        
          <td><code>($item-md-padding-right / 2)</code></td>
        
        <td><p>Padding right of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-md-padding-bottom</code></td>
        
          <td><code>$item-md-padding-bottom</code></td>
        
        <td><p>Padding bottom of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-md-padding-left</code></td>
        
          <td><code>$item-md-padding-left</code></td>
        
        <td><p>Padding left of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-md-icon-color</code></td>
        
          <td><code>#999</code></td>
        
        <td><p>Color of the select icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-md-placeholder-color</code></td>
        
          <td><code>$select-md-icon-color</code></td>
        
        <td><p>Color of the select placeholder</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
  <table ng-show="active === 'wp'" id="sass-wp" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$select-wp-padding-vertical</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Padding top and bottom of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-padding-horizontal</code></td>
        
          <td><code>($item-wp-padding-right / 2)</code></td>
        
        <td><p>Padding left and right of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-margin-top</code></td>
        
          <td><code>$item-wp-padding-top</code></td>
        
        <td><p>Margin top of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-margin-right</code></td>
        
          <td><code>($item-wp-padding-right / 2)</code></td>
        
        <td><p>Margin right of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-margin-bottom</code></td>
        
          <td><code>$item-wp-padding-bottom</code></td>
        
        <td><p>Margin bottom of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-margin-left</code></td>
        
          <td><code>($item-wp-padding-left / 2)</code></td>
        
        <td><p>Margin left of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-border-color</code></td>
        
          <td><code>$input-wp-border-color</code></td>
        
        <td><p>Border color of the select</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-icon-width</code></td>
        
          <td><code>18px</code></td>
        
        <td><p>Width of the select icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-icon-arrow-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Width of the select icon arrow</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-icon-color</code></td>
        
          <td><code>$select-wp-border-color</code></td>
        
        <td><p>Color of the select icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$select-wp-placeholder-color</code></td>
        
          <td><code>$select-wp-icon-color</code></td>
        
        <td><p>Color of the select placeholder</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

