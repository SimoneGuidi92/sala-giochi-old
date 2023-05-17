import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuSnakeNewComponent } from './main-menu-snake-new.component';

describe('MainMenuSnakeNewComponent', () => {
  let component: MainMenuSnakeNewComponent;
  let fixture: ComponentFixture<MainMenuSnakeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuSnakeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuSnakeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
