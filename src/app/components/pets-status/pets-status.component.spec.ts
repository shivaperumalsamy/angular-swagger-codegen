import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsStatusComponent } from './pets-status.component';

describe('PetsStatusComponent', () => {
  let component: PetsStatusComponent;
  let fixture: ComponentFixture<PetsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
