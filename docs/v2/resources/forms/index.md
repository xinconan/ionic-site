---
layout: v2_fluid/docs_base
category: resources
id: forms
title: Ionic 2 and Forms
header_sub_title: Ionic Resources
---

### Ionic 2 and Forms

Forms have gone through quite a bit of a change in Angular 2, but all for the best. Apps can have much more complicated and in depth forms than were allowed in Angular 1, and the new Forms module allows for this. Let's look at three distinct examples of forms and when you would want to use each one.


### Forms with `[(ngModel)]`

Simple forms that binds and passes an object in our class

**Pros**: Simpler API, more familiar to angular 1 devs

**Cons**: Less programatic control, hard to unit test

```typescript
import { Component } from '@angular/core';
@Component({
  template: `
    <form (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Todo</ion-label>
        <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" block>Add Todo</button>
    </form>
  `,
})
export class FormsPage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }
}
```

This is very similar to how forms were made in Angular 1/Ionic 1 and will be the most familiar with other developers.

>Note: If you use ngModel within a form tag, you have to provide a `name` property. If you do not, you must set `standalone` to try in ngModelOptions.

```html
<!-- with name set -->
<ion-item>
  <ion-label>Todo</ion-label>
  <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
</ion-item>

<!-- or with standalone set to true -->
<ion-item>
  <ion-label>Todo</ion-label>
  <ion-input type="text" [(ngModel)]="todo.title" [ngModelOptions]="{standalone: true}"></ion-input>
</ion-item>
```




### Forms with FormBuilder

Forms that are created in our class. The logic for the form is held entirely in the class

**Pros**: Easier to unit test, one place to go to for modifications

**Cons**: Must import FormBuilder

```typescript
import { Component } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
@Component({
  template: `
    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Todo</ion-label>
        <ion-input type="text" formControlName="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea formControlName="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
    </form>
  `
})
export class FormsPage {
  constructor(private formBuilder: FormBuilder) {}
  ionViewLoaded() {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  logForm(){
    console.log(this.todo.value)
  }
}
```

This approach puts most of your form logic in the class for your component. This makes testing much easier, and the form it self becomes much easier to read.


### Forms with Templates

Forms not driven by an object in our class, but by an actual reference to the form itself

**Pros**: More vanilla HTML forms, all of the logic is in the template

**Cons**: Harder to test, template can be cluttered.

```typescript
import { Component } from '@angular/core';
@Component({
  template: `
    <form #form="ngForm" (ngSubmit)="logForm(form)" novalidate>
      <ion-item>
        <ion-label>Todo</ion-label>
        <ion-input type="text" required [(ngModel)]="todo.title" ngControl="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea [(ngModel)]="todo.description" ngControl="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" block>Add Todo</button>
    </form>
  `,
})
export class FormsPage {
  todo = {
    title: '',
    description: ''
  };
  logForm(form) {
    console.log(form.value)
  }
}
```

This is very similar to how you can use forms with just ngModel, but instead of using the actual model of the form, we can use the reference to the form itself. In the first example, all of our values were coming directly from the model `todo`. With template driven forms, the values are pull directly from the form itelf.


### Parting words

While all methods of creating forms work with Ionic 2 and it's components, we strongly recomned using the FormBuilder API as it allows for a much similar method, and is easily testable with unit tests.
