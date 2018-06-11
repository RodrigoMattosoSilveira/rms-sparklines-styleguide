import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-simple-sparkline',
  templateUrl: './inline-simple-sparkline.component.html',
  styleUrls: ['./inline-simple-sparkline.component.css']
})
export class InlineSimpleSparklineComponent implements OnInit {

    // Class(es) to be added to the canvas element.
    className = '';

    // The sparkline data source
    linePoints: number[] = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5];

    // A number giving the width of the sparkline box in pixels.
    width = 128;

    // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
    height = 32;

    // A string giving the color of the sparkline. Any valid CSS color.
    lineColor = 'lightgrey';

    // A number giving the stroke of the line in pixels.
    lineWidth = 1;

    // A number giving the size of the dots used to mark important values.
    dotRadius = 1.5;

    // adding the start and end points
    decorationpoints = [{index: 0, color: 'red'}, {index: 11, color: 'black'}];

	constructor() { }
	
	ngOnInit() {
  }

}
