import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  private _ledger = [];
  private ledger = new BehaviorSubject(this._ledger);

  constructor() { }

  getLedger(): Observable<any> {
    return this.ledger;
  }

  addToLedger(transaction) {
    this._ledger.push(transaction);
    this.ledger.next(this._ledger);
  }

}
