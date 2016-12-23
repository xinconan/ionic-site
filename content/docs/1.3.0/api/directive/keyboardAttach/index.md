---
layout: "docs_api"
version: "1.3.0"
versionHref: "/docs"
path: "api/directive/keyboardAttach/"

title: "keyboard-attach"
header_sub_title: "Directive in module ionic"
doc: "keyboardAttach"
docType: "directive"
---

<div class="improve-docs">
<a href='http://github.com/driftyco/ionic/tree/1.x/js/angular/directive/keyboardAttach.js#L1'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic/edit/1.x/js/angular/directive/keyboardAttach.js#L1'>
Improve this doc
</a>
</div>




<h1 class="api-title">

keyboard-attach



</h1>





keyboard-attach is an attribute directive which will cause an element to float above
the keyboard when the keyboard shows. Currently only supports the
[ion-footer-bar]({{ page.versionHref }}/api/directive/ionFooterBar/) directive.

### Notes
- This directive requires the
[Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugins-keyboard).
- On Android not in fullscreen mode, i.e. you have
  `<preference name="Fullscreen" value="false" />` or no preference in your `config.xml` file,
  this directive is unnecessary since it is the default behavior.
- On iOS, if there is an input in your footer, you will need to set
  `cordova.plugins.Keyboard.disableScroll(true)`.









<h2 id="usage">Usage</h2>

```html
 <ion-footer-bar align-title="left" keyboard-attach class="bar-assertive">
   <h1 class="title">Title!</h1>
 </ion-footer-bar>
```









