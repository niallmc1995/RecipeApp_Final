
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})

export class ContactComponent implements OnInit {

  //rForm: FormGroup;
  //post: any;    //a property for submitted form


  constructor() { }

  ngOnInit() {

    //this.rForm = new FormGroup({
      
      // firstName: new FormControl('', {
      //   validators: Validators.required,
      // updateOn: 'blur'
      // }),
      //       lastName: new FormControl('', {
      //         validators: Validators.required,
      //         updateOn: 'blur'
      //       }),
      
      //       email: new FormControl('', {
      //         validators: [ Validators.email,Validators.required],
      //         updateOn: 'blur'
      //       }),
      
            
      
      //       message: new FormControl('', {
      //         validators: Validators.required,
      //         updateOn: 'change'
      //       })
      
      
      //    })
          
          
  }

 // onSubmit() {
   // if (this.rForm.valid) {
  //    console.log("Form Submitted!");
    //  this.rForm.reset();
    //}
 // }

 // addPost(post) {
 //   this.rForm.controls.firstName =post.firstName;
 //   this.rForm.controls.lastName = post.lastName;
 //   this.rForm.controls.email = post.email;
 //   this.rForm.controls.message = post.message;
 // }

}


