/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './loading-component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import13 from '../backdrop/backdrop.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
export declare class Wrapper_LoadingCmp {
    _eventHandler: Function;
    context: import0.LoadingCmp;
    _changed: boolean;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any);
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const LoadingCmpNgFactory: import7.ComponentFactory<import0.LoadingCmp>;
export declare class View_LoadingCmp0 extends import1.AppView<import0.LoadingCmp> {
    _el_0: any;
    _Backdrop_0_3: import13.Wrapper_Backdrop;
    _el_1: any;
    _anchor_2: any;
    _vc_2: import14.ViewContainer;
    _TemplateRef_2_5: any;
    _NgIf_2_6: import15.Wrapper_NgIf;
    _anchor_3: any;
    _vc_3: import14.ViewContainer;
    _TemplateRef_3_5: any;
    _NgIf_3_6: import15.Wrapper_NgIf;
    _expr_11: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import1.AppView<any>;
}
