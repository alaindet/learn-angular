import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Thanks to
 * https://alligator.io/angular/custom-form-control/
 */
@Component({
  selector: 'app-form-rating',
  styleUrls: ['./rating.component.scss'],
  templateUrl: 'rating.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormRatingComponent),
      multi: true
    }
  ]
})
export class FormRatingComponent implements ControlValueAccessor {

  @Input() disabled = false;

  public stars: boolean[] = [false, false, false, false, false];
  private onChange: (rating: number) => {};
  private onTouched: () => {};

  public onClick(index: number): void {

    this.onTouched();

    // Allow to reset vote by clicking on the first star twice
    if (this.getValue() === 1 && index === 0) {
      this.rate(0);
      this.onChange(null);
      return;
    }

    this.rate(index + 1);
    this.onChange(this.getValue());
  }

  public getValue(): number {
    return this.stars.reduce(
      (total: number, star: boolean) => total += (star ? 1 : 0),
      0
    );
  }

  /**
   * Set the rating (1-5)
   * If rating is 0, it resets the input
   */
  private rate(rating: number): void {
    if (!this.disabled) {
      this.stars = this.stars.map(
        (star: boolean, index: number) => rating > index
      );
    }
  }

  /**
   * From ControlValueAccessor
   * From Angular to Component
   *
   * Angular uses this function to tell this component to update the value
   */
  writeValue(rating: number | null): void {
    this.rate(+rating);
  }

  /**
   * From ControlValueAccessor
   * From Component to Angular
   *
   * Angular gives the component a function so that the component can use it to
   * inform Angular when the input value changes
   */
  registerOnChange(fn: (rating: number) => {}): void {
    this.onChange = fn;
  }

  /**
   * From ControlValueAccessor
   * From Component to Angular
   *
   * Angular gives the component a function so that the component can use it to
   * inform Angular when the input has been 'touched' (as in the form state)
   */
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  /**
   * From ControlValueAccessor
   * From Angular to Component
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
