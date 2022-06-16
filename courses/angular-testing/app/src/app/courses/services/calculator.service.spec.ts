import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

// // Alternative: Create a real instance and spy on it - NOT RECOMMENDED
// const logger = new LoggerService();
// spyOn(logger, 'log');

describe('CalculatorService', () => {

  it('should add two numbers', () => {
    // TODO: Do not repeat the initialization of this spy
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const calc = new CalculatorService(logger);
    const result = calc.add(2, 2);
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const calc = new CalculatorService(logger);
    const result = calc.subtract(2, 2);
    expect(result).toBe(0);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

});
