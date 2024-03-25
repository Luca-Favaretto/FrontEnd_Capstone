import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider-rating',
  templateUrl: './slider-rating.component.html',
  styleUrls: ['./slider-rating.component.scss'],
})
export class SliderRatingComponent implements OnInit {
  user: User;
  dialog: MatDialog;
  constructor(
    private userSrv: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user;
    this.dialog = data.dialog;
  }

  ngOnInit() {}
  updateRating() {
    this.userSrv.modRatig(this.user.id, this.user.rating).subscribe(() => {
      this.dialog.closeAll();
    });
  }
}
