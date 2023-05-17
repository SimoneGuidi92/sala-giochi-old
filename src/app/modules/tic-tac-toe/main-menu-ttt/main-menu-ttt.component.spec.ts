import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuTttComponent } from './main-menu-ttt.component';

describe('MainMenuTttComponent', () => {
  let component: MainMenuTttComponent;
  let fixture: ComponentFixture<MainMenuTttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuTttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuTttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
