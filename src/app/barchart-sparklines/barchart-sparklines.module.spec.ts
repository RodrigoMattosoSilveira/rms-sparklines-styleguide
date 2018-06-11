/*
 *
 *  * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 *
 *
 */

import { BarchartSparklinesModule } from './barchart-sparklines.module';

describe('BarchartSparklinesModule', () => {
  let barchartSparklinesModule: BarchartSparklinesModule;

  beforeEach(() => {
    barchartSparklinesModule = new BarchartSparklinesModule();
  });

  it('should create an instance', () => {
    expect(barchartSparklinesModule).toBeTruthy();
  });
});
