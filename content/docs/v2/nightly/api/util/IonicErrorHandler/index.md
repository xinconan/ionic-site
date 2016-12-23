---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "ionicerrorhandler"
title: "IonicErrorHandler"
header_sub_title: "Ionic API Documentation"
doc: "IonicErrorHandler"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="ionic-error-handler" href="#ionic-error-handler"></a>

IonicErrorHandler





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/util/ionic-error-handler.ts#L0">
Improve this doc
</a>






<p>The <code>IonicErrorHandler</code> intercepts the default <code>Console</code> error handling
and displays runtime errors as an overlay when using Ionic&#39;s Dev Build Server.</p>
<h3 id="ionicerrorhandler-example">IonicErrorHandler Example</h3>
<pre><code class="lang-typescript">import { NgModule, ErrorHandler } from &#39;@angular/core&#39;;
import { IonicErrorHandler } from &#39;ionic-angular&#39;;

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
class AppModule {}
</code></pre>
<h3 id="custom-error-handlers">Custom Error Handlers</h3>
<p>Custom error handlers can be built to replace the default, or extend Ionic&#39;s
error handler.</p>
<pre><code class="lang-typescript">class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    // do something with the error
  }
}

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }]
})
class AppModule {}
</code></pre>
<p>More information about Angular&#39;s <a href="https://angular.io/docs/ts/latest/api/core/index/ErrorHandler-class.html"><code>ErrorHandler</code></a>.</p>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

