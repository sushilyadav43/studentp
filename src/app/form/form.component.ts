import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder,FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private router:Router, private fb:FormBuilder) {

    this.registerForm = this.fb.group({
      firstName: new FormControl("", [Validators.required]),
      middle: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern(/^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u)])
    })
   }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm);
    if(this.registerForm.status === "INVALID") {
      alert("invalid form")
    }
    console.log(this.registerForm.value);
  }

  validatename(field:any):boolean {
    const value = this.registerForm.get(field);

    if(value?.invalid && value.dirty && value.touched) {
      return true
    } else {
      return false
    }
  }
}
