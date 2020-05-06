import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit {

  @Input('color')
  color: string;

  @HostListener('click')
  private onClick() {
    (this.ref.nativeElement as HTMLDivElement).style.background = 'orange';
  }

  constructor(private ref: ElementRef) {
    console.log(ref.nativeElement);

  }

  ngOnInit(): void {
    this.ref.nativeElement.innerHTML = 'toto';
    (this.ref.nativeElement as HTMLDivElement).style.background = this.color;
  }

}
