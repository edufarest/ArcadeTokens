import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TokensService} from '../tokens.service';
import {LedgerService} from '../ledger.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items;

  constructor(
    private http: HttpClient,
    private tokensService: TokensService,
    private ledgerService: LedgerService
  ) { }

  ngOnInit(): void {
    this.items = this.http.get('/assets/items.json');
  }

  purchaseItem(item): void {
    console.log(item);

    this.tokensService.removeTokens(item.price);
    this.ledgerService.addToLedger({amount: item.price, description: item.name, inbound: false});
  }

}
