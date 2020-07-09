import { Component, OnInit } from '@angular/core';
import { LedgerService } from '../ledger.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  ledger = [];

  constructor(
    private ledgerService: LedgerService,
  ) { }

  ngOnInit(): void {
    this.ledgerService.getLedger().subscribe(ledger => this.ledger = ledger);
  }

}
