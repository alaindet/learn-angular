import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { ServerElement } from '../../shared/models/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements AfterViewInit, AfterContentInit {

  @Input() element: ServerElement;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('serverElementParagraph') paragraph: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.heading.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log(this.paragraph.nativeElement.textContent);
  }

}
