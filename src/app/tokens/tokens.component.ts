import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';
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
    private formBuilder: FormBuilder
  ) {

    this.checkoutForm = this.formBuilder.group({
      amount: 0
    });

  }

  ngOnInit(): void {

    this.tokensService.getTokens().subscribe(tokens => this.tokens = tokens);

  }

  onSubmit(amount) {

    if (amount < 1) {
      throw "Amount must be positive"
    } else {

      this.checkoutForm.reset();
      this.tokensService.addTokens(amount);
      console.warn("Added tokens: ", amount);

    }
  }

}
