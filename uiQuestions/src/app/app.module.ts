import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlCssQuestionsComponent } from './html-css-questions/html-css-questions.component';
import { HighlightDirective } from './highlight.directive';
import { CustomPipe } from './custom.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCssQuestionsComponent,
    HighlightDirective,
    CustomPipe,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
