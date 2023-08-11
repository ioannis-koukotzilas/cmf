import { Component, OnInit } from '@angular/core';

declare var Marquee3k: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Marquee3k.init();
  }

}
