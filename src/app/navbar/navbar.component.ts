import { Component, OnInit } from '@angular/core';
import { KarolinewalletService } from '../karolinewallet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public bitCoin: KarolinewalletService) { }

  ngOnInit() {
  }

}