import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoMaterialModule} from '../utils/demo-material/demo-material.module';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';
import { BoxplotSparklineSimpleComponent } from './boxplot-sparkline-simple/boxplot-sparkline-simple.component';
import { BoxplotSparklinesComponent } from './boxplot-sparklines.component';

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
		BoxplotSparklineSimpleComponent,
		BoxplotSparklinesComponent
	]
})
export class BoxplotSparklinesModule { }
