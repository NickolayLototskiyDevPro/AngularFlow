import { Component, ViewChild } from '@angular/core';
import { TimeCapsuleComponent } from './time-capsule/time-capsule.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TimeCapsuleComponent)
  public capsule: TimeCapsuleComponent;

  public title: string = 'app';

  public timer: number;

  public inTimer(value: number): void {
    this.capsule.setTime(value);
  }
}
