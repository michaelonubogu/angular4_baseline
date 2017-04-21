import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvsNavComponent } from './ovs-nav.component';

describe('OvsNavComponent', () => {
  let component: OvsNavComponent;
  let fixture: ComponentFixture<OvsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
