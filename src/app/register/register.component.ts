import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { find } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  users: any;

  registerform = this.builder.group({
    id: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.builder.control('', Validators.required),
    password: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false),
  });

  proceedregister() {
    if (this.registerform.valid) {
      if ( this.registerform.value) {
        console.log('executed well');
        this.service
          .RegisterUser(this.registerform.value)
          .subscribe((result) => {
            this.toastr.success(
              'Please contact admin for enable access.',
              'Registered successfully'
            );
            this.router.navigate(['login']);
            console.log(this.registerform.value);
            console.log(this.service.Getall());
            // console.log(this.service.UsernameIsExists())
          });
      } else {
        this.toastr.warning('Data Alredy Exists');
      }
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }

  // UsernameisExists(){
  //   try {
  //     this.users = find()
  //     if (!this.registerform) {

  //     } else {
  //       this.toastr.warning("Email Already Exists")
  //     }

  //   } catch (error) {
  //     this.toastr.warning("Unknown Error")
  //   }
  // }
}
