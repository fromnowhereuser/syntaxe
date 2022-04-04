import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit {

  constructor(
    private ref: ElementRef
  ) {
    console.log(ref);


  }

  ngOnInit(): void {
    (this.ref.nativeElement as HTMLElement)
      .innerHTML
      = 'modified from do nothing directive';

    // (this.ref.nativeElement as HTMLElement).addEventListener('click', () => {
    //   console.log('clicked');
    // })
  }

  @HostListener('click')
  handleClick() {
    (this.ref.nativeElement as HTMLElement).innerHTML = 'by HostListener !';

  }



}
