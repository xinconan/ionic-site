---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.0"
versionHref: "/docs/v2/2.0.0-rc.0"
path: ""
category: api
id: "itemreorder"
title: "ItemReorder"
header_sub_title: "Ionic API Documentation"
doc: "ItemReorder"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/item-reorder/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="item-reorder" href="#item-reorder"></a>

ItemReorder
<h3><code>ion-list[reorder],ion-item-group[reorder]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/item/item-reorder.ts#L12">
Improve this doc
</a>






<p>Item reorder adds the ability to change an item&#39;s order in a group.
It can be used within an <code>ion-list</code> or <code>ion-item-group</code> to provide a
visual drag and drop interface.</p>
<h2 id="grouping-items">Grouping Items</h2>
<p>All reorderable items must be grouped in the same element. If an item
should not be reordered, it shouldn&#39;t be included in this group. For
example, the following code works because the items are grouped in the
<code>&lt;ion-list&gt;</code>:</p>
<pre><code class="lang-html">&lt;ion-list reorder=&quot;true&quot;&gt;
  &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>
<p>However, the below list includes a header that shouldn&#39;t be reordered:</p>
<pre><code class="lang-html">&lt;ion-list reorder=&quot;true&quot;&gt;
  &lt;ion-list-header&gt;Header&lt;/ion-list-header&gt;
  &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>
<p>In order to mix different sets of items, <code>ion-item-group</code> should be used to
group the reorderable items:</p>
<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-list-header&gt;Header&lt;/ion-list-header&gt;
  &lt;ion-item-group reorder=&quot;true&quot;&gt;
    &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
  &lt;/ion-item-group&gt;
&lt;/ion-list&gt;
</code></pre>
<p>It&#39;s important to note that in this example, the <code>[reorder]</code> directive is applied to
the <code>&lt;ion-item-group&gt;</code> instead of the <code>&lt;ion-list&gt;</code>. This way makes it possible to
mix items that should and shouldn&#39;t be reordered.</p>
<h2 id="implementing-the-reorder-function">Implementing the Reorder Function</h2>
<p>When the item is dragged and dropped into the new position, the <code>(ionItemReorder)</code> event is
emitted. This event provides the initial index (from) and the new index (to) of the reordered
item. For example, if the first item is dragged to the fifth position, the event will emit
<code>{from: 0, to: 4}</code>. Note that the index starts at zero.</p>
<p>A function should be called when the event is emitted that handles the reordering of the items.
See <a href="#usage">usage</a> below for some examples.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-list-header&gt;Header&lt;/ion-list-header&gt;
  &lt;ion-item-group reorder=&quot;true&quot; (ionItemReorder)=&quot;reorderItems($event)&quot;&gt;
    &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
  &lt;/ion-item-group&gt;
&lt;/ion-list&gt;
</code></pre>
<pre><code class="lang-ts">class MyComponent {
  items = [];

  constructor() {
    for (let x = 0; x &lt; 5; x++) {
      this.items.push(x);
    }
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }
}
</code></pre>
<p>Ionic also provides a helper function called <code>reorderArray</code> to
reorder the array of items. This can be used instead:</p>
<pre><code class="lang-ts">import { reorderArray } from &#39;ionic-angular&#39;;

class MyComponent {
  items = [];

  constructor() {
    for (let x = 0; x &lt; 5; x++) {
      this.items.push(x);
    }
  }

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
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
      <td>ionItemReorder</td>
      <td><p> The expression to evaluate when the item is reordered. Emits an object
with <code>from</code> and <code>to</code> properties.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a>,
<a href='../../list/List'>List API Docs</a>,
<a href='../Item'>Item API Docs</a><!-- end content block -->


<!-- end body block -->

