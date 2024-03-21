import { Component, OnInit } from '@angular/core';
import { PresenceService } from 'src/app/service/presence.service';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent implements OnInit {
  percent!: number;

  constructor(private presenceSrv: PresenceService) {}

  ngOnInit(): void {
    this.presenceSrv.getPercent().subscribe((res) => {
      this.percent = res;
    });
  }
}
