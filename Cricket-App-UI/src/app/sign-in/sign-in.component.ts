import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  status = false;
  credentials = {
    email:'',
    password: '',
  };
  hide = true;
  constructor(private loginService: LoginService,
    private headerService: HeaderService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.credentials.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.credentials.password, [Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')
      ])
    });
  }

  onSubmit() {
    //console.log('form is submitted');
    if (
      this.credentials.email != '' &&
      this.credentials.password != '' &&
      this.credentials.email != null &&
      this.credentials.password != null
    ) {
      //console.log('email and password are not empty');
      //generate token
      this.loginService.generateToken(this.credentials).subscribe((response: any)=>{
        //console.log(response);
        this.loginService.loginUser(response);
        //window.location.href = '/home';
        this.router.navigate((['/home']), { relativeTo: this.route });
      });

      

    }else{
      console.log('username and password are empty');
   
       }
  }
}
