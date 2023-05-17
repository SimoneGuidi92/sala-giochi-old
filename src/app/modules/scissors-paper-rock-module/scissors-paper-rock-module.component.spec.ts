import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScissorsPaperRockModuleComponent } from './scissors-paper-rock-module.component';

describe('ScissorsPaperRockModuleComponent', () => {
  let component: ScissorsPaperRockModuleComponent;
  let fixture: ComponentFixture<ScissorsPaperRockModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScissorsPaperRockModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScissorsPaperRockModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
