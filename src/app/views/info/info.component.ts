import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${environment.appTitle} - Πληροφορίες & Εισιτήρια`);
  }
}
