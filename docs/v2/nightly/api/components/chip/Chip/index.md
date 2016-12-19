---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "chip"
title: "Chip"
header_sub_title: "Ionic API Documentation"
doc: "Chip"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/chip/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="chip" href="#chip"></a>

Chip
<h3><code>ion-chip</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/chip/chip.ts#L3">
Improve this doc
</a>






<p>Chips represent complex entities in small blocks, such as a contact.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-chip&gt;
  &lt;ion-label&gt;Default&lt;/ion-label&gt;
&lt;/ion-chip&gt;

&lt;ion-chip&gt;
  &lt;ion-label color=&quot;secondary&quot;&gt;Secondary Label&lt;/ion-label&gt;
&lt;/ion-chip&gt;

&lt;ion-chip color=&quot;secondary&quot;&gt;
  &lt;ion-label color=&quot;dark&quot;&gt;Secondary w/ Dark label&lt;/ion-label&gt;
&lt;/ion-chip&gt;

&lt;ion-chip color=&quot;danger&quot;&gt;
  &lt;ion-label&gt;Danger&lt;/ion-label&gt;
&lt;/ion-chip&gt;

&lt;ion-chip&gt;
  &lt;ion-icon name=&quot;pin&quot;&gt;&lt;/ion-icon&gt;
  &lt;ion-label&gt;Default&lt;/ion-label&gt;
&lt;/ion-chip&gt;

&lt;ion-chip&gt;
  &lt;ion-icon name=&quot;heart&quot; color=&quot;dark&quot;&gt;&lt;/ion-icon&gt;
  &lt;ion-label&gt;Default&lt;/ion-label&gt;
&lt;/ion-chip&gt;

&lt;ion-chip&gt;
  &lt;ion-avatar&gt;
    &lt;img src=&quot;img/my-img.png&quot;&gt;
  &lt;/ion-avatar&gt;
  &lt;ion-label&gt;Default&lt;/ion-label&gt;
&lt;/ion-chip&gt;
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
    
  </tbody>
</table><h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<pre><code class="lang-html">&lt;ion-chip #chip1&gt;
  &lt;ion-label&gt;Default&lt;/ion-label&gt;
  &lt;button ion-button clear color=&quot;light&quot; (click)=&quot;delete(chip1)&quot;&gt;
    &lt;ion-icon name=&quot;close-circle&quot;&gt;&lt;/ion-icon&gt;
  &lt;/button&gt;
&lt;/ion-chip&gt;

&lt;ion-chip #chip2&gt;
  &lt;ion-icon name=&quot;pin&quot; color=&quot;primary&quot;&gt;&lt;/ion-icon&gt;
  &lt;ion-label&gt;With Icon&lt;/ion-label&gt;
  &lt;button ion-button (click)=&quot;delete(chip2)&quot;&gt;
    &lt;ion-icon name=&quot;close&quot;&gt;&lt;/ion-icon&gt;
  &lt;/button&gt;
&lt;/ion-chip&gt;

&lt;ion-chip #chip3&gt;
  &lt;ion-avatar&gt;
    &lt;img src=&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==&quot;&gt;
  &lt;/ion-avatar&gt;
  &lt;ion-label&gt;With Avatar&lt;/ion-label&gt;
  &lt;button ion-button clear color=&quot;dark&quot; (click)=&quot;delete(chip3)&quot;&gt;
    &lt;ion-icon name=&quot;close-circle&quot;&gt;&lt;/ion-icon&gt;
  &lt;/button&gt;
&lt;/ion-chip&gt;
</code></pre>
<pre><code class="lang-ts">@Component({
  templateUrl: &#39;main.html&#39;
})
class E2EPage {
  delete(chip: Element) {
    chip.remove();
  }
}
</code></pre>



  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">
    
      
      
      <a ng-init="setSassPlatform('base')" ng-class="{ active: active === 'base' }" ng-click="setSassPlatform('base')" >All</a>
      
      
      
      <a ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')">iOS</a>
      
      
      
      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>
      
      
      
      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>
      
      
    
  </div>


  
  <table ng-show="active === 'base'" id="sass-base" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$chip-button-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the button in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-button-margin</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin of the button in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-button-size</code></td>
        
          <td><code>32px</code></td>
        
        <td><p>Width and height of the button in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-icon-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the icon in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-icon-size</code></td>
        
          <td><code>32px</code></td>
        
        <td><p>Width and height of the icon in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-icon-font-size</code></td>
        
          <td><code>18px</code></td>
        
        <td><p>Font size of the icon in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-avatar-size</code></td>
        
          <td><code>32px</code></td>
        
        <td><p>Width and height of the avatar in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-avatar-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the avatar in the chip</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
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
        <td><code>$chip-ios-margin</code></td>
        
          <td><code>2px 0</code></td>
        
        <td><p>Margin of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-height</code></td>
        
          <td><code>32px</code></td>
        
        <td><p>Height of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-border-radius</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Border radius of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-font-size</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Font size of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-text-color</code></td>
        
          <td><code>rgba(0, 0, 0, .87)</code></td>
        
        <td><p>Text color of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-background-color</code></td>
        
          <td><code>rgba(0, 0, 0, .12)</code></td>
        
        <td><p>Background color of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-label-margin</code></td>
        
          <td><code>0 10px</code></td>
        
        <td><p>Margin of the label in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-icon-background-color</code></td>
        
          <td><code>color($colors-ios, primary)</code></td>
        
        <td><p>Background color of the icon in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-ios-icon-text-color</code></td>
        
          <td><code>color-contrast($colors-ios, $chip-ios-icon-background-color)</code></td>
        
        <td><p>Text color of the icon in the chip</p>
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
        <td><code>$chip-md-margin</code></td>
        
          <td><code>2px 0</code></td>
        
        <td><p>Margin of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-height</code></td>
        
          <td><code>32px</code></td>
        
        <td><p>Height of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-border-radius</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Border radius of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-font-size</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Font size of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-text-color</code></td>
        
          <td><code>rgba(0, 0, 0, .87)</code></td>
        
        <td><p>Text color of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-background-color</code></td>
        
          <td><code>rgba(0, 0, 0, .12)</code></td>
        
        <td><p>Background color of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-label-margin</code></td>
        
          <td><code>0 10px</code></td>
        
        <td><p>Margin of the label in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-icon-background-color</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Background color of the icon in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-md-icon-text-color</code></td>
        
          <td><code>color-contrast($colors-md, $chip-md-icon-background-color)</code></td>
        
        <td><p>Text color of the icon in the chip</p>
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
        <td><code>$chip-wp-margin</code></td>
        
          <td><code>2px 0</code></td>
        
        <td><p>Margin of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-height</code></td>
        
          <td><code>32px</code></td>
        
        <td><p>Height of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-border-radius</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Border radius of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-font-size</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Font size of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-text-color</code></td>
        
          <td><code>rgba(0, 0, 0, .87)</code></td>
        
        <td><p>Text color of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-background-color</code></td>
        
          <td><code>rgba(0, 0, 0, .12)</code></td>
        
        <td><p>Background color of the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-label-margin</code></td>
        
          <td><code>0 10px</code></td>
        
        <td><p>Margin of the label in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-icon-background-color</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Background color of the icon in the chip</p>
</td>
      </tr>
      
      <tr>
        <td><code>$chip-wp-icon-text-color</code></td>
        
          <td><code>color-contrast($colors-wp, $chip-wp-icon-background-color)</code></td>
        
        <td><p>Text color of the icon in the chip</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

