import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interface/result';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {
  results: Result[] = [];

  constructor(private resultSrv: ResultService) {}

  ngOnInit(): void {
    this.resultSrv.getMyResults().subscribe((res) => {
      this.results = res.content;
    });
  }
}
