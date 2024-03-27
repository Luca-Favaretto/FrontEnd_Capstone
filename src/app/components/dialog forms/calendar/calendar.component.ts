import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Presence } from 'src/app/interface/presence';
import { PresenceService } from 'src/app/service/presence.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  selected!: Date;
  presences: Presence[] = [];

  constructor(private presenceSrv: PresenceService) {}

  ngOnInit(): void {
    this.getMyPresence();
  }

  getMyPresence() {
    this.presenceSrv.getMyPresence().subscribe((res) => {
      this.presences = res.content;
      console.log(this.presences);
    });
  }

  newAbstinenceStatus(form: NgForm) {
    const formattedDate = this.selected.toISOString().split('T')[0];
    const data = {
      date: formattedDate,
      abstinenceStatus: form.value.abstinenceStatus,
    };
    this.presenceSrv.postAbstinence(data).subscribe();
  }
}
