import { Passenger } from './../../models/passenger.interface';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges {

  @Input()
  public isLoading = false;

  @Input()
  public item: Passenger;

  @Output()
  public edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  public remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  public view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  public isEditing = false;

  // Makes components state immutable, so not references of parent's state
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.item) {
      this.item = {...changes.item.currentValue};
    }
  }

  public onNameChange(name: string): void {
    this.item.fullName = name;
  }

  public toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.edit.emit(this.item);
    }
  }

  public onRemove(): void {

    const message = `Vuoi eliminare il passeggero ${this.item.fullName}?`;
    const shouldRemove = window.confirm(message);

    if (!shouldRemove) {
      return;
    }

    this.remove.emit(this.item);
  }

  public onView(): void {
    this.view.emit(this.item);
  }

}
