import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isDropdownShown = false;

 @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isDropdownShown = this.elRef.nativeElement.contains(event.target) ? !this.isDropdownShown : false;
  }
  constructor(private elRef: ElementRef) {}
}
