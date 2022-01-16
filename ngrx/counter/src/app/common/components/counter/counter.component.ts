import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

  @Input() value: number | null = 0;
  @Input() increaseBy = 10;
  @Input() decreaseBy = 10;

  @Output() increased = new EventEmitter<void>();
  @Output() increasedBy = new EventEmitter<number>();
  @Output() decreased = new EventEmitter<void>();
  @Output() decreasedBy = new EventEmitter<number>();

  onIncrease(): void {
    this.increased.emit();
  }

  onIncreaseBy(value: number): void {
    this.increasedBy.emit(value);
  }

  onDecrease(): void {
    this.decreased.emit();
  }

  onDecreaseBy(value: number): void {
    this.decreasedBy.emit(value);
  }
}
