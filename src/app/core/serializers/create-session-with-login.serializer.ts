import { Injectable } from '@angular/core';
import { RequestTokenJson } from '@bridge-interfaces';
import { RequestToken } from '@models';

@Injectable({ providedIn: 'root' })
export class CreateSessionWithTokenSerializer {
  from(json: RequestTokenJson): RequestToken {
    console.log(json);

    const token = new RequestToken();
    if (json.expires_at) {
      token.expiresAt = json.expires_at;
    }
    if (json.request_token) {
      token.token = json.request_token;
    }
    if (json.success) {
      token.success = json.success;
    }

    return token;
  }
}
