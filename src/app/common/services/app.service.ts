import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private isShowLoader: boolean = false;
  private isAuthenticated: boolean = false;
  constructor() { }

  showLoader() {
    this.isShowLoader = true;
  }
  hideLoader() {
    this.isShowLoader = false;
  }

  setAuthentication(val: boolean): void {
    this.isAuthenticated = val;
  }
  getAuthentication(): boolean {
    return this.isAuthenticated;
  }
}
