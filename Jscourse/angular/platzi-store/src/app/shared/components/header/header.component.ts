import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  image:string='assets/images/stickers1.png'
  constructor() { }

  ngOnInit(): void {
  }

}
