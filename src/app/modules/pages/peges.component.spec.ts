import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegesComponent } from './peges.component';

describe('PegesComponent', () => {
  let component: PegesComponent;
  let fixture: ComponentFixture<PegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
