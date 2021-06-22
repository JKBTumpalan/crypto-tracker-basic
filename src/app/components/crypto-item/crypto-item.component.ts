import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crypto } from '../../Crypto';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.css'],
})
export class CryptoItemComponent implements OnInit {
  @Input() crypto!: Crypto;
  @Output() onDeleteCrypto: EventEmitter<Crypto> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(crypto: Crypto) {
    console.log('Deleting crypto asset..');
    console.log(crypto);
    this.onDeleteCrypto.emit(crypto);
  }
}
