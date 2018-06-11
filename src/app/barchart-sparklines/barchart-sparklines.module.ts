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

@NgModule({
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	imports: [
		CommonModule,
		DemoMaterialModule
	],
	declarations: [
		BarchartSparklinesComponent,
		BarchartSimpleSparklineComponent
	]
})
export class BarchartSparklinesModule { }
