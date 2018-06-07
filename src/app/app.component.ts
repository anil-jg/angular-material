import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activetab:number = 1
	constructor(public dialog: MatDialog){

	}
  isActive(num){
    return num==this.activetab?"is-active":"";
  }
  isTabContentActive(num){
    return num==this.activetab?"tab-content is-active clearfix":"tab-content";
  }
  changeTab(num){
   this.activetab = num; 
  }
  openDialog():void {
  	let dialogRef = this.dialog.open(AppDialog, {
      width: '600px'});
  }
  openAddressDialog():void {
    let dialogRef = this.dialog.open(AppAddressDialog, {
      width: '600px'});
  }
}








@Component({
  selector: 'AppDialog',
  templateUrl: 'app-dialog.html',
})
export class AppDialog {

  constructor(
    public dialogRef: MatDialogRef<AppDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'AppAddressDialog',
  templateUrl: 'app-address-dialog.html',
})
export class AppAddressDialog {

  constructor(
    public dialogRef: MatDialogRef<AppDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
