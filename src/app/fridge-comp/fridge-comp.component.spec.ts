import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeCompComponent } from './fridge-comp.component';

describe('FridgeCompComponent', () => {
  let component: FridgeCompComponent;
  let fixture: ComponentFixture<FridgeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
