import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyworkerComponent } from './modifyworker.component';

describe('ModifyworkerComponent', () => {
  let component: ModifyworkerComponent;
  let fixture: ComponentFixture<ModifyworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
