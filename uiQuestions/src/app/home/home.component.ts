import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  myForm: FormGroup;
  submittedData: Array<{ name: string; email: string; skills: string[] }> = [];

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      skills: this.fb.array([]), // Initialize a FormArray
    });
  }

  // Getter for FormArray
  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  // Add a new skill
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  // Submit the form
  onSubmit() {
    console.log('Form Data:', this.myForm.value);
    if (this.myForm.valid){
      this.submittedData.push(this.myForm.value);
      console.log('Form Submitted:', this.myForm.value);
    }
  }

}
