/*
 *
 *  * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 *
 *
 */

import { InlineSparklinesModule } from './inline-sparlines.module';

describe('InlineSparlinesModule', () => {
  let inlineSparlinesModule: InlineSparklinesModule;

  beforeEach(() => {
    inlineSparlinesModule = new InlineSparklinesModule();
  });

  it('should create an instance', () => {
    expect(inlineSparlinesModule).toBeTruthy();
  });
});
