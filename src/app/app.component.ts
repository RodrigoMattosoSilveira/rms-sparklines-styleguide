import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	sparklines = [
		{
			name: 'Inline',
			icon: '',
			href: 'inline-sparklines'
		},
		{
			name: 'Bar Chart',
			icon: '',
			href: 'barchart-sparklines'
		}
	];
}
