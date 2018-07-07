import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-boxplot-sparkline-simple-svg',
	templateUrl: './boxplot-sparkline-simple-svg.component.html',
	styleUrls: ['./boxplot-sparkline-simple-svg.component.css']
})
export class BoxplotSparklineSimpleSvgComponent implements OnInit {

	axisColor = 'black';
	axisLineWidth = 1;
	chartType = 'simple';
	className = '';
	drawingMethod = 'svg';
	height = '32';
	highWhiskerColor  = 'black';
	highWhiskerLineWidth = 1;
	interQuartileRangeLineColor = 'black';
	interQuartileRangeLineWidth = 1;
	interQuartileRangeFillColor = 'lightBlue';
	lowWhiskerColor = 'black';
	lowWhiskerLineWidth = 1;
	medianColor = 'red';
	medianLineWidth = 2;
	population = JSON.stringify([7,
		17,
		8,
		15,
		6,
		7,
		4,
		14,
		16,
		16,
		17,
		6,
		16,
		20,
		11,
		16,
		10,
		19,
		5,
		18]);
	width = 128;

	constructor() { }

	ngOnInit() {}

}
