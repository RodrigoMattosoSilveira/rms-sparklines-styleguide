import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { AppRoutingModule } from './app-roouting.module';
import { DemoMaterialModule } from './utils/demo-material/demo-material.module';
import { InlineSparklinesModule } from './inline-sparklines/inline-sparlines.module';
import { BarchartSparklinesModule } from './barchart-sparklines/barchart-sparklines.module';
import { MarkdownModule } from 'angular2-markdown';

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
		ReactiveFormsModule,
		DemoMaterialModule,
		InlineSparklinesModule,
		BarchartSparklinesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
