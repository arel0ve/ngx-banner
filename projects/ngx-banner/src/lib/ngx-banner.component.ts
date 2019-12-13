import { Component, OnInit } from '@angular/core';

import { NgxBannerConfig } from './ngx-banner.config.model';

@Component({
  selector: 'lib-ngx-banner',
  templateUrl: './ngx-banner.component.html',
  styleUrls: ['./ngx-banner.component.css']
})
export class NgxBannerComponent implements OnInit {

  constructor(public config: NgxBannerConfig) { }

  ngOnInit() {
  }

}
