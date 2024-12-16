import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  datetime = Date();
  useragent = navigator.userAgent;
  userlanguage = navigator.languages;
  usercookie = navigator.cookieEnabled;
  userlogical = navigator.hardwareConcurrency;
  usermaxtorch = navigator.maxTouchPoints;
}
