import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTileComponent } from './answer-tile.component';

describe('AnswerTileComponent', () => {
  let component: AnswerTileComponent;
  let fixture: ComponentFixture<AnswerTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
