import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestaCroceModuleComponent } from './testa-croce-module.component';

describe('TestaCroceModuleComponent', () => {
  let component: TestaCroceModuleComponent;
  let fixture: ComponentFixture<TestaCroceModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestaCroceModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestaCroceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
