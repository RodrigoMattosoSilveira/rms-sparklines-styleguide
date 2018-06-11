import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  tiles = [
    {header: 'Inline', sub_header: 'Simple',  cols: 1, rows: 1},
    {header: 'Inljne', sub_header: 'Shaded',  cols: 1, rows: 2},
    {header: 'Bar',  sub_header: 'Simple',    cols: 1, rows: 1},
  ];

  constructor() { }

  ngOnInit() {
  }

}
