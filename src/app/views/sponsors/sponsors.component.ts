import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  isLoading = true;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${environment.appTitle} - Επικοινωνία`);

    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
