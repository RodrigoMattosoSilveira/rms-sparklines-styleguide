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
	height = '16';
	highWhiskerColor  = 'black';
	highWhiskerLineWidth = 1;
	interQuartileRangeColor = 'black';
	interQuartileRangeLineWidth = 1;
	lowWhiskerColor = 'black';
	lowWhiskerLineWidth = 1;
	medianColor = 'black';
	medianLineWidth = 1;
	population = JSON.stringify([1, 2, 3, 4]);
	width = 64;

	constructor() { }

	ngOnInit() {}
}
