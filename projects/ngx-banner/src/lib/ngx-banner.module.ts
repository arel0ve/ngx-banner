import { NgModule } from '@angular/core';

import { NgxBannerComponent } from './ngx-banner.component';
import { NgxBannerService } from './ngx-banner.service';

@NgModule({
  declarations: [NgxBannerComponent],
  entryComponents: [NgxBannerComponent],
  imports: [],
  providers: [NgxBannerService],
  exports: [NgxBannerComponent]
})
export class NgxBannerModule { }
