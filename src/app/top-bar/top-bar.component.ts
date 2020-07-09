import { Component, OnInit } from '@angular/core';

import { TokensService } from '../tokens.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  tokens;

  constructor(
    private tokensService: TokensService,
  ) { }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(tokens => this.tokens = tokens);
  }

}
