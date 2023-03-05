import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from './material.module';
import { AppComponent } from './app.component';
import { MathProblemListComponent } from './math-problem-list/math-problem-list.component';
import { MathProblemComponent } from './math-problem/math-problem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridColsDirective } from './grid-cols.directive';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    //RouterModule.forRoot([{ path: '', component: MathProblemListComponent }]),
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  declarations: [
    AppComponent,
    MathProblemListComponent,
    MathProblemComponent,
    GridColsDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
