import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit {

  @Input()
  startColor: string = 'orange';

  @Input()
  color: string = 'orange';

  constructor(
    private ref: ElementRef
  ) {
    console.log(ref);
  }

  ngOnInit(): void {
    (this.ref.nativeElement as HTMLElement)
      .innerHTML
      = 'modified from do nothing directive';
    (this.ref.nativeElement as HTMLElement).style.color = this.startColor;

    // (this.ref.nativeElement as HTMLElement).addEventListener('click', () => {
    //   console.log('clicked');
    // })
  }

  @HostListener('click')
  handleClick() {
    (this.ref.nativeElement as HTMLElement).innerHTML = 'by HostListener !';

  }

  @HostListener('mouseover')
  mouseover() {
    (this.ref.nativeElement as HTMLElement).style.color = this.color;

  }



}
