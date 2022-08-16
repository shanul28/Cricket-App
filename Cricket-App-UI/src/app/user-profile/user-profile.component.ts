import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProfileService } from '../services/edit-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData = localStorage.getItem('userData');
  token = JSON.parse(this.userData || '{}').token;
  username = JSON.parse(this.userData || '{}').userName;
  userEmail = JSON.parse(this.userData || '{}').email;
  form!: FormGroup;
  //userPassword = JSON.parse(this.userData || '{}').password;
  credentials={
    userName: this.username,
    email: this.userEmail,
    password: ''
  }
  constructor(private editProfileService: EditProfileService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl(this.credentials.userName, [
        Validators.required,Validators.minLength(4),
      ]),
      password: new FormControl(this.credentials.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        )
        
      ]),
    });
    
  }
  onSave(){
    //console.log('clicked on save');
    //console.log(this.credentials);
    const uData = {...this.credentials, token: this.token};
    //console.log(uData);;
    if (
      this.credentials.userName != '' &&
      this.credentials.password != '' &&
      this.credentials.userName != null &&
      this.credentials.password != null
    ) {
    this.editProfileService.editUser(this.credentials, uData).subscribe((response: any)=>{
      //localStorage.setItem('userData', JSON.stringify(uData));      
      //console.log(response);
      this.editProfileService.editUser(this.credentials, uData);
      //console.log(this.credentials);
      this.router.navigate((['/home']), { relativeTo: this.route });
    });
  }
  }

}
