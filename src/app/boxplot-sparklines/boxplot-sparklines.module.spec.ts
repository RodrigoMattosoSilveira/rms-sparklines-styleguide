import { BoxplotSparklinesModule } from './boxplot-sparklines.module';

describe('BoxplotSparklinesModule', () => {
	let boxplotSparklinesModule: BoxplotSparklinesModule;

	beforeEach(() => {
		boxplotSparklinesModule = new BoxplotSparklinesModule();
	});

	it('should create an instance', () => {
		expect(boxplotSparklinesModule).toBeTruthy();
	});
});
