import { Component, OnInit } from '@angular/core';
import { KarolinewalletService } from '../karolinewallet.service';

@Component({
  selector: 'app-karolinecurrency',
  templateUrl: './karolinecurrency.component.html',
  styleUrls: ['./karolinecurrency.component.css']
})
export class KarolinecurrencyComponent implements OnInit {

  constructor(public wallet: KarolinewalletService) { }

  ngOnInit() {
  }

  atualizarValores(){
    this.wallet.atualizarValores();
  }
}