import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart-simple-sparkline',
  templateUrl: './barchart-simple-sparkline.component.html',
  styleUrls: ['./barchart-simple-sparkline.component.css']
})
export class BarchartSimpleSparklineComponent implements OnInit {

	barPoints: number[] =  [4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8];
	className: string = '';
	fillColor: string = 'blue';
	height: number = 16;
	lineColor: string = 'black';
	lineWidth: number = 1;
	toolTip: boolean = false;
	width: number = 64;

	constructor() { }

	ngOnInit() {
	}

}
