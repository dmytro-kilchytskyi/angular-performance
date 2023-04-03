import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-changed-after-check-error',
  templateUrl: './changed-after-check-error.component.html',
  styleUrls: ['./changed-after-check-error.component.css'],
})
/*
  ExpressionChangedAfterItHasBeenCheckedError could be shown only in dev mode when Angular performs extra change detection to verify that bind values weren't changed
*/
export class ChangedAfterCheckErrorComponent implements OnInit {
  private _time: number;
  private isErrorPrevented = false;

  constructor(private zone: NgZone) {
    this._time = Date.now();
  }

  ngOnInit(): void {
    this.updateTimeProcess();
  }

  triggerChangeDetection(): void {
    console.log('Click on button with event binding!');
  }

  updateFlag(): void {
    this.isErrorPrevented = this.isErrorPrevented ? false : true;
  }

  private updateTimeProcess(): void {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      });
    });
  }

  get time(): number {
    console.log('Change detection was triggered!');

    return this.isErrorPrevented ? this._time : Date.now();
  }
}
