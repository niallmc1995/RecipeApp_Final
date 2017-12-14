
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
<<<<<<< HEAD
  
=======
  // encapsulation: ViewEncapsulation.None
>>>>>>> 9bf2eeb5f3ef0e65bc292cfb384b05b6fe574321
})

export class ContactComponent implements OnInit {

<<<<<<< HEAD
  //rForm: FormGroup;
  //post: any;    //a property for submitted form

=======
  rForm: FormGroup;
  post: any;    //a property for submitted form
  
>>>>>>> 9bf2eeb5f3ef0e65bc292cfb384b05b6fe574321

  constructor() { }

  ngOnInit() {

    //this.rForm = new FormGroup({
      
    //   firstName: new FormControl('', {
    //     validators: Validators.required,
    //   updateOn: 'blur'
    //   }),
    //         lastName: new FormControl('', {
    //           validators: Validators.required,
    //           updateOn: 'blur'
    //         }),
      
    //         email: new FormControl('', {
    //           validators: [ Validators.email,Validators.required],
    //           updateOn: 'blur'
    //         }),
      
            
      
    //         message: new FormControl('', {
    //           validators: Validators.required,
    //           updateOn: 'change'
    //         })
      
      
      //    })
          
          
  }

 // onSubmit() {
   // if (this.rForm.valid) {
  //    console.log("Form Submitted!");
    //  this.rForm.reset();
    //}
 // }

<<<<<<< HEAD
 // addPost(post) {
 //   this.rForm.controls.firstName =post.firstName;
 //   this.rForm.controls.lastName = post.lastName;
 //   this.rForm.controls.email = post.email;
 //   this.rForm.controls.message = post.message;
 // }
=======
  // addPost(post) {
  //   this.rForm.controls.firstName = post.firstName;
  //   this.rForm.controls.lastName = post.lastName;
  //   this.rForm.controls.email = post.email;
  //   this.rForm.controls.message = post.message;
  // }
>>>>>>> 9bf2eeb5f3ef0e65bc292cfb384b05b6fe574321

}


