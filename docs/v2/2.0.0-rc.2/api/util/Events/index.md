---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "events"
title: "Events"
header_sub_title: "Ionic API Documentation"
doc: "Events"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/events/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="events" href="#events"></a>

Events





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/util/events.ts#L2">
Improve this doc
</a>






<p>Events is a publish-subscribe style event system for sending and responding to application-level
events across your app.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import { Events } from &#39;ionic-angular&#39;;

constructor(public events: Events) {}

// first page (publish an event when a user is created)
function createUser(user) {
  console.log(&#39;User created!&#39;)
  events.publish(&#39;user:created&#39;, user);
}

// second page (listen for the user created event)
events.subscribe(&#39;user:created&#39;, (userEventData) =&gt; {
  // userEventData is an array of parameters, so grab our first and only arg
  console.log(&#39;Welcome&#39;, userEventData[0]);
});
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="subscribe"></div>

<h3>
<a class="anchor" name="subscribe" href="#subscribe"></a>
<code>subscribe(topic,&nbsp;handler)</code>
  

</h3>

Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.



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
        topic
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the topic to subscribe to</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        handler
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>the event handler</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="unsubscribe"></div>

<h3>
<a class="anchor" name="unsubscribe" href="#unsubscribe"></a>
<code>unsubscribe(topic,&nbsp;handler)</code>
  

</h3>

Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.



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
        topic
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the topic to unsubscribe from</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        handler
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>the event handler</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
   <p>true if a handler was removed</p>


</div>




<div id="publish"></div>

<h3>
<a class="anchor" name="publish" href="#publish"></a>
<code>publish(topic,&nbsp;eventData)</code>
  

</h3>

Publish an event to the given topic.



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
        topic
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the topic to publish to</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        eventData
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p>the data to send as the event</p>

        
      </td>
    </tr>
    
  </tbody>
</table>











<!-- related link --><!-- end content block -->


<!-- end body block -->

