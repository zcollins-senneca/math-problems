import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-options',
  templateUrl: './math-options.component.html',
  styleUrls: ['./math-options.component.css'],
})
export class MathOptionsComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  constructor() {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {}
}
