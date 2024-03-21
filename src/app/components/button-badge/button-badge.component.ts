import { Component, OnInit } from '@angular/core';
import { PresenceService } from 'src/app/service/presence.service';

@Component({
  selector: 'app-button-badge',
  templateUrl: './button-badge.component.html',
  styleUrls: ['./button-badge.component.scss'],
})
export class ButtonBadgeComponent implements OnInit {
  todayStart: boolean = false;
  disable: boolean = false;
  constructor(private presenceSrv: PresenceService) {}

  ngOnInit(): void {
    this.exist();
  }
  start() {
    this.presenceSrv.postStartNow().subscribe(() => this.exist());
  }
  finish() {
    this.presenceSrv.getNow().subscribe((res) => {
      this.presenceSrv.postFinishNow(res.id).subscribe(() => {
        this.existFinish();
      });
    });
  }
  exist() {
    this.presenceSrv.existNow().subscribe((res) => {
      this.todayStart = !res;
      if (res) {
        this.existFinish();
      }
    });
  }

  existFinish() {
    this.presenceSrv.existFinishNow().subscribe((res) => {
      this.disable = res;
    });
  }
}
