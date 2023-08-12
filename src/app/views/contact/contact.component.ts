import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLoading = true;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${environment.appTitle} - Επικοινωνία`);

    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
