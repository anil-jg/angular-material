import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     tableHeaders:Array<string>=['name','phone','email','company'];
  headersArr:Array<string>=[];
  mapObject:any ={};
  objArr:Array<any> =[];
  selectedValue:Array<string> = [];
  constructor(){

  }


public changeListener(files: FileList) {
  // console.log(files);
  if (files && files.length > 0) {
    let file: File = files.item(0);
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      let csv: string = reader.result;
      let headers = csv.split("\n");
       this.headersArr = headers[0].split(",");
      let dataArr = headers.slice(1, -1);
      this.objArr = dataArr.map(data => {
        return data.split(",")
      });
      // this.objArr = arr.map((data) => {
      //   let obj = {};
      //   this.headersArr.map((head, index) => {
      //     obj[head] = data[index]
      //   })
      //   return obj
      // })
      console.log(this.objArr)
    }
  }
}

createObj(){
  let arr = this.objArr.map(data =>{
   let obj = {}; 
    this.selectedValue.map((head, i) => {
          obj[this.headersArr[i]] = data[this.headersArr.indexOf(head)]
        })
        return obj  
})
  console.log(arr)

  }
compareFn(){
  
}
 //  activetab:number = 1
	// constructor(public dialog: MatDialog){

	// }
 //  isActive(num){
 //    return num==this.activetab?"is-active":"";
 //  }
 //  isTabContentActive(num){
 //    return num==this.activetab?"tab-content is-active clearfix":"tab-content";
 //  }
 //  changeTab(num){
 //   this.activetab = num; 
 //  }
 //  openDialog():void {
 //  	let dialogRef = this.dialog.open(AppDialog, {
 //      width: '600px'});
 //  }
 //  openAddressDialog():void {
 //    let dialogRef = this.dialog.open(AppAddressDialog, {
 //      width: '600px'});
 //  }
 //  public barChartOptions:any = {
 //    scaleShowVerticalLines: false,
 //    responsive: true
 //  };
 //  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 //  public barChartType:string = 'bar';
 //  public barChartLegend:boolean = true;
 
 //  public barChartData:any[] = [
 //    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
 //    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
 //  ];
 
 //  // events
 //  public chartClicked(e:any):void {
 //    console.log(e);
 //  }
 
 //  public chartHovered(e:any):void {
 //    console.log(e);
 //  }
 
 //  public randomize():void {
 //    // Only Change 3 values
 //    let data = [
 //      Math.round(Math.random() * 100),
 //      59,
 //      80,
 //      (Math.random() * 100),
 //      56,
 //      (Math.random() * 100),
 //      40];
 //    let clone = JSON.parse(JSON.stringify(this.barChartData));
 //    clone[0].data = data;
 //    this.barChartData = clone;
 //  }
 //  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 //  public doughnutChartData:number[] = [350, 450, 100];
 //  public doughnutChartType:string = 'doughnut';
 //  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
 //  public pieChartData:number[] = [300, 500, 100];
 //  public pieChartType:string = 'pie';




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
