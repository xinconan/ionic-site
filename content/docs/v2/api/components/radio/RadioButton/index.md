---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.4"
versionHref: "/docs/v2"
path: ""
category: api
id: "radiobutton"
title: "RadioButton"
header_sub_title: "Ionic API Documentation"
doc: "RadioButton"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/radio/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="radio-button" href="#radio-button"></a>

RadioButton
<h3><code>ion-radio</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/radio/radio-button.ts#L7">
Improve this doc
</a>






<p>A radio button is a button that can be either checked or unchecked. A user can tap
the button to check or uncheck it. It can also be checked from the template using
the <code>checked</code> property.</p>
<p>Use an element with a <code>radio-group</code> attribute to group a set of radio buttons. When
radio buttons are inside a <a href="../RadioGroup">radio group</a>, exactly one radio button
in the group can be checked at any time. If a radio button is not placed in a group,
they will all have the ability to be checked at the same time.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular Forms Docs</a> for
more information on forms and input.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list radio-group [(ngModel)]=&quot;relationship&quot;&gt;
  &lt;ion-item&gt;
    &lt;ion-label&gt;Friends&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;friends&quot; checked&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;
  &lt;ion-item&gt;
    &lt;ion-label&gt;Family&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;family&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;
  &lt;ion-item&gt;
    &lt;ion-label&gt;Enemies&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;enemies&quot; [disabled]=&quot;isDisabled&quot;&gt;&lt;/ion-radio&gt;
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
      <td>color</td>
      <td><code>string</code></td>
      <td><p> The predefined color to use. For example: <code>&quot;primary&quot;</code>, <code>&quot;secondary&quot;</code>, <code>&quot;danger&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode to apply to this component.</p>
</td>
    </tr>
    
    <tr>
      <td>value</td>
      <td><code>any</code></td>
      <td><p> The value of the radio button. Defaults to the generated id.</p>
</td>
    </tr>
    
    <tr>
      <td>checked</td>
      <td><code>boolean</code></td>
      <td><p> Whether the radio button should be checked or not. Default false.</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> Whether the radio button should be disabled or not. Default false.</p>
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
      <td>ionSelect</td>
      <td><p> expression to be evaluated when selected</p>
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
        <td><code>$radio-ios-color-on</code></td>
        
          <td><code>color($colors-ios, primary)</code></td>
        
        <td><p>Color of the checked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-width</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-height</code></td>
        
          <td><code>21px</code></td>
        
        <td><p>Height of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-item-left-margin</code></td>
        
          <td><code>8px 21px 8px 3px</code></td>
        
        <td><p>Margin of the item-left in a radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-item-right-margin</code></td>
        
          <td><code>$item-ios-padding-media-top 11px $item-ios-padding-media-bottom ($item-ios-padding-left / 2)</code></td>
        
        <td><p>Margin of the item-right in a radio</p>
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
        <td><code>$radio-md-color-on</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Color of the checked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-color-off</code></td>
        
          <td><code>darken($list-md-border-color, 40%)</code></td>
        
        <td><p>Color of the unchecked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-width</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-height</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Height of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-transition-duration</code></td>
        
          <td><code>280ms</code></td>
        
        <td><p>Transition duration of the radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-transition-easing</code></td>
        
          <td><code>cubic-bezier(.4, 0, .2, 1)</code></td>
        
        <td><p>Transition easing of the radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-item-left-margin</code></td>
        
          <td><code>11px 36px 10px 4px</code></td>
        
        <td><p>Margin of the item-left in a radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-item-right-margin</code></td>
        
          <td><code>$item-md-padding-media-top 10px $item-md-padding-media-bottom 0</code></td>
        
        <td><p>Margin of the item-right in a radio</p>
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
        <td><code>$radio-wp-color-on</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Color of the checked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-color-off</code></td>
        
          <td><code>#333</code></td>
        
        <td><p>Color of the unchecked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-order</code></td>
        
          <td><code>-1</code></td>
        
        <td><p>Order of the radio (places to the left of the item)</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-width</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-height</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Height of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-item-left-margin</code></td>
        
          <td><code>9px 20px 9px 4px</code></td>
        
        <td><p>Margin of the item-left in a radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-item-right-margin</code></td>
        
          <td><code>11px 10px 10px 0</code></td>
        
        <td><p>Margin of the item-right in a radio</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#radio'>Radio Component Docs</a>,
<a href='../RadioGroup'>RadioGroup API Docs</a><!-- end content block -->


<!-- end body block -->

