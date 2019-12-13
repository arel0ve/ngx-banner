# NgxBanner

Simple service to display information banner on the top of the screen

## Using

Import NgxBannerModule to your main module, for example, to *app.module.ts*:
```
   ...
   import { NgxBannerModule } from 'ngx-banner';
   ...
   
   @NgModule({
     ...
     imports: [
       ...
       NgxBannerModule,
       ...
     ],
     ...
   })
 ```
Declare NgxBannerService in target component:
```
  ...
  import { NgxBannerService } from 'ngx-banner';
  ...
  
  @Component({
    selector: '<component selector>',
  })
  export class <ComponentName> {
  
    ...
  
    constructor(
      ...
      private readonly ngxBannerService: NgxBannerService,
      ...
      ) {
        ...
      }
  }
```
Using inside target component (everywhere, ngxBannerService should be declared in target component constructor before):
```
  ...
  this.ngxBannerService.showBanner({type: 'info', title: 'Banner works', debounceTime: 3000});
  ...
```

## showBanner method configuration

For now showBanner method has simple configuration:
1. `type: 'info' | 'warning' | 'danger'`: banner style: `*info means blue*, *warning means yellow*, *danger means red*.' 
2. `tilte: string`: text that will be displays on banner.
3. `debounceTime?: number`: time in *ms*, after which banner will be hidden. This parameter is optional, default value is `3000`.
