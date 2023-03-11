import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../common/services/app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private readonly USER_NAME: string = 'demo';
  private readonly PASSWORD: string = 'Dummy@123';

  userName: string = this.USER_NAME;
  password: string = this.PASSWORD;
  
  showError = false;
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (!this.password || !this.userName) {
      return;
    }
    this.userName = (this.userName || '').trim().toLowerCase();
    this.showError = false;
    if (this.password === this.PASSWORD && this.userName === this.USER_NAME) {
      this.appService.setAuthentication(true);
      this.router.navigate(['data-table']);
    } else {
      this.showError = true;
    }
  }
}
