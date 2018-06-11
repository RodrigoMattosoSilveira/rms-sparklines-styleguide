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

@NgModule({
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],

	imports: [
		CommonModule
	],
	declarations: [
		InlineSparklinesComponent,
		InlineSimpleSparklineComponent,
		InlineShadeSparklineComponent
	]
})
export class InlineSparlinesModule { }
