---
layout: v2_fluid/docs_base
category: resources
id: what-is
title: Developer Glossary
header_sub_title: Ionic Resources
---

# Ionic Developer Glossary

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/resources/what-is/index.md'>
  Improve this doc
</a>

<div id="what-is">

 <section id="android-sdk">
    <h3><a href="#android-sdk">Android SDK</a></h3>
    <p>The <a href="http://developer.android.com/sdk/index.html">Android SDK</a> is a software development kit that for developers building for Google's Android Platform. It includes tools for building, testing, and debugging Android apps.</p>
  </section>

  <section id="annotations">
    <h3><a href="#annotations">Annotations</a></h3>
    <p>Annotations are used to add metadata to a class. <a href="#typescript">TypeScript</a> extends <a href="#es2015-es6">ES6</a> by adding annotations. While you can define your own annotations, the Ionic community often refers to two annotations provided by Angular 2: <code>@Component</code> and <code>@View</code>.
    </p>
  </section>

  <section id="autoprefixer">
    <h3><a href="#autoprefixer">Autoprefixer</a></h3>
    <p><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> is a tool that adds vendor-specific-prefixes to hand-written Sass/CSS code. This ensures that standardized CSS rules you write will be applied across all supporting browsers. For example, instead of having to know every flexbox syntax used by various browsers, autoprefixer allows you to just write <code>display: flex;</code> and it'll automatically plug in the correct CSS.</p>
  </section>

  <section id="babel">
    <h3><a href="#babel">Babel</a></h3>
    <p><a href="http://babeljs.io">Babel</a> is a next-generation JavaScript compiler. Currently, today's browsers do not support every feature of the next-generation of JavaScript (<a href="#es2015-es6">ES6</a>). Babel solves this problem by compiling your ES6 code in to <a href="#es5">ES5</a>, which is the well-known version of JavaScript supported in all browsers.</p>
  </section>

  <section id="browserify">
    <h3><a href="#browserify">Browserify</a></h3>
    <p><a href="http://browserify.org/">Browserify</a> is a code bundler, similar to <a href="#webpack">webpack</a>, that analyzes all the code in an project, and bundle it into single file.</p>
  </section>

  <section id="bundling">
    <h3><a href="#bundling">Bundling</a></h3>
    <p>Bundling is the process of taking an app dependencies (code you've written plus any npm modules installed) and compiling/transpiling them down to one single file.</p>
  </section>

  <section id="cli">
    <h3><a href="#cli">CLI</a></h3>
    <p>A CLI, or command-line interface, is text-based interface for interacting with a program. The common command-line app for a Mac user is the Terminal app, and Windows users often use Command Prompt. The Ionic community often uses this term to refer to <a href="http://ionicframework.com/docs/cli/">Ionic's CLI</a>. Ionic's CLI can be used for a number of things, such as creating production builds of an app, running the development server, and accessing <a href="http://ionic.io/">Ionic services</a>.</p>
  </section>

  <section id="commonjs">
    <h3><a href="#commonjs">CommonJS</a></h3>
    <p>CommonJS is a group that defines standard formats for JavaScript API's. They have defined standards for JavaScript modules and packages.</p>
    <p><a href="https://webpack.github.io/docs/commonjs.html">CommonJS</a></p>
  </section>

  <section id="cordova">
    <h3><a href="#cordova">Cordova</a></h3>
    <p><a href="https://cordova.apache.org">Cordova</a> is a way to transform standard HTML/CSS/JS into a full-fledged native app. It provides a JavaScript API for accessing native device functionality, such as the camera or accelerometer. Cordova contains the necessary build tools for packaging webapps for iOS, Android, and Windows Phone.</p>
  </section>

  <section id="decorators">
    <h3><a href="#decorators">Decorators</a></h3>
    <p>Decorators are expressions that return a function. They basically allow you to take an existing function, and extend its behavior. With TypeScript, you can also decorate <i>classes</i> and <i>parameters</i>. When you decorate a <strong>class</strong>, you are wrapping and extending the behavior of its constructor. In other words, the decorator will add some functionality when the constructor is called, and will then return the original constructor. When you decorate a <strong>parameter</strong>, you are wrapping the argument that gets passed in for that parameter. In other words, the decorator will add functionality when an argument is passed to the method, and then return the original argument.
    </p>
  </section>

  <section id="es5">
    <h3><a href="#es5">ES5</a></h3>
    <p>ES5 refers to EcmaScript 5th Edition. A simple way to put it is that ES5 is the version of JavaScript which developers are most familiar with today.</p>
  </section>

  <section id="es2015-es6">
    <h3><a href="#es2015-es6">ES2015/ES6</a></h3>
    <p>ES2015/ES6 are two commonly used names for the most recent version of JavaScript. A wide range of new features have been introduced in this version, including classes, modules, iterators, and promises. The final draft of ES6 has been approved, which means eventually ES6 code will be interpreted directly by a browser. To use ES6 features today, tools such as <a href="#babel">Babel</a> and <a href="#typescript">TypeScript</a> have to <a href="#transpiler">transpile</a> ES6 code down to ES5.</p>
  </section>

  <section id="es2016-es7">
    <h3><a href="#es2016-es7">ES2016/ES7</a></h3>
    <p>ES2016/ES7 are two commonly used names for the experimental version of JavaScript. This future version of JavaScript will add a number of new features to the language, including async functions and typed objects. It is constantly being revised, and it is not currently suitable for production apps.</p>
  </section>

  <section id="genymotion">
    <h3><a href="#genymotion">Genymotion</a></h3>
    <p>Genymotion is a third-party Android emulator. It is extremely fast, and is useful for quickly testing your app on Android. Check out our <a href="/docs/v2/resources/developer-tips/#using-genymotion-android">resource section</a> on Genymotion for more info.</p>
  </section>

  <section id="git">
    <h3><a href="#git">Git</a></h3>
    <p><a href="https://git-scm.com/">Git</a> is a version control system for managing code. It allows development teams to contribute code to the same project without causing code conflicts.</p>
  </section>

  <section id="gulp">
    <h3><a href="#gulp">Gulp</a></h3>
    <p><a href="http://gulpjs.com/">Gulp</a> is a tool for running tasks which can be used to build your application. Common build tasks include transpiling <a href="#es2015-es6">ES6</a> to <a href="#es5">ES5</a>, turning <a href="#sass">Sass</a> in to CSS, minifying code, and concatenating files.</p>
  </section>

  <section id="imports">
    <h3><a href="#imports">Imports</a></h3>
    <p>ES6 brings the concept of modules to javascript. With modules, things are no longer on the global scope and have to imported into be used. This makes it much easier to understand where your code is coming from.</p>
    <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">Imports</a></p>
  </section>

  <section id="ionicons">
    <h3><a href="#ionicons">Ionicons</a></h3>
    <p><a href="http://ionicons.com/">Ionicons</a> is an open-source icon set used and created by Ionic. It includes iOS, Material Design, and social icons, as well as a wide range of commonly used icons. Ionicons is included by default in Ionic distributions, but they can be used in any project.</p>
  </section>

  <section id="karma">
    <h3><a href="#karma">Karma</a></h3>
    <p><a href="https://karma-runner.github.io/0.13/index.html">Karma</a> is a test runner that will run your app's test inside a real browser. It's takes your test, written in any testing framework, and just runs them in browser. Orginially written for Angular 1.</p>
  </section>

  <section id="module">
    <h3><a href="#module">Module</a></h3>
    <p>Modules in JavaScript are small, independent, and reusable pieces or code that are isolated from one another and the Global scope</p>
  </section>

  <section id="livereload">
    <h3><a href="#livereload">Live Reload</a></h3>
    <p>Live Reload is a tool that automatically reloads your browser when it detects changes. It watches a specific path and anytime a file or directory is updated, it will trigger a full browser reload. In cases where css is changed, livereload will inject the changed css instead of reloading the entire page</p>
  </section>

  <section id="node">
    <h3><a href="#node">Node</a></h3>
    <p><a href="https://nodejs.org/">node</a> is a runtime environment that lets you write JavaScript on the server-side. In addition to being used for web services, node is often used to build developer tools, such as the <a href="#cli">Ionic CLI</a>.</p>
  </section>

  <section id="npm">
    <h3><a href="#npm">NPM</a></h3>
    <p><a href="https://www.npmjs.com/">npm</a> is the package manager for <a href="#node">node</a>. It allows you to install, share, and package node modules. Ionic can be installed with npm, along with a number of its dependencies.
    </p>
  </section>

<section id="observable">
    <h3><a href="#observable">Observable</a></h3>
    <p>An observable is an object that emits events (or notifications). An observer is an object that listens for these events, and does something when an event is received. Together, they create a pattern that can be used for programming asynchronously.
    </p>
  </section>

<section id="polyfill">
    <h3><a href="#polyfill">Polyfill</a></h3>
    <p>A polyfill is a bit of code that add functionality to the browser and normalizes browser differences. This is similar to a shim, but where as a shim has it's own API, a polyfill let's you use the expect API of the brower.</p>
    <p><a href="https://remysharp.com/2010/10/08/what-is-a-polyfill">What is a polyfill?</a></p>
  </section>

<section id="protractor">
    <h3><a href="#protractor">Protractor</a></h3>
    <p><a href="https://angular.github.io/protractor/#/">Protractor</a> is testing framework written for and by the Angular team. Protractor can be used with test runners, like Karma, for end-to-end testing. Basically figuring out if your app behaves the way you expect it too.</p>
  </section>

  <section id="sass">
    <h3><a href="#sass">Sass</a></h3>
    <p>Sass is a stylesheet language that compiles to CSS and is used by Ionic. Sass is like CSS, but with extra features such as <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_">variables</a>, <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins">mixins</a>, and <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10">for loops</a>.</p>
  </section>

<section id="shim">
    <h3><a href="#shim">Shim</a></h3>
    <p>A shim is a piece of code that normailizes difference APIs across browsers. A shim would often has it's own API that would handle the cross browser differences.</p>
  </section>


  <section id="systemjs">
    <h3><a href="#systemjs">SystemJS</a></h3>
    <p>SystemJS is a module loader (like RequireJS) that loads all module formats - AMD, CommonJS, and ES6, and is built on top of the <a href="https://github.com/ModuleLoader/es6-module-loader">ES6 Module Loader polyfill</a> (a polyfill implementing the way JavaScript will load modules natively in the future).</p>
  </section>

  <section id="transpiler">
    <h3><a href="#transpiler">Transpiler</a></h3>
    <p>
    Transpile means to convert code from one language, to another language. Typically a transpiler will convert a high-level language to another high-level language. Often times the Ionic community will talk about <em>transpiling</em> <a href="#es2015-es6">ES2015/ES6</a> or <a href="#typescript">TypeScript</a> to <a href="#es5">ES5</a>.
    </p>
  </section>

  <section id="typescript">
    <h3><a href="#typescript">TypeScript</a></h3>
    <p>
    TypeScript is a superset of JavaScript, which means it gives you JavaScript, along with a number of extra features such as <a href="http://www.typescriptlang.org/Handbook#basic-types">type declarations</a> and <a href="http://www.typescriptlang.org/Handbook#interfaces">interfaces</a>. Although Ionic is built with TypeScript, using it to build an Ionic app is completely optional.
    </p>
  </section>

  <section id="unit-tests">
    <h3><a href="#unit-tests">Unit Tests</a></h3>
    <p>Unit Tests and unit testing are a way to test small pieces of code to see if they behave as expected. Unit testing frameworks include Jasmine, Mocah, QUnit, and many more.</p>
  </section>

  <section id="webpack">
    <h3><a href="#webpack">Webpack</a></h3><p>
    <a href="https://webpack.github.io/">Webpack</a> bundles together JavaScript modules and other assets. It can be used to create single or multiple "chunks" that are only loaded when needed. Basically you can use Webpack to take your many files and dependencies and bundle them into one file, or however you see fit.</p>
  </section>

  <section id="xcode">
    <h3><a href="#xcode">XCode</a></h3><p>
    <a href="https://developer.apple.com/xcode/">XCode</a> is an IDE that allows you to develop iOS apps. XCode includes tools that help with building, testing, and debugging your app. Although many Ionic developers do not use it as their primary editor, it is often used to build and sign the production version of an app.</p>
  </section>

</div>

<script>
$(document).ready(function() {
  $(function () {

      var setHash = function(urlHash) {
        window.location.hash = (urlHash);
        currentHash = urlHash;
      };

      var currentHash = "#"
      $(document).scroll(function () {
          $('section').each(function () {
              var top = window.pageYOffset;
              var distance = top - $(this).offset().top;
              var hash = '#' + $(this).attr('id');
              if (distance < 20 && distance > -20 && currentHash != hash) {
                setHash(hash);
              }
          });
      });
  });
});
</script>
