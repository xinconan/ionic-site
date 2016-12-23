---
layout: v2_fluid/docs_base
id: faq
category: faq
title: Ionic Frequently Asked Questions
footer_includes: |
  <script src="//cdnjs.cloudflare.com/ajax/libs/anchor-js/3.2.0/anchor.min.js"></script>
  <script>
   anchors.options.placement = 'left';
    anchors.add('.v2.docs.page-faq main h2, .v2.docs.page-faq main h3');
  </script>
---

# Trouble Shooting

Can't find a solution on this page? Check out the [Ionic Forums](http://forum.ionicframework.com) or join the [Ionic Worldwide Slack Channel](http://ionicworldwide.herokuapp.com/), where the friendly Ions of the community will help you!

## Adding third party libs

You can add most third party libraries to your V2 project from NPM. For example let's add MomentJs.

```bash
$ npm install moment --save
```

From here, we can import it into what ever class we want to use it in.

```ts
import {Page} from 'ionic-angular';
import * as moment from 'moment';

export class MyClass {
  constructor(){
    moment("20111031", "YYYYMMDD").fromNow();
  }

}
```

For TypeScript, you might get a warning, `cannot find module 'moment'`. This just means that TypeScript doesn't know MomentJs since it's Javascript. But we can add external type definitions from [typings](https://github.com/typings/typings).

```bash
$ npm install -g typings
$ typings search moment
Viewing 5 of 5

NAME            SOURCE HOMEPAGE                             DESCRIPTION VERSIONS UPDATED
moment          dt     https://github.com/timrwood/moment               1        2016-03-16T15:55:26.000Z
moment          npm    https://www.npmjs.com/package/moment             1        2016-02-11T00:39:58.000Z
moment-node     dt     https://github.com/timrwood/moment               1        2016-05-11T04:33:38.000Z
moment-range    dt     https://github.com/gf3/moment-range              1        2016-03-17T12:06:54.000Z
moment-timezone dt     http://momentjs.com/timezone/                    1        2016-03-29T22:03:48.000Z
```
We have multiple sources for typings, but we can choose the one from npm

```bash
$ typings install npm~moment --save
```

Now our editor and TypeScript will be able to provide code-completion and understand moment.


## Blank App

>I have no errors in my app. Why does it show a blank screen?

There are different reasons this can happen. If you are unable to find a solution on the forums, make sure:

- Root `@Component` has a `template` or `templateUrl`.
- Root `@Component` template has an `<ion-nav>` with a `root` property:

  ```html
  <ion-nav [root]="rootPage"></ion-nav>
  ```


## Directive Not Working

> Why is my custom component/directive not working?

There are a few things you can check. Make sure:

- You include it in the `directives` array of the `@Component` you want to use it in (only if your ionic-angular version is below RC0).
- Your selector doesn't have any misspellings.
- You're using the selector correctly as an attribute, element or class.
- Your selector has the [proper syntax](http://learnangular2.com/components/):
  - `[attr]` if it's an attribute selector
  - `element` if it's an element selector
  - `.class` if it's a class selector

Here's an example using an attribute selector:

```ts
@Directive({
  selector: '[my-dir]' // <-- [my-dir] because it's an attribute
})                     // Could be my-dir, [my-dir], .my-dir
class MyDir {
  constructor() {
    console.log("I'm alive!");
  }
}

@Component({
  // We add my-dir as an attribute to match the directive's selector
  template: `<div my-dir>Hello World</div>`,

  // Alternatively, if you were attaching the directive to an element it would be:
  // template: `<my-dir>Hello World</my-dir>`
  // and if you were attaching by class the template would be:
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- Don't forget me! (only if your ionic-angular version is below RC0)
})
class MyPage {}
```

## Click Delays

> Why is there a delay on my click event?

In general, we recommend only adding `(click)` events to elements that are normally clickable. This includes `<button>` and `<a>` elements. This improves accessibility as a screen reader will be able to tell that the element is clickable.

However, you may need to add a `(click)` event to an element that is not normally clickable. When you do this you may experience a `300ms` delay from the time you click the element to the event firing. To remove this delay, you can add the `tappable` attribute to your element.

```
 <div tappable (click)="doClick()">I am clickable!</div>
```

## Common mistakes
### Forgetting Parentheses on a Decorator

Decorators should have parentheses `()` after an annotation. Some examples include: `@Injectable()`, `@Optional()`, `@Input()`, etc.

```ts
@Directive({
  selector: 'my-dir'
})
class MyDirective {
  // Wrong, should be @Optional()
  // @Optional does nothing here, so MyDirective will error if parent is undefined
  constructor(@Optional parent: ParentComponent) {}
}
```



### Cordova plugins not working in the browser

At some point in your development you may, try to call Cordova plugin, but get a warning:

```
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator (app.bundle.js, line 83388)
```

This happens when you try to call a native plugin, but Cordova isn't available. Thankfully, Ionic Native will print out a nice warning, instead of an error.

In other cases where the plugin is not being used through Ionic Native, plugins can print a much more obscure warning.

```
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object (evaluating 'navigator.camera.getPicture')
```

If this happens, test the plugin on a real device or simulator.

### Multiple instances of a provider

If you inject a provider in every component because you want it available to all of them you will end up with multiple instances of the provider. You should inject the provider once in the parent component if you want it to be available to the child components.

```ts
let id = 0;
export class MyService {
  id:number;

  constructor() {
    this.id = id++;
  }
}

@Component({
  selector: 'my-component',
  template: 'Hello World',
  providers: [MyService] // <-- Creates a new instance of MyService :(
})                       // Unnecessary because MyService is in App's providers
class MyComp {
  // id is 1, s is a different MyService instance than MyApp
  constructor(s: MyService) {
    console.log("MyService id is: " + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService only needs to be here
  directives: [MyComp]
})
class MyApp {
  // id is 0
  constructor(s: MyService) {
    console.log("MyService id is: " + s.id);
  }
}
```

Plunker: [http://plnkr.co/edit/QzgR5H0r8FijHeVtv2dd](http://plnkr.co/edit/QzgR5H0r8FijHeVtv2dd)

## Common Pitfalls

### Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.

This exception means that Angular is confused about one or more of the parameters for `YourClass`'s constructor. In order to do [dependency injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html) Angular needs to know the type of the parameter to inject. You let Angular know this by specifying the class of the parameter. Make sure:

- You are importing the parameter's class.
- You have properly annotated the parameter or specified its type.

```ts
import {MyService} from 'my-service'; //Don't forget to import me!

@Component({
  template: `Hello World`
})
export class MyClass {
  // service is of type MyService
  constructor(service: MyService) {

  }
}
```

Sometimes circular references within your code can cause this error. Circular references mean that two objects depend on each other, and so there is no way to declare both of them before each other. To get around this, we can use the [`forwardRef`](https://angular.io/docs/ts/latest/api/core/forwardRef-function.html) function built in to Angular.

```ts
import {forwardRef} from 'angular2/core';

@Component({
  selector: 'my-button',
  template: `<div>
               <icon></icon>
               <input type="button" />
             </div>`,
  directives: [forwardRef(() => MyIcon)] // MyIcon has not been defined yet
})                                       // forwardRef resolves as MyIcon when MyIcon is needed
class MyButton {
  constructor() {}
}

@Directive({
  selector: 'icon'
})
class MyIcon {
  constructor(containerButton: MyButton) {} // MyButton has been defined
}
```



### No provider for ParamType! (MyClass -> ParamType)

This means Angular knows the type of parameter it is supposed to inject, but it doesn't know how to inject it.

If the parameter is a service, make sure you have added the specified class to the list of providers available to your app:


```ts
import {MyService} from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService] // Don't forget me!
})
class MyApp {
```

If the parameter is another component or directive (for example, a parent component), adding it to your list of providers will make the error go away, but this will have the same effect as the [Multiple instances of a provider](#multiple_instances) above. You'll be creating a new instance of the component class, and you won't get a reference to the component instance you want. Instead, make sure that the directive or component you expect to be injected is available to your component (e.g. that it is actually a parent if you are expecting it to be a parent). This is probably easiest understood with an example:

```ts
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)]
})
class MyComp {
  constructor() {
    this.name = "My Component";
  }
}

@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(c: MyComp) { // <-- This is the line of interest

    // Errors when directive is on regular div because there is no MyComp in the
    // component tree so there is no MyComp to inject
    console.log("Host component's name: " + c.name);

  }
}

@Component({
  template: "<my-comp></my-comp>" + // No error in MyDir constructor, MyComp is parent of MyDir
            "<my-comp my-dir></my-comp>" + // No error in MyDir constructor, MyComp is host of MyDir
            "<div my-dir></div>", // Errors in MyDir constructor
  directives: [MyComp, MyDir]
})
class MyApp {}
```

Here's a diagram illustrating what injectors are available:

```
                 +-------+
                 |  App  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- MyComp can be injected
+-------------+          +--------+--------+
       ^                          |
No MyComp to inject        +------+------+
                           | P (MyDir)   | <- MyComp can be injected from parent
                           +-------------+
```

To expand on the previous example, you can use the Angular 2 `@Optional` annotation if you don't always expect a component/directive reference:

```ts
@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // No longer errors if c is undefined
    if (c) {
      console.log("Host component's name: " + c.name);
    }
  }
}
```

### Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property

This happens when you try and bind a property on an element that doesn't have that property. If the element is a component or has one or more directives on it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```

### No provider for ControlContainer! (NgControlName -> ControlContainer)

This error is a more specific version of the `No provider` error above.  It happens when you use a form control like NgControlName without specifying a parent [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html) or NgFormModel.  In most cases, this can be resolved by making sure your form control is within an actual form element.  NgForm uses `form` as a selector so this will instantiate a new NgForm:

```ts
@Component({
  template:
    '<form>' +
      '<input ngControl="login">' +
    '</form>'
})
```
