import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'
import { ChartsModule } from 'ng2-charts'
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatSort, MatTableDataSource} from '@angular/material';

import { AppComponent } from './app.component';
import { AppDialog,AppAddressDialog } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDialog,
    AppAddressDialog
  ],
  entryComponents: [AppDialog,AppAddressDialog],
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
    MatNativeDateModule,
    MatGridListModule,
    ChartsModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
