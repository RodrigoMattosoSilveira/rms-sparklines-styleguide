import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { AppRoutingModule } from './app-roouting.module';
import { DemoMaterialModule } from './utils/demo-material/demo-material.module';
import { InlineSparklinesModule } from './inline-sparklines/inline-sparlines.module';
import { BarchartSparklinesModule } from './barchart-sparklines/barchart-sparklines.module';
import { BoxplotSparklinesModule } from './boxplot-sparklines/boxplot-sparklines.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	declarations: [
		AppComponent,
		LandingPageComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		HttpClientModule,
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
		ReactiveFormsModule,
		DemoMaterialModule,
		InlineSparklinesModule,
		BarchartSparklinesModule,
		BoxplotSparklinesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
