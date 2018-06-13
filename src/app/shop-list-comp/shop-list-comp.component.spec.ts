import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListCompComponent } from './shop-list-comp.component';

describe('ShopListCompComponent', () => {
  let component: ShopListCompComponent;
  let fixture: ComponentFixture<ShopListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
