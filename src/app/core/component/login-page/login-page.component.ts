import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../common/services/app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userName: string = 'demo';
  password: string = 'Dummy@123';
  showError = false;
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (!this.password || !this.userName) {
      return;
    }
    this.showError = false;
    if (this.password === 'Dummy@123' && this.userName === 'demo') {
      this.appService.setAuthentication(true);
      this.router.navigate(['data-table']);
    } else {
      this.showError = true;
    }
  }
}
