import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokensService {

  private _tokens = 0;
  private tokens = new BehaviorSubject(this._tokens);

  constructor() { }

  getTokens(): Observable<number> {
    return this.tokens;
  }

  addTokens(tokens): void {
    this._tokens += tokens;
    this.tokens.next(this._tokens);
  }

  removeTokens(tokens): void {

    if (tokens > this._tokens) {
      window.alert('Insufficient Tokens');
      throw new Error('Insufficient Tokens');
    } else {

      this._tokens -= tokens;
      this.tokens.next(this._tokens);

    }
  }
}
