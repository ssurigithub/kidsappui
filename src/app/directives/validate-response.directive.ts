import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appValidateResponse]',
})
export class ValidateResponseDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('appValidateResponse')
  validResponse: string;

  @Input('selectedOption')
  selectedOption: string;

  @Output('updateRootParent')
  updateRootParent: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click')
  onClick() {
    // get the native element

    // this.renderer.removeClass(this.el.nativeElement, 'bg-warning');
    if (this.validResponse.includes(this.selectedOption)) {
      this.speak('Wow You are doing great');
      this.renderer.removeClass(this.el.nativeElement, 'bg-warning');
      this.renderer.addClass(this.el.nativeElement, 'bg-success');
      var c = `answer${this.selectedOption}-header`;
      var element = this.renderer.selectRootElement(`div.${c} h5 small i`);
      this.renderer.removeClass(element, 'invisible');
      this.renderer.addClass(element, 'fa-thumbs-up');
      this.renderer.setStyle(
        this.el.nativeElement,
        'border-width',
        '3px !important'
      );
    } else {
      this.speak('Are you sure');
      this.renderer.removeClass(this.el.nativeElement, 'bg-warning');
      this.renderer.addClass(this.el.nativeElement, 'bg-danger');
      var c = `answer${this.selectedOption}-header`;
      var element = this.renderer.selectRootElement(`div.${c} h5 small i`);
      this.renderer.removeClass(element, 'invisible');
      this.renderer.addClass(element, 'fa-thumbs-down');
    }
    this.updateRootParent.emit(this.selectedOption);
  }

  speak(text) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
}
