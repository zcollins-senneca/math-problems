import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ProblemType } from './problem-type.enum';

export function answerValidator(
  numerator,
  denominator,
  problemType
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = +control.value;
    if (!value && value !== 0) {
      return null;
    }
    var correct = false;
    switch (problemType) {
      case ProblemType.Addition: {
        correct = numerator + denominator == value;
        break;
      }
      case ProblemType.Subtraction: {
        correct = numerator - denominator == value;
        break;
      }
      case ProblemType.Multiplication: {
        correct = numerator * denominator == value;
        break;
      }
      case ProblemType.Division: {
        correct = numerator / denominator == value;
        break;
      }
    }
    return !correct ? { correct: false } : null;
  };
}
