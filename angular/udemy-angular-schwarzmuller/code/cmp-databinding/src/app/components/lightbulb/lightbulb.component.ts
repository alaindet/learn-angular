import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lightbulb',
  templateUrl: './lightbulb.component.html'
})
export class LightbulbComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy {

  @Input() status: boolean;
  @Input() removed: boolean;
  @Output() toggle = new EventEmitter<void>();
  @Output() destroy = new EventEmitter<void>();

  constructor() {
    console.log('constructor()');
  }

  onToggleClick() {
    console.log('onToggleClick()');
    this.toggle.emit();
  }

  onDestroyClick() {
    console.log('onDestroyClick()');
    this.destroy.emit();
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges()', changes);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked()');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

}
