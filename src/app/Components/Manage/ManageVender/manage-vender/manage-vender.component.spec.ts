import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVenderComponent } from './manage-vender.component';

describe('ManageVenderComponent', () => {
  let component: ManageVenderComponent;
  let fixture: ComponentFixture<ManageVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageVenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
