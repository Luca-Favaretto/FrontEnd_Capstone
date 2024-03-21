import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = [
    'Name',
    'Surname',
    'Rating',
    'Role',
    'Contract',
    'Result',
  ];
  constructor() {}

  ngOnInit(): void {}
}
