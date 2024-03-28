import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar
  ) {}
  openSnack(message: string, isError: boolean = false) {
    let panelClass = isError ? ['error-snack'] : ['normal-snack'];
    this.breakpointObserver
      .observe([`(max-width: 768px)`])
      .subscribe((result) => {
        if (result.matches) {
          this.snackBar.open(message, 'CLOSE', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: panelClass,
          });
        } else {
          this.snackBar.open(message, 'CLOSE', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            panelClass: panelClass,
          });
        }
      });
  }
}
