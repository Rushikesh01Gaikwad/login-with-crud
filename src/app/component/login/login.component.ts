import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  loginData:FormGroup=this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })
  
  getData() {
    if (this.loginData.valid) {
      const { email, password } = this.loginData.value;
      this.authService.login(email, password).subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['/home']);
        } else {
          console.log("Error getting data")
        }
      });
    }
  }
}
