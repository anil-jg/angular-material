import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'


import { AppComponent } from './app.component';
import { AppDialog } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDialog
  ],
  entryComponents: [AppDialog],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
