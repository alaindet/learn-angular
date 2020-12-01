import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFoo]'
})
export class FooDirective implements OnInit {

  @Input() appFoo = 'default';

  ngOnInit() {
    console.log('FooDirective.appFoo', this.appFoo);
  }

}
