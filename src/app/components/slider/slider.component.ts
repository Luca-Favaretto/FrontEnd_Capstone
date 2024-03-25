import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  value!: number;
  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    this.userSrv.getMe().subscribe((res) => {
      this.value = res.rating;
    });
  }
  getColor() {
    if (this.value < 25) {
      return 'warn';
    } else if (this.value < 50) {
      return 'accent';
    } else {
      return 'primary';
    }
  }
}
