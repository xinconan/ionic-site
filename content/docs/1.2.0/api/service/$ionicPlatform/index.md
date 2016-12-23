---
layout: "docs_api"
version: "1.2.0"
versionHref: "/docs"
path: "api/service/$ionicPlatform/"

title: "$ionicPlatform"
header_sub_title: "Service in module ionic"
doc: "$ionicPlatform"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/1.x/js/angular/service/platform.js#L2'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/1.x/js/angular/service/platform.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicPlatform



</h1>





An angular abstraction of <a href="/docs/api/utility/ionic.Platform/"><code>ionic.Platform</code></a>.

Used to detect the current platform, as well as do things like override the
Android back button in PhoneGap/Cordova.










  

  
## Methods

<div id="onHardwareBackButton"></div>
<h2>
  <code>onHardwareBackButton(callback)</code>

</h2>

Some platforms have a hardware back button, so this is one way to
bind to it.



<table class="table" style="margin:0;">
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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>the callback to trigger when this event occurs</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="offHardwareBackButton"></div>
<h2>
  <code>offHardwareBackButton(callback)</code>

</h2>

Remove an event listener for the backbutton.



<table class="table" style="margin:0;">
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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>The listener function that was
originally bound.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="registerBackButtonAction"></div>
<h2>
  <code>registerBackButtonAction(callback, priority, [actionId])</code>

</h2>

Register a hardware back button action. Only one action will execute
when the back button is clicked, so this method decides which of
the registered back button actions has the highest priority.

For example, if an actionsheet is showing, the back button should
close the actionsheet, but it should not also go back a page view
or close a modal which may be open.

The priorities for the existing back button hooks are as follows:
  Return to previous view = 100
  Close side menu = 150
  Dismiss modal = 200
  Close action sheet = 300
  Dismiss popup = 400
  Dismiss loading overlay = 500

Your back button action will override each of the above actions
whose priority is less than the priority you provide. For example,
an action assigned a priority of 101 will override the 'return to
previous view' action, but not any of the other actions.



<table class="table" style="margin:0;">
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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>Called when the back button is pressed,
if this listener is the highest priority.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        priority
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Only the highest priority will execute.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        actionId
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>*</code>
      </td>
      <td>
        <p>The id to assign this action. Default: a
random unique id.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>function</code> A function that, when called, will deregister
this backButtonAction.




<div id="on"></div>
<h2>
  <code>on(type, callback)</code>

</h2>

Add Cordova event listeners, such as `pause`, `resume`, `volumedownbutton`, `batterylow`,
`offline`, etc. More information about available event types can be found in
[Cordova's event documentation](https://cordova.apache.org/docs/en/edge/cordova_events_events.md.html#Events).



<table class="table" style="margin:0;">
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
        type
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Cordova <a href="https://cordova.apache.org/docs/en/edge/cordova_events_events.md.html#Events">event type</a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>Called when the Cordova event is fired.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>function</code> Returns a deregistration function to remove the event listener.




<div id="ready"></div>
<h2>
  <code>ready([callback])</code>

</h2>

Trigger a callback once the device is ready,
or immediately if the device is already ready.



<table class="table" style="margin:0;">
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
        callback
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>function=</code>
      </td>
      <td>
        <p>The function to call.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>promise</code> A promise which is resolved when the device is ready.



  
  






