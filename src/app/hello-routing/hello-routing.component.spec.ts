import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRoutingComponent } from './hello-routing.component';

describe('HelloRoutingComponent', () => {
  let component: HelloRoutingComponent;
  let fixture: ComponentFixture<HelloRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
