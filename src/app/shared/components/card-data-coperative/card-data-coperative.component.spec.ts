import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDataCoperativeComponent } from './card-data-coperative.component';

describe('CardDataCoperativeComponent', () => {
  let component: CardDataCoperativeComponent;
  let fixture: ComponentFixture<CardDataCoperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDataCoperativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDataCoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
