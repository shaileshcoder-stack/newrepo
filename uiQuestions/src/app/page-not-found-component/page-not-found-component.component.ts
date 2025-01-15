import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.scss']
})
export class PageNotFoundComponentComponent implements OnInit {
  formval: string = '';
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    console.log(this.myForm.value);
    this.formval =this.myForm.value.name || '';
    this.myForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
