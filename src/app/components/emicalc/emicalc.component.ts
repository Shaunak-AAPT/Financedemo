import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalc',
  templateUrl: './emicalc.component.html',
  styleUrls: ['./emicalc.component.scss']
})
export class EmicalcComponent implements OnInit {
  loanAmount: number = 1000000;
  tenure: number = 10;
  interest: number = 7;
  emi: number = 0;

  formatLabel(value: number) {
    if (value >= 100000) {
      return Math.round(value / 100000) + 'L';
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  calculateemi(){
    var outstandingAmount = 
    (this.loanAmount) + (this.loanAmount * (this.interest / 100) * this.tenure);
    this.emi = outstandingAmount / this.tenure;
  }

}
