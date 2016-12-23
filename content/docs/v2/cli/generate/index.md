---
layout: v2_fluid/docs_cli_base
category: cli
id: cli-generate
command_name: generate
title: Generate
header_sub_title: Ionic CLI
---

## Description

Ionic now provides a generator function to create pages and services for your app. This makes going from a basic app to a full featured app with navigation much easier.

To create a page you can use the following command:

```bash
# ionic g page <PageName>
ionic g page myPage

√ Create app/pages/my-page/my-page.html
√ Create app/pages/my-page/my-page.ts
√ Create app/pages/my-page/my-page.scss
```

This will give you a html file, sass file, and a js file with your component definition.


To create a service, you can replace `page` with `provider`:

```bash
ionic g provider MyData

√ Create app/providers/my-data/my-data.ts
```

This will create a standard class with a simple `http` get request using Angular's `http` class.

### A quick note on naming conventions

Ionic 2 uses kebab-casing for file names (`my-about-page.html`) and css classes (`.my-about-page`), and uses PascalCasing for JavaScript classes in ES6/TypeScript (`MyAboutPage`). Using this convention, developers can pick up any Ionic 2 project and quickly become productive, similar to Rails.
