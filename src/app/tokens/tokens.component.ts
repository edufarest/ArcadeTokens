import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';
import { LedgerService } from '../ledger.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  tokens;
  checkoutForm;

  constructor(
    private tokensService: TokensService,
    private ledgerService: LedgerService,
    private formBuilder: FormBuilder
  ) {

    this.checkoutForm = this.formBuilder.group({
      amount: 0,
      description: ""
    });

  }

  ngOnInit(): void {

    this.tokensService.getTokens().subscribe(tokens => this.tokens = tokens);

  }

  onSubmit(data) {

    const amount = data.amount;
    const desc   = data.description;

    if (amount < 1) {
      throw "Amount must be positive"
    } else {

      this.checkoutForm.reset();
      this.tokensService.addTokens(amount);
      this.ledgerService.addToLedger({amount: amount, description: desc, inbound: true});
      console.warn("Added tokens: ", amount);

    }
  }

}
