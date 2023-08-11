import { Component } from '@angular/core';
import { ProgramDataService } from './program-data.service';
import { ProgramDay } from 'src/app/models/entities/ProgramDay';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {

  days: ProgramDay[] = [];
  selectedDay!: ProgramDay;

  constructor(private programDataService: ProgramDataService) { }

  ngOnInit(): void {
    this.days = this.programDataService.getDays();

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // set to start of day for accurate comparison

    const matchingDay = this.days.find(day =>
      day.date && new Date(day.date.toString()).toDateString() === currentDate.toDateString()
    );

    if (matchingDay) {
      this.selectedDay = matchingDay;
    } else {
      this.selectedDay = this.days[0]; // default to the first day
    }
  }


  selectDay(day: any) {
    this.selectedDay = day;
  }

}
