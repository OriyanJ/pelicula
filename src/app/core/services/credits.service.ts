import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {
  constructor() {}

  /**
   * Get a movie or TV credit details by id.
   * @param id Movie/TV ID
   */
  getCredits(id: string): Observable<any> {
    return null;
  }
}
