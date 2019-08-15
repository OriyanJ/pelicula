import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifyService, AuthenticationService } from '@services';
import { tap, switchMap } from 'rxjs/operators';
import { RequestToken } from '@models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private notifyService: NotifyService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit() {
    const isFormValid = this.loginForm.valid;
    if (!isFormValid) {
      this.notifyService.error('Form is invalid');
      return;
    }
    this.notifyService.clear();
    this.attemptLogin();
  }

  attemptLogin() {
    console.log(this.loginForm);

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService
      .createRequestToken()
      .pipe(
        switchMap((requestToken: RequestToken) => {
          return this.authService.createSessionWithLogin(
            requestToken.token,
            username,
            password
          );
        })
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
