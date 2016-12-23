---
layout: "docs_api"
version: "1.1.0"
versionHref: "/docs"
path: "api/directive/menuToggle/"

title: "menu-toggle"
header_sub_title: "Directive in module ionic"
doc: "menuToggle"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/1.x/js/angular/directive/menuToggle.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/menuToggle.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  menu-toggle



</h1>





Toggle a side menu on the given side.








  
<h2 id="usage">Usage</h2>
  
Below is an example of a link within a nav bar. Tapping this button
would open the given side menu, and tapping it again would close it.

```html
<ion-nav-bar>
  <ion-nav-buttons side="left">
   <!-- Toggle left side menu -->
   <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
  </ion-nav-buttons>
  <ion-nav-buttons side="right">
   <!-- Toggle right side menu -->
   <button menu-toggle="right" class="button button-icon icon ion-navicon"></button>
  </ion-nav-buttons>
</ion-nav-bar>
```

### Button Hidden On Child Views
By default, the menu toggle button will only appear on a root
level side-menu page. Navigating in to child views will hide the menu-
toggle button. They can be made visible on child pages by setting the
enable-menu-with-back-views attribute of the <a href="/docs/api/directive/ionSideMenus/"><code>ionSideMenus</code></a>
directive to true.

```html
<ion-side-menus enable-menu-with-back-views="true">
```
  
  

  





