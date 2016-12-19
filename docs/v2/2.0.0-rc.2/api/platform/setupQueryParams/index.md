---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "setupqueryparams"
title: "setupQueryParams"
header_sub_title: "Ionic API Documentation"
doc: "setupQueryParams"
docType: "function"

---









<h1 class="api-title">
<a class="anchor" name="setup-query-params" href="#setup-query-params"></a>

setupQueryParams





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/platform/query-params.ts#L34">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->


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
        <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
          <td><code>767px</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
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
        <td><code>$cordova-ios-statusbar-padding</code></td>
        
          <td><code>20px</code></td>
        
        <td><p>Height of the Statusbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$cordova-ios-statusbar-padding-modal-max-width</code></td>
        
          <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
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
        <td><code>$cordova-md-statusbar-padding</code></td>
        
          <td><code>20px</code></td>
        
        <td><p>Height of the Statusbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$cordova-md-statusbar-padding-modal-max-width</code></td>
        
          <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
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
        <td><code>$cordova-wp-statusbar-padding</code></td>
        
          <td><code>20px</code></td>
        
        <td><p>Height of the Statusbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$cordova-wp-statusbar-padding-modal-max-width</code></td>
        
          <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

