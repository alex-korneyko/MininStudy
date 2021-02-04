import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]' // Квадратные скобки обязательно
})
export class StyleDirective {

  @Input('appStyle')
  color: string;

  @Input()
  enterMouseFontWeight: string;

  @Input()
  dComplexStyle: {border?: string, borderRadius?: string}

  // Variable binding. This variable will be bind to style 'style.color' of html-element with this directive
  @HostBinding('style.color')
  elColor = 'blue';

  nativeElement: any;

  // el: link to html-element where directive was used
  constructor(private el: ElementRef, private render: Renderer2) {
    this.nativeElement = el.nativeElement;

    render.setStyle(this.nativeElement, 'color', 'blue');
    render.addClass(el.nativeElement, 'paragraph');
  }

  @HostListener('click', ['$event'])
  onClick = (event: Event) => {
    console.log(event);
  }

  @HostListener('mouseenter')
  onEnter = () => {
    // this.render.setStyle(this.nativeElement, 'color', this.color);
    this.elColor = this.color;
    // this.render.setStyle(this.nativeElement, 'fontWeight', this.enterMouseFontWeight);
    this.render.setStyle(this.nativeElement, 'border', this.dComplexStyle.border);
    this.render.setStyle(this.nativeElement, 'border-radius', this.dComplexStyle.borderRadius);
  }

  @HostListener('mouseleave')
  onLeave = () => {
    // this.render.setStyle(this.nativeElement, 'color', 'blue');
    this.elColor = 'blue';
    // this.render.setStyle(this.nativeElement, 'fontWeight', null);
    this.render.setStyle(this.nativeElement, 'border', null);
    this.render.setStyle(this.nativeElement, 'border-radius', null);
  }
}
