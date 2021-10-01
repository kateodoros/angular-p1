import { Component, OnInit } from '@angular/core';
import { KarolinewalletService } from '../karolinewallet.service';

@Component({
  selector: 'app-karolinewallet',
  templateUrl: './karolinewallet.component.html',
  styleUrls: ['./karolinewallet.component.css']
})
export class KarolinewalletComponent implements OnInit {

  constructor(public wallet: KarolinewalletService) { }

  ngOnInit() {
  }

  depositar(valor: string){
    let calc: number;
    calc = parseFloat(valor) / this.wallet.getBitcoin(); this.wallet.depositarBitcoin(calc);
  }

  sacar(valor: string){
    let calc: number;
    calc = parseFloat(valor) / this.wallet.getBitcoin(); this.wallet.depositarBitcoin(calc);
  }
  
}