import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-boxplot-sparkline-simple',
	templateUrl: './boxplot-sparkline-simple.component.html',
	styleUrls: ['./boxplot-sparkline-simple.component.css']
})
export class BoxplotSparklineSimpleComponent implements OnInit {

	axisColor = 'black';
	axisLineWidth = 1;
	chartType = 'simple';
	className = '';
	height = '32';
	highWhiskerColor  = 'black';
	highWhiskerLineWidth = 1;
	interQuartileRangeColor = 'black';
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
