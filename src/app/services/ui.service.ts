import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddCrypto: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddCrypto(): void {
    this.showAddCrypto = !this.showAddCrypto;
    this.subject.next(this.showAddCrypto);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
