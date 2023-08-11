import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${environment.appTitle} - Main`);
  }

}