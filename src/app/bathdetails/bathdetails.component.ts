import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bathdetails',
  template: `<h2>Inside Batch Details</h2>
  <ul *ngFor="let value of Batches">
  <li>{{value.Name}} With duration {{value.Duration}} having fees {{value.Fees}}</li>
  <ul>`
})
export class BathdetailsComponent implements OnInit {

  public Batches = [
    {"Name":"PPA","Duration":4,"Fees":16500},
    {"Name":"LB","Duration":3,"Fees":17000},
    {"Name":"PyTHON","Duration":5,"Fees":15000},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
