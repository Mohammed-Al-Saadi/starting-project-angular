import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  /*
   *  Way 1: Using the @ViewChild Decorator
   * - `@ViewChild` is a decorator that tells Angular to inject a reference
   *   to the element or directive matching the given selector.
   * - Angular assigns it after view initialization (in ngAfterViewInit).
   */
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  /*
   *  Way 2: Using the viewChild() Function (Angular 17+)
   * - `viewChild` is not a decorator, but a function that returns a signal-like
   *   getter for the queried element.
   * - `viewChild.required` throws if the element is missing (safer).
   * - You access the DOM element with `this.form()?.nativeElement`.
   */
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() add = new EventEmitter<{ title: string; text: string }>();
  ngOnInit() {
    console.log('on init');
    // With viewChild(): works (element is available)
    // With @ViewChild: would be undefined here!
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('after view init');
    // With @ViewChild: only now it would be defined.
    // With viewChild(): still works fine here.
    console.log(this.form().nativeElement);
  }

  onSubmit(enteredTitle: string, enteredText: string) {
    console.log(enteredText, enteredTitle);
    this.add.emit({
      title: enteredTitle,
      text: enteredText,
    });

    // Reset the <form> DOM element after submit
    this.form()?.nativeElement.reset();
  }
}
