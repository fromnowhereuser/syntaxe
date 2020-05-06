import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit {

  constructor(private ref: ElementRef) {
    console.log(ref.nativeElement);
  }
  ngOnInit(): void {
    this.ref.nativeElement.innerHTML = 'toto'
  }

}
