import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RequestToken } from '@models';
import { AuthenticationService, NotifyService } from '@services';
import { switchMap } from 'rxjs/operators';

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
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    const loginPayload = {
      username: username,
      password: password
    };
    return;

    this.authService
      // Start by creating a token
      .createRequestToken()
      .pipe(
        // Validate the token with the credentials, before generating a session ID
        switchMap((requestToken: RequestToken) =>
          this.authService.createSessionWithLogin(
            requestToken.token,
            username,
            password
          )
        ),
        switchMap((requestToken: RequestToken) =>
          this.authService.createSession(requestToken.token)
        )
      )
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: (error: Error | HttpErrorResponse) => this.handleErrors(error)
      });
  }

  handleErrors(error: Error | HttpErrorResponse) {
    const errorMessage =
      error instanceof HttpErrorResponse
        ? error.error['status_message']
        : 'Failed to log in';
    this.notifyService.error(errorMessage);
  }
}
