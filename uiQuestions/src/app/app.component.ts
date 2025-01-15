import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HtmlCssQuestionsComponent } from "./html-css-questions/html-css-questions.component";
import { User } from '../app/modele/user.model';
import { filterNumbers, greet, sum } from  '../app/modele/coomon';
import {Userservice} from '../app/modele/user.service'

import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { NgForm } from '@angular/forms';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})

export class AppComponent   implements OnInit{

  val ="";
  // handlmsgclickeed(message:string) {
  //   console.log('Message from child:', message);
  // }
  isLoading = true;
  // 
    constructor(private router: Router) {}
 observable =new Observable(Subscriber =>{
  Subscriber.next('hello');
  Subscriber.next('world');
  Subscriber.complete();
});
// Subscribe to the Observable
// observable.Subscribe{
//   next: value => console.log(value),
//   complete: () => console.log('Observable completed'),
// });
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started!');
      } else if (event instanceof NavigationEnd) {
        console.log('Navigation ended!');
      } else if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      }
    });

    this.observable
  }

  onSubmit(form: NgForm) {
    console.log('Form Submitted!', form.value); // Log the form data
    // Perform additional actions, such as sending the data to a server
    this.val =form.value.name;

    form.reset();
  }
  }

  // handleMessage(message: string) {
  //   console.log('Message from child:', message);
  // }
