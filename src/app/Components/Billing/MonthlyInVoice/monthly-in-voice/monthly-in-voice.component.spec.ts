import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyInVoiceComponent } from './monthly-in-voice.component';

describe('MonthlyInVoiceComponent', () => {
  let component: MonthlyInVoiceComponent;
  let fixture: ComponentFixture<MonthlyInVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyInVoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyInVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
