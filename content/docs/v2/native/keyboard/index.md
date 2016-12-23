---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "keyboard"
title: "Keyboard"
header_sub_title: "Class in module "
doc: "Keyboard"
docType: "class"
---







<h1 class="api-title">
  
  Keyboard
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/keyboard.ts#L1">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add ionic-plugin-keyboard</code></pre>
<p>Repo:
  <a href="https://github.com/driftyco/ionic-plugin-keyboard">
    https://github.com/driftyco/ionic-plugin-keyboard
  </a>
</p>

<!-- description -->




<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Keyboard } from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="hideKeyboardAccessoryBar"></div>
<h3><code>hideKeyboardAccessoryBar(hide)</code>
  
</h3>




Hide the keyboard accessory bar with the next, previous and done buttons.


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
      hide
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="show"></div>
<h3><code>show()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>BlackBerry 10</code>&nbsp;
  
  <code>Windows</code>&nbsp;
  </p>



Force keyboard to be shown.










<div id="close"></div>
<h3><code>close()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Android</code>&nbsp;
  
  <code>BlackBerry 10</code>&nbsp;
  
  <code>Windows</code>&nbsp;
  </p>



Close the keyboard if open.










<div id="disableScroll"></div>
<h3><code>disableScroll(disable)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Windows</code>&nbsp;
  </p>



Prevents the native UIScrollView from moving when an input is focused.


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
      disable
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="onKeyboardShow"></div>
<h3><code>onKeyboardShow()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Android</code>&nbsp;
  
  <code>BlackBerry 10</code>&nbsp;
  
  <code>Windows</code>&nbsp;
  </p>



Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="onKeyboardHide"></div>
<h3><code>onKeyboardHide()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Android</code>&nbsp;
  
  <code>BlackBerry 10</code>&nbsp;
  
  <code>Windows</code>&nbsp;
  </p>



Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

