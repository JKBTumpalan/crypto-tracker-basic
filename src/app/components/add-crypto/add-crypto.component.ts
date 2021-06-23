import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Crypto } from '../../Crypto';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-crypto',
  templateUrl: './add-crypto.component.html',
  styleUrls: ['./add-crypto.component.css'],
})
export class AddCryptoComponent implements OnInit {
  text: string = '';
  symbol: string = '';
  reminder: boolean = false;
  showAddCrypto: boolean = false;
  subscription!: Subscription;
  @Output() onAddCrypto: EventEmitter<Crypto> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddCrypto = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a cryptocurreny name.');
      return;
    }

    const newCoin = {
      text: this.text,
      symbol: this.symbol,
      reminder: this.reminder,
    };

    this.onAddCrypto.emit(newCoin);

    this.text = this.symbol = '';
    this.reminder = false;
  }
}
