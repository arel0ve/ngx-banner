import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  InjectFlags,
  InjectionToken,
  Injector,
  Type
} from '@angular/core';

import { NgxBannerComponent } from './ngx-banner.component';
import { NgxBannerConfig } from './ngx-banner.config.model';

class NgxBannerInjector implements Injector {
  constructor(
    private parentInjector: Injector,
    private additionalTokens: WeakMap<any, any>
  ) {}

  get<T>(
    token: Type<T> | InjectionToken<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T;
  get(token: any, notFoundValue?: any);
  get(token: any, notFoundValue?: any, flags?: any) {
    const value = this.additionalTokens.get(token);

    if (value) { return value; }

    return this.parentInjector.get<any>(token, notFoundValue);
  }
}

@Injectable({
  providedIn: 'root'
})
export class NgxBannerService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) { }

  public showBanner(config: NgxBannerConfig) {
    const map = new WeakMap();
    map.set(NgxBannerConfig, config);

    const componentRef = this.componentFactoryResolver.resolveComponentFactory(NgxBannerComponent)
      .create(new NgxBannerInjector(this.injector, map));

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    setTimeout(() => document.body.appendChild(domElem), 30);

    setTimeout(() => domElem.classList.add('show'), 60);

    setTimeout(() => {
      domElem.classList.remove('show');
      setTimeout(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      }, 1000);
    }, config.debounceTime || 3000);
  }
}
