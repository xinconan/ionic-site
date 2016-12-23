---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.0"
versionHref: "/docs/v2/2.0.0-rc.0"
path: ""
category: api
id: "tabbutton"
title: "TabButton"
header_sub_title: "Ionic API Documentation"
doc: "TabButton"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="tab-button" href="#tab-button"></a>

TabButton
<h3><code>.tab-button</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/tabs/tab-button.ts#L4">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="disHover"></div>

<h3>
<a class="anchor" name="disHover" href="#disHover"></a>
<code>disHover</code>
  

</h3>












<div id="hasTitle"></div>

<h3>
<a class="anchor" name="hasTitle" href="#hasTitle"></a>
<code>hasTitle</code>
  

</h3>












<div id="hasIcon"></div>

<h3>
<a class="anchor" name="hasIcon" href="#hasIcon"></a>
<code>hasIcon</code>
  

</h3>












<div id="hasTitleOnly"></div>

<h3>
<a class="anchor" name="hasTitleOnly" href="#hasTitleOnly"></a>
<code>hasTitleOnly</code>
  

</h3>












<div id="hasIconOnly"></div>

<h3>
<a class="anchor" name="hasIconOnly" href="#hasIconOnly"></a>
<code>hasIconOnly</code>
  

</h3>












<div id="hasBadge"></div>

<h3>
<a class="anchor" name="hasBadge" href="#hasBadge"></a>
<code>hasBadge</code>
  

</h3>












<div id="layout"></div>

<h3>
<a class="anchor" name="layout" href="#layout"></a>
<code>layout</code>
  

</h3>












<div id="ngOnInit"></div>

<h3>
<a class="anchor" name="ngOnInit" href="#ngOnInit"></a>
<code>ngOnInit()</code>
  

</h3>












<div id="onClick"></div>

<h3>
<a class="anchor" name="onClick" href="#onClick"></a>
<code>onClick()</code>
  

</h3>












<div id="updateHref"></div>

<h3>
<a class="anchor" name="updateHref" href="#updateHref"></a>
<code>updateHref()</code>
  

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
      <td>tab</td>
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
      <td>ionSelect</td>
      <td></td>
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
        <td><code>$tabs-ios-border</code></td>
        
          <td><code>$hairlines-width solid $toolbar-ios-border-color</code></td>
        
        <td><p>Border on the tabbar (border-top when [tabsPlacement=bottom] and border-bottom when [tabsPlacement=top])</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-background</code></td>
        
          <td><code>$toolbar-ios-background</code></td>
        
        <td><p>Background color of the tabbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-tab-padding</code></td>
        
          <td><code>0 2px</code></td>
        
        <td><p>Padding on the tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-tab-max-width</code></td>
        
          <td><code>240px</code></td>
        
        <td><p>Max width of the tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-tab-min-height</code></td>
        
          <td><code>49px</code></td>
        
        <td><p>Min height of the tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-tab-color</code></td>
        
          <td><code>$toolbar-ios-inactive-color</code></td>
        
        <td><p>Text color of the inactive tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-tab-color-active</code></td>
        
          <td><code>$toolbar-ios-active-color</code></td>
        
        <td><p>Text color of the active tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-tab-font-size</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Font size of the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-ios-tab-icon-size</code></td>
        
          <td><code>30px</code></td>
        
        <td><p>Size of the tab button icon</p>
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
        <td><code>$tabs-md-background</code></td>
        
          <td><code>$toolbar-md-background</code></td>
        
        <td><p>Background color of the tabbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-padding</code></td>
        
          <td><code>8px 0 10px 0</code></td>
        
        <td><p>Padding on the tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-min-height</code></td>
        
          <td><code>5.6rem</code></td>
        
        <td><p>Min height of the tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-font-size</code></td>
        
          <td><code>1.2rem</code></td>
        
        <td><p>Font size of the inactive tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-font-weight</code></td>
        
          <td><code>normal</code></td>
        
        <td><p>Font weight of the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-opacity</code></td>
        
          <td><code>.7</code></td>
        
        <td><p>Opacity of the inactive tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-color</code></td>
        
          <td><code>rgba($toolbar-md-inactive-color, $tabs-md-tab-opacity)</code></td>
        
        <td><p>Text color of the inactive tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-padding-active</code></td>
        
          <td><code>6px 0 10px 0</code></td>
        
        <td><p>Padding of the active tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-font-size-active</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the active tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-color-active</code></td>
        
          <td><code>$toolbar-md-active-color</code></td>
        
        <td><p>Text color of the active tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-text-margin</code></td>
        
          <td><code>6px 0</code></td>
        
        <td><p>Margin on the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-text-capitalization</code></td>
        
          <td><code>none</code></td>
        
        <td><p>Capitalization of the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-text-transform</code></td>
        
          <td><code>scale(.85)</code></td>
        
        <td><p>Transform for the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-text-transform-origin</code></td>
        
          <td><code>bottom center</code></td>
        
        <td><p>Transform origin for the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-text-margin-active</code></td>
        
          <td><code>7px 0</code></td>
        
        <td><p>Margin on the active tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-text-transform-active</code></td>
        
          <td><code>scale(1)</code></td>
        
        <td><p>Transform for the active tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-text-transition</code></td>
        
          <td><code>transform 200ms ease-in-out</code></td>
        
        <td><p>Text transition for the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-md-tab-icon-size</code></td>
        
          <td><code>2.4rem</code></td>
        
        <td><p>Size of the tab button icon</p>
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
        <td><code>$tabs-wp-background</code></td>
        
          <td><code>$toolbar-wp-background</code></td>
        
        <td><p>Background color of the tabbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-padding</code></td>
        
          <td><code>12px 10px 5px 10px</code></td>
        
        <td><p>Padding on the tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-min-height</code></td>
        
          <td><code>4.8rem</code></td>
        
        <td><p>Min height of the tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-font-size</code></td>
        
          <td><code>1.2rem</code></td>
        
        <td><p>Font size of the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-font-weight</code></td>
        
          <td><code>normal</code></td>
        
        <td><p>Font weight of the tab button text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-opacity</code></td>
        
          <td><code>.7</code></td>
        
        <td><p>Opacity of the inactive tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-color</code></td>
        
          <td><code>rgba($toolbar-wp-inactive-color, $tabs-wp-tab-opacity)</code></td>
        
        <td><p>Text color of the inactive tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-color-active</code></td>
        
          <td><code>$toolbar-wp-active-color</code></td>
        
        <td><p>Text color of the active tab button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-border</code></td>
        
          <td><code>2px solid transparent</code></td>
        
        <td><p>Border on the inactive tab button (border-top when [tabsPlacement=bottom] and border-bottom when [tabsPlacement=top])</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-border-color-active</code></td>
        
          <td><code>$tabs-wp-tab-color-active</code></td>
        
        <td><p>Border color on the active tab button (border-top when [tabsPlacement=bottom] and border-bottom when [tabsPlacement=top])</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-background-activated</code></td>
        
          <td><code>rgba(0, 0, 0, .1)</code></td>
        
        <td><p>Background of the tab button when pressed</p>
</td>
      </tr>
      
      <tr>
        <td><code>$tabs-wp-tab-icon-size</code></td>
        
          <td><code>2.4rem</code></td>
        
        <td><p>Size of the tab button icon</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

