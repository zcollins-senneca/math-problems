import { Component, OnInit, Input } from '@angular/core';
import { ProblemType } from '../problem-type.enum';
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { answerValidator } from '../answer-validator';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.css'],
})
export class MathProblemComponent implements OnInit {
  @Input() numeratorLength: number;
  numerator: number;
  @Input() denominatorLength: number;
  denominator: number;
  answer: number;
  correct: boolean;
  icon: string;
  correctStyle: string;
  @Input() problemType: ProblemType;
  answerFormControl: FormControl;

  ngOnInit() {
    this.correctStyle = '';
    this.numerator = Math.floor(
      Math.random() * +'9'.repeat(this.numeratorLength)
    );
    this.denominator = Math.floor(
      Math.random() * +'9'.repeat(this.denominatorLength)
    );

    switch (this.problemType) {
      case ProblemType.Addition: {
        this.icon = 'add';
        break;
      }
      case ProblemType.Subtraction: {
        this.icon = 'remove';
        break;
      }
      case ProblemType.Multiplication: {
        this.icon = 'close';
        break;
      }
      case ProblemType.Division: {
        this.icon = 'home';
        break;
      }
    }
    this.answerFormControl = new FormControl('', {
      validators: [
        Validators.required,
        answerValidator(this.numerator, this.denominator, this.problemType),
      ],
      updateOn: 'blur',
    });
  }
  onBlur(): void {
    if (this.answerFormControl.valid) {
      this.correctStyle = 'successful-answer';
      this.correct = true;
    } else if (this.answerFormControl.invalid) {
      this.correctStyle = 'incorrect-answer';
      this.correct = false;
    }
  }
}
