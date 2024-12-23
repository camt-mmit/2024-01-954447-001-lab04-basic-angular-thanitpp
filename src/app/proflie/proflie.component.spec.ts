import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProflieComponent } from './proflie.component';

describe('ProflieComponent', () => {
  let component: ProflieComponent;
  let fixture: ComponentFixture<ProflieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProflieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProflieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
