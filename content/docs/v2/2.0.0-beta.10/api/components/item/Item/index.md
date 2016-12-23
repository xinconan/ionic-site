---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.10"
versionHref: "/docs/v2/2.0.0-beta.10"
path: ""
category: api
id: "item"
title: "Item"
header_sub_title: "Ionic API Documentation"
doc: "Item"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/item/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="item" href="#item"></a>

Item
<h3><code>ion-list-header,ion-item,[ion-item],ion-item-divider</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/item/item.ts#L6">
Improve this doc
</a>






<p>An item can contain text, images, and anything else. Generally it is placed in a list with other
items. It can easily be swiped, deleted, reordered, edited, and more. An item is only required to
be in a <a href="../../list/List">List</a> if manipulating the item via gestures is required. It requires an
<a href="../ItemSliding">ItemSliding</a> wrapper element in order to be swiped.</p>
<h2 id="common-usage">Common Usage</h2>
<p>There are a few elements that are considered items, but not all of them are styled to look the same.
The basic item can be written as an <code>&lt;ion-item&gt;</code> element or it can be added to any element by adding
<code>ion-item</code> as an attribute. List headers and item dividers, although styled differently, are also items
and can be written as <code>&lt;ion-list-header&gt;</code> and <code>&lt;ion-item-divider&gt;</code>, respectively.</p>
<h3 id="as-an-element">As an Element</h3>
<p>A basic item should be written as a <code>&lt;ion-item&gt;</code> element when it is not clickable.</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  Item
&lt;/ion-item&gt;
</code></pre>
<p>A list header should be written as <code>&lt;ion-list-header&gt;</code>.</p>
<pre><code class="lang-html">&lt;ion-list-header&gt;
  List Header
&lt;/ion-list-header&gt;
</code></pre>
<p>An item divider should be written as <code>&lt;ion-item-divider&gt;</code>.</p>
<pre><code class="lang-html">&lt;ion-item-divider&gt;
  Item Divider
&lt;/ion-item-divider&gt;
</code></pre>
<h3 id="as-an-attribute">As an Attribute</h3>
<p>The attribute <code>ion-item</code> should be added to a <code>&lt;button&gt;</code> when the item can be clicked or tapped. It
should be added to an <code>&lt;a&gt;</code> element when the item needs to contain a <code>href</code>. It can be added as an
attribute to any element to take on the item styling.</p>
<pre><code class="lang-html">&lt;button ion-item (click)=&quot;buttonClick()&quot;&gt;
  Button Item
&lt;/button&gt;

&lt;a ion-item href=&quot;https://www.ionicframework.com&quot;&gt;
  Anchor Item
&lt;/a&gt;
</code></pre>
<p>Note: do not add <code>ion-item</code> as an attribute to an <code>&lt;ion-list-header&gt;</code> or <code>&lt;ion-item-divider&gt;</code> element
as they are already items and their styling will be changed to look like a basic item.</p>
<h2 id="detail-arrows">Detail Arrows</h2>
<p>By default, <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> elements with the <code>ion-item</code> attribute will display a right arrow icon
on <code>ios</code> mode. To hide the right arrow icon on either of these elements, add the <code>detail-none</code> attribute
to the item. To show the right arrow icon on an element that doesn&#39;t display is naturally, add the
<code>detail-push</code> attribute to the item.</p>
<pre><code class="lang-html">&lt;ion-item detail-push&gt;
  Item with Detail Arrow
&lt;/ion-item&gt;

&lt;button ion-item (click)=&quot;buttonClick()&quot;&gt;
  Button Item with Detail Arrow
&lt;/button&gt;

&lt;a ion-item detail-none href=&quot;https://www.ionicframework.com&quot;&gt;
  Anchor Item with no Detail Arrow
&lt;/a&gt;
</code></pre>
<p>This feature is not enabled by default for <code>md</code> and <code>wp</code> modes, but it can be enabled by setting the
Sass variables <code>$item-md-detail-push-show</code> and <code>$item-wp-detail-push-show</code>, respectively, to <code>true</code>.
It can also be disabled for ios by setting <code>$item-ios-detail-push-show</code> to <code>false</code>. See the
<a href="http://ionicframework.com/docs/v2/theming/overriding-ionic-variables/">theming documentation</a> for
more information on overriding Sass variables.</p>
<h2 id="item-placement">Item Placement</h2>
<p>Items rely heavily on content projection to position content. The item grabs content based on the
element or attribute and positions it that way. This logic makes it possible to write a complex
item with simple, understandable markup without having to worry about styling and positioning
the elements.</p>
<p>The below chart details the attributes item looks for and where it will place the element with
that attribute inside of the item:</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>item-left</code></td>
<td>Placed to the left of all other elements, outside of the inner item.</td>
</tr>
<tr>
<td><code>item-right</code></td>
<td>Placed to the right of all other elements, inside of the inner item, outside of the input wrapper.</td>
</tr>
<tr>
<td><code>item-content</code></td>
<td>Placed to the right of any <code>ion-label</code>, inside of the input wrapper.</td>
</tr>
</tbody>
</table>
<h3 id="checkboxes-radios-and-toggles">Checkboxes, Radios and Toggles</h3>
<p><a href="../../checkbox/Checkbox">Checkboxes</a> are positioned in the same place as the <code>item-left</code> attribute.
<a href="../../radio/RadioButton">Radios</a> and <a href="../../toggle/Toggle">Toggles</a> are positioned in the same place
as the <code>item-right</code> attribute. All of these components can be positioned differently by adding the
<code>item-left</code> or <code>item-right</code> attribute.</p>
<h3 id="content-and-inputs">Content and Inputs</h3>
<p>A <a href="../../label/Label">Label</a> is placed inside of the item to the left of all content and inputs. The
following components are all placed in the same position as the <code>item-content</code> attribute: <a href="../../select/Select">Select</a>,
<a href="../../input/Input">Input</a>, <a href="../../input/TextArea">TextArea</a>, <a href="../../datetime/DateTime">DateTime</a>, and
<a href="../../range/Range">Range</a>.</p>
<p>Any element directly placed inside of an <code>&lt;ion-item&gt;</code> that does not have one of the previously mentioned
attributes and isn&#39;t one of the above elements will be placed inside of a <a href="../../label/Label">Label</a>.</p>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;ion-list-header&gt;
    Header
  &lt;/ion-list-header&gt;

  &lt;ion-item&gt;
    Item
  &lt;/ion-item&gt;

  &lt;ion-item detail-push&gt;
    Item with Detail Arrow
  &lt;/ion-item&gt;

  &lt;button ion-item (click)=&quot;buttonClick()&quot;&gt;
    Button Item
  &lt;/button&gt;

  &lt;ion-item-divider&gt;
    Item Divider
  &lt;/ion-item-divider&gt;

  &lt;button ion-item detail-none (click)=&quot;buttonClick()&quot;&gt;
    Button Item with no Detail Arrow
  &lt;/button&gt;

  &lt;a ion-item href=&quot;https://www.ionicframework.com&quot;&gt;
    Anchor Item
  &lt;/a&gt;

  &lt;ion-item no-lines&gt;
    Item with no border
  &lt;/ion-item&gt;

  &lt;ion-item text-wrap&gt;
    Multiline text that should wrap when it is too long
    to fit on one line in the item.
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class --><h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;!-- List header with buttons on each side --&gt;
  &lt;ion-list-header&gt;
    &lt;button item-left (click)=&quot;buttonClick()&quot;&gt;Button&lt;/button&gt;
    List Header
    &lt;button outline item-right (click)=&quot;buttonClick()&quot;&gt;Outline&lt;/button&gt;
  &lt;/ion-list-header&gt;

  &lt;!-- Loops through and creates multiple items --&gt;
  &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;
    Item {% raw %}{{item}}{% endraw %}
  &lt;/ion-item&gt;

  &lt;!-- Button item with an icon on the left --&gt;
  &lt;button ion-item&gt;
    &lt;ion-icon name=&quot;star&quot; item-left&gt;&lt;/ion-icon&gt;
    Button Item
  &lt;/button&gt;

  &lt;!-- Item with a label and content --&gt;
  &lt;ion-item&gt;
    &lt;ion-label&gt;
      Item Label
    &lt;/ion-label&gt;
    &lt;div item-content&gt;
      Item Content next to the label
    &lt;/div&gt;
  &lt;/ion-item&gt;

  &lt;!-- Item with left and right buttons --&gt;
  &lt;ion-item&gt;
    &lt;button item-left (click)=&quot;buttonClick()&quot;&gt;Button&lt;/button&gt;
    Item
    &lt;button outline item-right (click)=&quot;buttonClick()&quot;&gt;Outline&lt;/button&gt;
  &lt;/ion-item&gt;

  &lt;!-- Item divider with a right button --&gt;
  &lt;ion-item-divider&gt;
    Item Divider
    &lt;button item-right&gt;Button&lt;/button&gt;
  &lt;/ion-item-divider&gt;

  &lt;!-- Disabled button item with left and right buttons --&gt;
  &lt;button ion-item disabled&gt;
    &lt;button item-left (click)=&quot;buttonClick()&quot;&gt;
      &lt;ion-icon name=&quot;home&quot;&gt;&lt;/ion-icon&gt;
      Left Icon
    &lt;/button&gt;
    Disabled Button Item
    &lt;button outline item-right (click)=&quot;buttonClick()&quot;&gt;
      &lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;
      Left Icon
    &lt;/button&gt;
  &lt;/button&gt;

  &lt;!-- Item with an avatar on the left and button on the right --&gt;
  &lt;ion-item&gt;
    &lt;ion-avatar item-left&gt;
      &lt;img src=&quot;img/my-avatar.png&quot;&gt;
    &lt;/ion-avatar&gt;
    Avatar Item
    &lt;button outline item-right&gt;View&lt;/button&gt;
  &lt;/ion-item&gt;

  &lt;!-- Item with a thumbnail on the right --&gt;
  &lt;ion-item&gt;
    &lt;h2&gt;Item&lt;/h2&gt;
    &lt;p&gt;Item Paragraph&lt;/p&gt;
    &lt;ion-thumbnail item-right&gt;
      &lt;img src=&quot;img/my-thumbnail.png&quot;&gt;
    &lt;/ion-thumbnail&gt;
  &lt;/ion-item&gt;

  &lt;!-- Sliding item --&gt;
  &lt;ion-item-sliding&gt;
    &lt;ion-item&gt;
      Item
    &lt;/ion-item&gt;
    &lt;ion-item-options&gt;
      &lt;button primary (click)=&quot;archive()&quot;&gt;Archive&lt;/button&gt;
    &lt;/ion-item-options&gt;
  &lt;/ion-item-sliding&gt;

&lt;/ion-list&gt;
</code></pre>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a>,
<a href='../../list/List'>List API Docs</a>,
<a href='../ItemSliding'>ItemSliding API Docs</a><!-- end content block -->


<!-- end body block -->

