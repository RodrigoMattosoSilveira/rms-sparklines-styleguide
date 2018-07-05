import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {InlineSparklinesComponent} from './inline-sparklines/inline-sparklines.component';
import {BarchartSparklinesComponent} from './barchart-sparklines/barchart-sparklines.component';
import {BoxplotSparklinesComponent} from './boxplot-sparklines/boxplot-sparklines.component';

const appRoutes: Routes = [
	{ path: 'home',                   component: LandingPageComponent },
	{ path: 'inline-sparklines',      component: InlineSparklinesComponent },
	{ path: 'barchart-sparklines',      component: BarchartSparklinesComponent },
	{ path: 'boxplot-sparklines',      component: BoxplotSparklinesComponent },
	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home', pathMatch: 'full'  }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false } // <-- debugging purposes only
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
