import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlCssQuestionsComponent } from './html-css-questions/html-css-questions.component';
import { HighlightDirective } from './highlight.directive';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCssQuestionsComponent,
    HighlightDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
