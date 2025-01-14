import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HtmlCssQuestionsComponent } from "./html-css-questions/html-css-questions.component";
import { User } from '../app/modele/user.model';
import { filterNumbers, greet, sum } from  '../app/modele/coomon';
import {Userservice} from '../app/modele/user.service'

import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})

export class AppComponent   implements OnInit{
  // handlmsgclickeed(message:string) {
  //   console.log('Message from child:', message);
  // }
  isLoading = true;
  // 
    constructor(private router: Router) {}

  // ngOnInit() {
  //   this.router.events.subscribe((event: Event) => {
  //     if (event instanceof NavigationStart) {
  //       this.isLoading = true; // Show loading spinner
  //     }

  //     if (
  //       event instanceof NavigationEnd || 
  //       event instanceof NavigationCancel || 
  //       event instanceof NavigationError
  //     ) {
  //       this.isLoading = false; // Hide loading spinner
  //     }
  //   });
  // }
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
  }
  }
  // handleMessage(message: string) {
  //   console.log('Message from child:', message);
  // }
