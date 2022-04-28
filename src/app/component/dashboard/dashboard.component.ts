import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  heroes: Hero[] = [];

  ngOnInit(): void {
  }

}
