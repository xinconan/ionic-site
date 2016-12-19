---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2"
path: ""
category: api
id: "loadingcontroller"
title: "LoadingController"
header_sub_title: "Ionic API Documentation"
doc: "LoadingController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/loading/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="loading-controller" href="#loading-controller"></a>

LoadingController





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/components/loading/loading.ts#L57">
Improve this doc
</a>






<p>An overlay that can be used to indicate activity while blocking user
interaction. The loading indicator appears on top of the app&#39;s content,
and can be dismissed by the app to resume user interaction with
the app. It includes an optional backdrop, which can be disabled
by setting <code>showBackdrop: false</code> upon creation.</p>
<h3 id="creating">Creating</h3>
<p>You can pass all of the loading options in the first argument of
the create method: <code>create(opts)</code>. The spinner name should be
passed in the <code>spinner</code> property, and any optional HTML can be passed
in the <code>content</code> property. If you do not pass a value to <code>spinner</code>
the loading indicator will use the spinner specified by the mode. To
set the spinner name across the app, set the value of <code>loadingSpinner</code>
in your app&#39;s config. To hide the spinner, set <code>loadingSpinner: &#39;hide&#39;</code>
in the app&#39;s config or pass <code>spinner: &#39;hide&#39;</code> in the loading
options. See the <a href="#create">create</a> method below for all available options.</p>
<h3 id="dismissing">Dismissing</h3>
<p>The loading indicator can be dismissed automatically after a specific
amount of time by passing the number of milliseconds to display it in
the <code>duration</code> of the loading options. By default the loading indicator
will show even during page changes, but this can be disabled by setting
<code>dismissOnPageChange</code> to <code>true</code>. To dismiss the loading indicator after
creation, call the <code>dismiss()</code> method on the Loading instance. The
<code>onDidDismiss</code> function can be called to perform an action after the loading
indicator is dismissed.</p>
<blockquote>
<p>Note that after the component is dismissed, it will not be usable anymore
and another one must be created. This can be avoided by wrapping the
creation and presentation of the component in a reusable function as shown
in the <code>usage</code> section below.</p>
</blockquote>
<h3 id="limitations">Limitations</h3>
<p>The element is styled to appear on top of other content by setting its
<code>z-index</code> property. You must ensure no element has a stacking context with
a higher <code>z-index</code> than this element.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">constructor(public loadingCtrl: LoadingController) {

}

presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: &#39;Please wait...&#39;
  });

  loading.present();

  setTimeout(() =&gt; {
    loading.dismiss();
  }, 5000);
}

presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner: &#39;hide&#39;,
    content: `
      &lt;div class=&quot;custom-spinner-container&quot;&gt;
        &lt;div class=&quot;custom-spinner-box&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;`,
    duration: 5000
  });

  loading.onDidDismiss(() =&gt; {
    console.log(&#39;Dismissed loading&#39;);
  });

  loading.present();
}

presentLoadingText() {
  let loading = this.loadingCtrl.create({
    spinner: &#39;hide&#39;,
    content: &#39;Loading Please Wait...&#39;
  });

  loading.present();

  setTimeout(() =&gt; {
    this.nav.push(Page2);
  }, 1000);

  setTimeout(() =&gt; {
    loading.dismiss();
  }, 5000);
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="create"></div>

<h3>
<a class="anchor" name="create" href="#create"></a>
<code>create(opts)</code>
  

</h3>

Create a loading indicator. See below for options.


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
        opts
        
        
      </td>
      <td>
        
  <code>LoadingOptions</code>
      </td>
      <td>
        <p>Loading options</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Loading</code> <p>Returns a Loading Instance</p>


</div>


<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Loading options</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>spinner</td>
<td><code>string</code></td>
<td>The name of the SVG spinner for the loading indicator.</td>
</tr>
<tr>
<td>content</td>
<td><code>string</code></td>
<td>The html content for the loading indicator.</td>
</tr>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>Additional classes for custom styles, separated by spaces.</td>
</tr>
<tr>
<td>showBackdrop</td>
<td><code>boolean</code></td>
<td>Whether to show the backdrop. Default true.</td>
</tr>
<tr>
<td>dismissOnPageChange</td>
<td><code>boolean</code></td>
<td>Whether to dismiss the indicator when navigating to a new page. Default false.</td>
</tr>
<tr>
<td>duration</td>
<td><code>number</code></td>
<td>How many milliseconds to wait before hiding the indicator. By default, it will show until <code>dismiss()</code> is called.</td>
</tr>
</tbody>
</table>





<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/api/components/spinner/Spinner'>Spinner API Docs</a><!-- end content block -->


<!-- end body block -->

