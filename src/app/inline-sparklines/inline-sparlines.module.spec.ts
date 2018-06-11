/*
 *
 *  * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 *
 *
 */

import { InlineSparlinesModule } from './inline-sparlines.module';

describe('InlineSparlinesModule', () => {
  let inlineSparlinesModule: InlineSparlinesModule;

  beforeEach(() => {
    inlineSparlinesModule = new InlineSparlinesModule();
  });

  it('should create an instance', () => {
    expect(inlineSparlinesModule).toBeTruthy();
  });
});
