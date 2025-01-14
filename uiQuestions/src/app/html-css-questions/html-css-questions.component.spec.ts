import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssQuestionsComponent } from './html-css-questions.component';

describe('HtmlCssQuestionsComponent', () => {
  let component: HtmlCssQuestionsComponent;
  let fixture: ComponentFixture<HtmlCssQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCssQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCssQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
