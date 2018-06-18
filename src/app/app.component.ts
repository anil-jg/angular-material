import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule } from '@angular/forms'
import {Sort} from '@angular/material';

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
  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  sortedData;

  constructor() {
    this.sortedData = this.desserts.slice();
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
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(+a.calories, +b.calories, isAsc);
        case 'fat': return compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }
}


function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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
