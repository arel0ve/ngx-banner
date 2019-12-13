import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBannerComponent } from './ngx-banner.component';

describe('NgxBannerComponent', () => {
  let component: NgxBannerComponent;
  let fixture: ComponentFixture<NgxBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
