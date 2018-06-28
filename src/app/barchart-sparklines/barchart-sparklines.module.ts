/*
 *
 *  * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 *
 *
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarchartSparklinesComponent } from './barchart-sparklines.component';
import { BarchartSimpleSparklineComponent } from './barchart-simple-sparkline/barchart-simple-sparkline.component';
import { DemoMaterialModule } from '../utils/demo-material/demo-material.module';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';
import { BarchartSparklineNegativeComponent } from './barchart-sparkline-negative/barchart-sparkline-negative.component';
import { BarchartSparklineDualComponent } from './barchart-sparkline-dual/barchart-sparkline-dual.component';
import { BarchartSparklineTriComponent } from './barchart-sparkline-tri/barchart-sparkline-tri.component';

@NgModule({
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	imports: [
		CommonModule,
		DemoMaterialModule,
		MarkdownModule.forRoot({
			loader: HttpClient, // optional, only if you use [src] attribute
			markedOptions: {
				provide: MarkedOptions,
				useValue: {
					gfm: true,
					tables: true,
					breaks: false,
					pedantic: false,
					sanitize: false,
					smartLists: true,
					smartypants: false,
				},
			},
		}),
	],
	declarations: [
		BarchartSparklinesComponent,
		BarchartSimpleSparklineComponent,
		BarchartSparklineNegativeComponent,
		BarchartSparklineDualComponent,
		BarchartSparklineTriComponent,
	]
})
export class BarchartSparklinesModule { }
