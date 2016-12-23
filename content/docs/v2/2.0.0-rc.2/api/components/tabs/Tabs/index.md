---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "tabs"
title: "Tabs"
header_sub_title: "Ionic API Documentation"
doc: "Tabs"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/tabs/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="tabs" href="#tabs"></a>

Tabs
<h3><code>ion-tabs</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master/src/components/tabs/tabs.ts#L14">
Improve this doc
</a>






<p>Tabs make it easy to navigate between different pages or functional
aspects of an app. The Tabs component, written as <code>&lt;ion-tabs&gt;</code>, is
a container of individual <a href="../Tab/">Tab</a> components. Each individual <code>ion-tab</code>
is a declarative component for a <a href="../../../navigation/NavController/">NavController</a></p>
<p>For more information on using nav controllers like Tab or <a href="../../nav/Nav/">Nav</a>,
take a look at the <a href="../../../navigation/NavController/">NavController API Docs</a>.</p>
<h3 id="placement">Placement</h3>
<p>The position of the tabs relative to the content varies based on
the mode. The tabs are placed at the bottom of the screen
for iOS and Android, and at the top for Windows by default. The position can
be configured using the <code>tabsPlacement</code> attribute on the <code>&lt;ion-tabs&gt;</code> component,
or in an app&#39;s <a href="../../config/Config/">config</a>.
See the <a href="#input-properties">Input Properties</a> below for the available
values of <code>tabsPlacement</code>.</p>
<h3 id="layout">Layout</h3>
<p>The layout for all of the tabs can be defined using the <code>tabsLayout</code>
property. If the individual tab has a title and icon, the icons will
show on top of the title by default. All tabs can be changed by setting
the value of <code>tabsLayout</code> on the <code>&lt;ion-tabs&gt;</code> element, or in your
app&#39;s <a href="../../config/Config/">config</a>. For example, this is useful if
you want to show tabs with a title only on Android, but show icons
and a title for iOS. See the <a href="#input-properties">Input Properties</a>
below for the available values of <code>tabsLayout</code>.</p>
<h3 id="selecting-a-tab">Selecting a Tab</h3>
<p>There are different ways you can select a specific tab from the tabs
component. You can use the <code>selectedIndex</code> property to set the index
on the <code>&lt;ion-tabs&gt;</code> element, or you can call <code>select()</code> from the <code>Tabs</code>
instance after creation. See <a href="#usage">usage</a> below for more information.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>You can add a basic tabs template to a <code>@Component</code> using the following
template:</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
  &lt;ion-tab [root]=&quot;tab1Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab2Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab3Root&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Where <code>tab1Root</code>, <code>tab2Root</code>, and <code>tab3Root</code> are each a page:</p>
<pre><code class="lang-ts">@Component({
  templateUrl: &#39;build/pages/tabs/tabs.html&#39;
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab&#39;s root Page
  tab1Root = Page1;
  tab2Root = Page2;
  tab3Root = Page3;

  constructor() {

  }
}
</code></pre>
<p>By default, the first tab will be selected upon navigation to the
Tabs page. We can change the selected tab by using <code>selectedIndex</code>
on the <code>&lt;ion-tabs&gt;</code> element:</p>
<pre><code class="lang-html">&lt;ion-tabs selectedIndex=&quot;2&quot;&gt;
  &lt;ion-tab [root]=&quot;tab1Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab2Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab3Root&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Since the index starts at <code>0</code>, this will select the 3rd tab which has
root set to <code>tab3Root</code>. If you wanted to change it dynamically from
your class, you could use <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding">property binding</a>.</p>
<p>Alternatively, you can grab the <code>Tabs</code> instance and call the <code>select()</code>
method. This requires the <code>&lt;ion-tabs&gt;</code> element to have an <code>id</code>. For
example, set the value of <code>id</code> to <code>myTabs</code>:</p>
<pre><code class="lang-html">&lt;ion-tabs #myTabs&gt;
  &lt;ion-tab [root]=&quot;tab1Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab2Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab3Root&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Then in your class you can grab the <code>Tabs</code> instance and call <code>select()</code>,
passing the index of the tab as the argument. Here we&#39;re grabbing the tabs
by using ViewChild.</p>
<pre><code class="lang-ts">export class TabsPage {

@ViewChild(&#39;myTabs&#39;) tabRef: Tabs;

ionViewDidEnter() {
  this.tabRef.select(2);
 }

}
</code></pre>
<p>You can also switch tabs from a child component by calling <code>select()</code> on the
parent view using the <code>NavController</code> instance. For example, assuming you have
a <code>TabsPage</code> component, you could call the following from any of the child
components to switch to <code>TabsRoot3</code>:</p>
<pre><code class="lang-ts">switchTabs() {
  this.navCtrl.parent.switch(2);
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="viewCtrl"></div>

<h3>
<a class="anchor" name="viewCtrl" href="#viewCtrl"></a>
<code>viewCtrl</code>
  

</h3>












<div id="ngOnDestroy"></div>

<h3>
<a class="anchor" name="ngOnDestroy" href="#ngOnDestroy"></a>
<code>ngOnDestroy()</code>
  

</h3>












<div id="select"></div>

<h3>
<a class="anchor" name="select" href="#select"></a>
<code>select(tabOrIndex)</code>
  

</h3>




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
        tabOrIndex
        
        
      </td>
      <td>
        
  <code>number</code>|<code>Tab</code>
      </td>
      <td>
        <p>Index, or the Tab instance, of the tab to select.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="previousTab"></div>

<h3>
<a class="anchor" name="previousTab" href="#previousTab"></a>
<code>previousTab(trimHistory)</code>
  

</h3>

Get the previously selected Tab which is currently not disabled or hidden.


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
        trimHistory
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>If the selection history should be trimmed up to the previous tab selection or not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Tab</code> 

</div>




<div id="getByIndex"></div>

<h3>
<a class="anchor" name="getByIndex" href="#getByIndex"></a>
<code>getByIndex(index)</code>
  

</h3>




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
        index
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Index of the tab you want to get</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Tab</code> <p>Returns the tab who&#39;s index matches the one passed</p>


</div>




<div id="getSelected"></div>

<h3>
<a class="anchor" name="getSelected" href="#getSelected"></a>
<code>getSelected()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Tab</code> <p>Returns the currently selected tab</p>


</div>



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
      <td>selectedIndex</td>
      <td><code>number</code></td>
      <td><p> The default selected tab index when first loaded. If a selected index isn&#39;t provided then it will use <code>0</code>, the first tab.</p>
</td>
    </tr>
    
    <tr>
      <td>tabsLayout</td>
      <td><code>string</code></td>
      <td><p> Set the tabbar layout: <code>icon-top</code>, <code>icon-left</code>, <code>icon-right</code>, <code>icon-bottom</code>, <code>icon-hide</code>, <code>title-hide</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>tabsPlacement</td>
      <td><code>string</code></td>
      <td><p> Set position of the tabbar: <code>top</code>, <code>bottom</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>tabsHighlight</td>
      <td><code>boolean</code></td>
      <td><p> Whether to show the tab highlight bar under the selected tab. Default: <code>false</code>.</p>
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
      <td><p> Expression to evaluate when the tab changes.</p>
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
        
          <td><code>scale($tabs-md-tab-font-size / $tabs-md-tab-font-size-active)</code></td>
        
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



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#tabs'>Tabs Component Docs</a>,
<a href='../Tab'>Tab API Docs</a>,
<a href='../../config/Config'>Config API Docs</a><!-- end content block -->


<!-- end body block -->

