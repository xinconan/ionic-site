---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "calendar"
title: "Calendar"
header_sub_title: "Class in module "
doc: "Calendar"
docType: "class"
---








<h1 class="api-title">

  
  Calendar
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/calendar.ts#L15">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-calendar</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin
  </a>
</p>

<!-- description -->

<p>This plugin allows you to add events to the Calendar of the mobile device.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-calendar</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin">Calendar plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {Calendar} from &#39;ionic-native&#39;;



Calendar.createCalendar(&#39;MyCalendar&#39;).then(
  (msg) =&gt; { console.log(msg); },
  (err) =&gt; { console.log(err); }
);
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="hasReadWritePermission"></div>
<h3><code>hasReadWritePermission()</code>
  
</h3>

This function checks if we have permission to read/write from/to the calendar.
The promise will resolve with `true` when:
- You're running on iOS, or
- You're targetting API level lower than 23, or
- You're using Android < 6, or
- You've already granted permission

If this returns false, you should call `requestReadWritePermissions` function






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="hasReadPermission"></div>
<h3><code>hasReadPermission()</code>
  
</h3>

Check if we have read permission






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="hasWritePermission"></div>
<h3><code>hasWritePermission()</code>
  
</h3>

Check if we have write permission






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="requestWritePermission"></div>
<h3><code>requestWritePermission()</code>
  
</h3>

Request write permission






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestReadPermission"></div>
<h3><code>requestReadPermission()</code>
  
</h3>

Request read permission






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestReadWritePermission"></div>
<h3><code>requestReadWritePermission()</code>
  
</h3>

Requests read/write permissions






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="createCalendar"></div>
<h3><code>createCalendar(nameOrOptions)</code>
  
</h3>

Create a calendar. (iOS only)



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
      nameOrOptions
      
      
    </td>
    <td>
      
<code>string</code>|<code>Object</code>
    </td>
    <td>
      <p>either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise
</div>



<div id="deleteCalendar"></div>
<h3><code>deleteCalendar(name)</code>
  
</h3>

Delete a calendar. (iOS only)


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
      name
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of the calendar to delete.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="getCalendarOptions"></div>
<h3><code>getCalendarOptions()</code>
  
</h3>



Returns the default calendar options.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns an object with the default calendar options:
  firstReminderMinutes: 60,
  secondReminderMinutes: null,
  recurrence: null, // options are: 'daily', 'weekly', 'monthly', 'yearly'
  recurrenceInterval: 1, // only used when recurrence is set
  recurrenceEndDate: null,
  calendarName: null,
  calendarId: null,
  url: null


</div>



<div id="createEvent"></div>
<h3><code>createEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>
  
</h3>

Silently create an event.


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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="createEventWithOptions"></div>
<h3><code>createEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code>
  
</h3>

Silently create an event with additional options.



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="createEventInteractively"></div>
<h3><code>createEventInteractively(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>
  
</h3>

Interactively create an event.



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="createEventInteractivelyWithOptions"></div>
<h3><code>createEventInteractivelyWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code>
  
</h3>

Interactively create an event with additional options.



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="findEvent"></div>
<h3><code>findEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>
  
</h3>

Find an event.



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="findEventWithOptions"></div>
<h3><code>findEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code>
  
</h3>

Find an event with additional options.


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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the event, or rejects with an error.


</div>



<div id="listEventsInRange"></div>
<h3><code>listEventsInRange(startDate,&nbsp;endDate)</code>
  
</h3>

Find a list of events within the specified date range. (Android only)



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
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the list of events, or rejects with an error.


</div>



<div id="listCalendars"></div>
<h3><code>listCalendars()</code>
  
</h3>

Get a list of all calendars.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 A Promise that resolves with the list of calendars, or rejects with an error.


</div>



<div id="findAllEventsInNamedCalendar"></div>
<h3><code>findAllEventsInNamedCalendar()</code>
  
</h3>

Get a list of all future events in the specified calendar. (iOS only)






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the list of events, or rejects with an error.


</div>



<div id="modifyEvent"></div>
<h3><code>modifyEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;newTitle,&nbsp;newLocation,&nbsp;newNotes,&nbsp;newStartDate,&nbsp;newEndDate)</code>
  
</h3>

Modify an event. (iOS only)



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newTitle
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newLocation
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newNotes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newStartDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newEndDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="modifyEventWithOptions"></div>
<h3><code>modifyEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;newTitle,&nbsp;newLocation,&nbsp;newNotes,&nbsp;newStartDate,&nbsp;newEndDate,&nbsp;options)</code>
  
</h3>

Modify an event with additional options. (iOS only)



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newTitle
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newLocation
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newNotes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newStartDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newEndDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="deleteEvent"></div>
<h3><code>deleteEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>
  
</h3>

Delete an event.



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="deleteEventFromNamedCalendar"></div>
<h3><code>deleteEventFromNamedCalendar(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;calendarName)</code>
  
</h3>

Delete an event from the specified Calendar. (iOS only)



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      calendarName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="openCalendar"></div>
<h3><code>openCalendar(date)</code>
  
</h3>

Open the calendar at the specified date.


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
      date
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The date you want to open the calendar on</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Promise returns a promise
</div>




<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

