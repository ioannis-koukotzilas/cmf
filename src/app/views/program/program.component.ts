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
    this.selectedDay = this.days[0]; // Select the first day by default
  }

    selectDay(day: any) {
        this.selectedDay = day;
    }

}
