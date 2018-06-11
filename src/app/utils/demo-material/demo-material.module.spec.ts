import { DemoMaterialModule } from './demo-material.module';

describe('DemoMaterialModule', () => {
  let demoMaterialModule: DemoMaterialModule;

  beforeEach(() => {
    demoMaterialModule = new DemoMaterialModule();
  });

  it('should create an instance', () => {
    expect(demoMaterialModule).toBeTruthy();
  });
});
