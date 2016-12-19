import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import9 from '@angular/core/src/linker/component_factory';
export declare class Wrapper_TabPage {
    context: import0.TabPage;
    changed: boolean;
    constructor();
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_ApiDemoPage {
    context: import0.ApiDemoPage;
    changed: boolean;
    constructor();
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_ApiDemoApp {
    context: import0.ApiDemoApp;
    changed: boolean;
    constructor();
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare const TabPageNgFactory: import9.ComponentFactory<import0.TabPage>;
export declare function viewFactory_TabPage0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.TabPage>;
export declare const ApiDemoPageNgFactory: import9.ComponentFactory<import0.ApiDemoPage>;
export declare function viewFactory_ApiDemoPage0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ApiDemoPage>;
export declare const ApiDemoAppNgFactory: import9.ComponentFactory<import0.ApiDemoApp>;
export declare function viewFactory_ApiDemoApp0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ApiDemoApp>;
