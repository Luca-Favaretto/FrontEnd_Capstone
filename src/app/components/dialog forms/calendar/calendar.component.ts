import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatCalendarCellClassFunction,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { Presence } from 'src/app/interface/presence';
import { PresenceService } from 'src/app/service/presence.service';
import { SnackService } from 'src/app/service/snack.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  selected!: Date;
  presences: Presence[] = [];

  constructor(
    private snackSrv: SnackService,
    private presenceSrv: PresenceService
  ) {}

  ngOnInit(): void {
    this.getMyPresence();
  }

  getMyPresence() {
    this.presenceSrv.getMyPresence().subscribe((res) => {
      this.presences = res.content;
    });
  }

  newAbstinenceStatus(form: NgForm) {
    const formattedDate = this.formatDate(this.selected);
    console.log(formattedDate);
    const data = {
      date: formattedDate,
      abstinenceStatus: form.value.abstinenceStatus,
    };
    this.presenceSrv.postAbstinence(data).subscribe(() => {
      this.getMyPresence();
      this.snackSrv.openSnack('Update presence');
    });
  }

  dateClass(): MatCalendarCellClassFunction<any> {
    return (date: Date): MatCalendarCellCssClasses => {
      const formattedDate = this.formatDate(date);
      const presence = this.presences.find(
        (presence) => presence.date === formattedDate
      );

      let cssClasses: MatCalendarCellCssClasses = {};

      if (presence) {
        if (presence.abstinenceStatus === 'PRESENT') {
          cssClasses = { backPresent: true };
        } else if (presence.abstinenceStatus === 'PERMIT') {
          cssClasses = { backPermit: true };
        } else {
          cssClasses = { backHoliday: true };
        }
      }

      return cssClasses;
    };
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
