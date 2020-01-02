import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurantComponent } from './new-restaurant.component';

describe('NewRestaurantComponent', () => {
  let component: NewRestaurantComponent;
  let fixture: ComponentFixture<NewRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
