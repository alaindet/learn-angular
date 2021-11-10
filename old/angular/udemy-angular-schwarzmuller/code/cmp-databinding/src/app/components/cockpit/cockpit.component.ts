import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { InputServerElement } from 'src/app/shared/models/input-server-element';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverAdded = new EventEmitter<InputServerElement>();
  @Output() blueprintAdded = new EventEmitter<InputServerElement>();
  @ViewChild('contentInput') contentInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor() {}
  ngOnInit() {}

  buildServerElement(): InputServerElement {
    return {
      name: this.nameInput.nativeElement.value,
      content: this.contentInput.nativeElement.value
    };
  }

  onAddServer(): void {
    console.log(this.contentInput.nativeElement.value);
    this.serverAdded.emit(this.buildServerElement());
  }

  onAddBlueprint(): void {
    this.blueprintAdded.emit(this.buildServerElement());
  }

}
