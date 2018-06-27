import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-barchart-simple-sparkline',
	templateUrl: './barchart-simple-sparkline.component.html',
	styleUrls: ['./barchart-simple-sparkline.component.css']
})
export class BarchartSimpleSparklineComponent implements OnInit {

	chartType = 'positive';
	barHeights: number[] =  [4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8];
	minimumBarWidth = 3;
	barGap = 2;
	fillColorMinus = 'rgb(255,0,0)';
	fillColorZero = 'rgb(0,255,0)';
	fillColorPlus = 'rgb(0,0,255)';

	className = 'bar-chart';
	height = 16;
	width = 64;

	constructor() { }

	ngOnInit() {
	}

}
