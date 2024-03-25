import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interface/user';
import { ContractService } from 'src/app/service/contract.service';
@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss'],
})
export class ContractFormComponent implements OnInit {
  user: User;
  dialog: MatDialog;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contractSrv: ContractService
  ) {
    this.user = data.user;
    this.dialog = data.dialog;
  }

  ngOnInit(): void {}

  postContract(form2: NgForm) {
    this.contractSrv.postContract(this.user.id, form2.value).subscribe(() => {
      this.dialog.closeAll();
    });
  }
  putContract(form: NgForm) {
    this.contractSrv
      .putContract(this.user.contract.id, form.value)
      .subscribe(() => {
        this.dialog.closeAll();
      });
  }
}
