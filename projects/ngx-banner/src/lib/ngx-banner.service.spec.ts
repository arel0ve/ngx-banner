import { TestBed } from '@angular/core/testing';

import { NgxBannerService } from './ngx-banner.service';

describe('NgxBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBannerService = TestBed.get(NgxBannerService);
    expect(service).toBeTruthy();
  });
});
