import { NgModule } from '@angular/core';

import { NgxBannerComponent } from './ngx-banner.component';
import { NgxBannerService } from './ngx-banner.service';

@NgModule({
  declarations: [NgxBannerComponent],
  providers: [NgxBannerService],
  imports: [
  ],
  exports: [NgxBannerComponent]
})
export class NgxBannerModule { }
