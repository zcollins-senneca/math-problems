import { Component, OnInit, Input } from '@angular/core';
import { MathProblemComponent } from '../math-problem/math-problem.component';
import { ProblemType } from '../problem-type.enum';

@Component({
  selector: 'app-math-problem-list',
  templateUrl: './math-problem-list.component.html',
  styleUrls: ['./math-problem-list.component.css'],
})
export class MathProblemListComponent implements OnInit {
  problemType: ProblemType;
  problems: Problem[];
  @Input() numOfProblems: number = 0;
  @Input() problemTypes: string[];
  @Input() numeratorLength: number = 0;
  @Input() denominatorLength: number = 0;

  constructor() {
    this.problems = [];
  }

  ngOnInit() {
    this.problems = Array.from({ length: this.numOfProblems }, () => {
      var breakLoop = false;
      var loopBreaker = 50;
      var loopIdx = 0;
      while (!breakLoop && loopIdx < loopBreaker) {
        var probTypeIdx = Math.floor(Math.random() * 3);
        const probTypeStr = ProblemType[probTypeIdx];
        if (this.problemTypes.indexOf(probTypeStr) > -1) {
          breakLoop = true;
          var randomProbType: ProblemType = (<any>ProblemType)[probTypeStr];
          debugger;
        }
        console.log(loopIdx);
        loopIdx++;
      }
      return {
        problemType: randomProbType,
        numeratorLength: this.numeratorLength,
        denominatorLength: this.denominatorLength,
      };
    });
  }
}

export interface Problem {
  problemType: ProblemType;
  numeratorLength: number;
  denominatorLength: number;
}
