import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPortalComponent } from './contract-portal.component';

describe('ContractPortalComponent', () => {
  let component: ContractPortalComponent;
  let fixture: ComponentFixture<ContractPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
