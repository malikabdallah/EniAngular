import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MalikValidator } from './MalikValidator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  public contactForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.contactForm=this.fb.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),MalikValidator.containMalik
      ]),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl()
    })

   }

  ngOnInit(): void {
  }

  onSubmit() {
    Object.keys(this.contactForm.controls).forEach(key => {
      // Get errors of every form control
      console.log(this.contactForm.get(key)?.errors);
    });
    /*
    console.log('Valid?', this.contactForm.valid); // true or false
    console.log('errors', this.contactForm);
    console.log('firsname', this.contactForm.value);
*/
  }
   

}
