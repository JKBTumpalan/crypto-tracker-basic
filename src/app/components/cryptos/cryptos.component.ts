import { Component, OnInit } from '@angular/core';
import { Crypto } from '../../Crypto';
import { CryptosService } from 'src/app/services/cryptos.service';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css'],
})
export class CryptosComponent implements OnInit {
  cryptos: Crypto[] = [];

  constructor(private cryptoService: CryptosService) {}

  ngOnInit(): void {
    this.cryptoService
      .getCryptos()
      .subscribe((cryptos) => (this.cryptos = cryptos));
  }

  deleteCrypto(crypto: Crypto) {
    this.cryptoService
      .deleteCryptos(crypto)
      .subscribe(
        () => (this.cryptos = this.cryptos.filter((t) => t.id !== crypto.id))
      );
  }
}
