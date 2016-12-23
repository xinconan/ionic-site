---
layout: v2_fluid/docs_base
category: setup
id: tutorial
subid: tutorial
title: Navigating - Tutorial
header_sub_title: Getting Started with Ionic
next_page_title: Component Docs
next_page_link: /docs/v2/components
prev_page_title: Adding Pages
prev_page_link: /docs/v2/setup/tutorial/adding-pages/
---

<h1 class="title">Navigating to Pages</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/setup/tutorial/navigation/index.md'>
Improve this doc
</a>


Recall from the previous section we had a function inside our `ListPage` class that looked something like this:


```ts
itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
}
```

You might have noticed we are referencing `ItemDetailsPage`. This is a page included in the tutorial starter.  Let's import it in `app/pages/list/list.ts` so we can use it:

```ts
...
import {ItemDetailsPage} from '../item-details/item-details';
```

After saving the file, you will notice the `ionic serve` process will recompile your app with the new changes, and reload the browser. Let's revisit our app in the browser, and when we tap an item, it will navigate to the item details page! Notice that the menu-toggle is replaced with a back button instead. This is a native style that Ionic follows, but can be configured.

### How It Works

Navigation in Ionic 2 works like a simple stack, where we `push` new pages onto the top of the stack, which takes us forwards in the app and shows a back button. To go backwards, we `pop` the top page off. Since we set `this.navCtrl` in the constructor, we can call `this.navCtrl.push()`, and pass it the page we want to navigate to. We can also pass it an object containing data we would like to pass to the page being navigated to. Using `push` to navigate to a new page is simple, but Ionic's [navigation system](../../../components/#navigation) is very flexible. Check out the [navigation docs](../../../components/#navigation) to see more advanced navigation examples.


> When it comes to URLs, Ionic 2 works a bit differently than Ionic 1. Instead of using URLs to navigate, we use them to make sure we can always come back to a page (on app launch, for example).  This means we aren't limited to using `href` to navigate around. However,  we still have the option to use a URL to navigate to a page when necessary.




### Next Steps

*Nice job*! You've made it through the tutorial and are on your way towards *Ionic mastery*! If you're looking for an overview on what else is included with Ionic, check out the [Component docs](../../../components). To learn about using device APIs, head over to the [Native section](../../../native/). If at any point you need help, check out our [developer resources section](../../../resources/), or ask a question on [the forums](http://forum.ionicframework.com/).
