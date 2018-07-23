import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-line-decorated-sparkline',
	templateUrl: './line-decorated-sparkline.component.html',
	styleUrls: ['./line-decorated-sparkline.component.css']
})
export class LineDecoratedSparklineComponent implements OnInit {

	// Class(es) to be added to the canvas element.
	className = '';

	// adding the start and end points
	decorationPoints = JSON.stringify([{index: 0, color: 'red'}, {index: 11, color: 'black'}]);

	// A number giving the size of the dots used to mark important values.
	dotRadius = 1.5;

	// A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
	height = 32;

	// A string giving the color of the sparkline. Any valid CSS color.
	lineColor = 'DarkGrey';

	// The sparkline data source
	linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);

	// A number giving the stroke of the line in pixels.
	lineWidth = 1.5;

	// A string giving the color of the dot marking the highest value. Any valid CSS color.
	shadeColor = ``;

	// A number giving the width of the sparkline box in pixels.
	width = 128;

	constructor() { }

	ngOnInit() {}
}