import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvsFooterComponent } from './ovs-footer.component';

describe('OvsFooterComponent', () => {
  let component: OvsFooterComponent;
  let fixture: ComponentFixture<OvsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
