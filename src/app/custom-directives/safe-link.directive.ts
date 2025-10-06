import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onLeavePage($event)',
  },
})
// Custom attribute directive
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  // Inject the ElementRef for the <a> element this directive is attached to
  // This gives direct access to the DOM element
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('Safe link active');
  }

  onLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app.');

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;

      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();

      return;
    }

    event.preventDefault();
  }
}
