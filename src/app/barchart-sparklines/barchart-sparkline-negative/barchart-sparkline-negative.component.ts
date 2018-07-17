import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-barchart-sparkline-negative',
	templateUrl: './barchart-sparkline-negative.component.html',
	styleUrls: ['./barchart-sparkline-negative.component.css']
})
export class BarchartSparklineNegativeComponent implements OnInit {

	chartType = 'negative';
	// barHeights: number[] =  [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12];
	barHeights: string =  JSON.stringify([-4, -3,-7, -8, -1, -1, -3, -2, -5, -3, -5, -8]);
	minimumBarWidth = 3;
	barGap = 6;
	fillColorMinus = 'rgb(255,0,0)';
	fillColorZero = 'rgb(0,255,0)';
	fillColorPlus = 'rgb(0,0,255)';

	className = 'bar-chart';
	height = 32;
	width = 128;

	constructor() { }
	ngOnInit() {}

}
