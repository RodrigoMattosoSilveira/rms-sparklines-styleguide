import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	version =  `0.2.3`;
	sparklines = [
		{
			name: 'Inline',
			icon: '',
			routeLink: 'inline-sparklines'
		},
		{
			name: 'Bar Chart',
			icon: '',
			routeLink: 'barchart-sparklines'
		},
		{
			name: 'Box plot Chart',
			icon: '',
			routeLink: 'boxplot-sparklines'
		}
	];
}
