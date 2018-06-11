/*
 *
 *  * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 *
 *
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineSparklinesComponent} from './inline-sparklines.component';
import { InlineSimpleSparklineComponent } from './inline-simple-sparkline/inline-simple-sparkline.component';
import { InlineShadeSparklineComponent } from './inline-shade-sparkline/inline-shade-sparkline.component';
import { DemoMaterialModule } from '../utils/demo-material/demo-material.module';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';

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
		InlineSparklinesComponent,
		InlineSimpleSparklineComponent,
		InlineShadeSparklineComponent
	]
})
export class InlineSparklinesModule { }
