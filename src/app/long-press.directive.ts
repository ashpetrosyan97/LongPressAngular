import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[LongPress]'
})
export class LongPressDirective {


  private start: number;
  private end: number;
  @Output() onLongPress = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();

  @HostListener('mousedown') onMouseDown() {
    this.start = Date.now();
  }

  @HostListener('mouseup') onMouseUp() {
    this.end = Date.now();
    if (this.end - this.start > 500) {
      this.onLongPress.emit();
    } else {
      this.onClick.emit();
    }
  }

  constructor() {
  }


}
