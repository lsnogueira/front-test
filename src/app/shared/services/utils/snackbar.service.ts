import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  open(message: string, action = 'OK', duration = 3000): void {
    const config = {
      duration
    };

    this.snackBar.open(message, action, config);
  }
}
