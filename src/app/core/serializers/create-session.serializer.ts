import { Injectable } from '@angular/core';
import { SessionJson } from '@bridge-interfaces';
import { Session } from '@models';

@Injectable({ providedIn: 'root' })
export class CreateSessionSerializer {
  from(json: SessionJson) {
    const session = new Session();
    if (json.session_id) {
      session.sessionId = json.session_id;
    }
    if ('success' in json) {
      session.success = json.success;
    }

    return session;
  }
}
