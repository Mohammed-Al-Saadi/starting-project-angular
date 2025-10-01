import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Makes styles global instead of scoped to this component
  host: {
    class: 'control', //Automatically add CSS class "control" to the host element
    '(click)': 'onClick()', // Listen for clicks on the host element
  },
})
export class ControlComponent implements AfterContentInit {
  /*
   * Alternative way to configure host:
   *
   * @HostBinding() class = 'control';  // Add class using a decorator
   * @HostListener('click') onClick() { // Add event listener using a decorator
   *   console.log('clicked');
   * }
   */

  //Input property: the label shown for the control
  @Input({ required: true }) label!: string;

  constructor() {
    /*
    afterNextRender runs its callback once after the initial or next view update.
    afterRender runs its callback after every change detection cycle and DOM update.
     */
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }
  //Access the host element directly via dependency injection
  private el = inject(ElementRef);

  /*
   * Access projected content (anything passed inside <app-control> ... </app-control>)
   *
   * Example parent template:
   *   <app-control label="Title">
   *     <input #input />
   *   </app-control>
   *
   * Two ways to query the <input>:
   *
   * 1. Classic decorator (before Angular 17):
   *    @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
   *
   * 2. Angular 17+ function:
   *    contentChild() returns a signal-like getter that points to the projected child.
   *    Safer and works with Angular’s new reactivity system.
   */
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  /*
   * 🔹ngAfterContentInit lifecycle hook
   * - Runs once after Angular projects external content (<ng-content>).
   * - At this point, contentChild() is guaranteed to be available.
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
    console.log(this.control);
  }
  onClick() {
    // When the <app-control> is clicked, log the projected <input> or <textarea> element
    console.log(this.control);
  }
}
