import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

// describe('CalculatorService', () => {
xdescribe('CalculatorService', () => {

  let loggerSpy: any;
  let calc: CalculatorService;

  // This runs before each it() test
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    const loggerSpyProvider = { provide: LoggerService, useValue: loggerSpy };

    // Configure the TestBed for dependency injection
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        loggerSpyProvider,
      ],
    });

    calc = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    const result = calc.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calc.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
