import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;
  @Output() logEvent = new EventEmitter<string>();

  // Explanations for each lifecycle hook
  private explanations: { [key: string]: string } = {
    CONSTRUCTOR: 'Called when the component class is first created.',
    ngOnChanges:
      'Called whenever an @Input property changes (before ngOnInit on the first run).',
    ngOnInit:
      'Called once after inputs are set. Good place for initialization logic.',
    ngDoCheck:
      'Runs during every Angular change detection cycle. Useful for custom change detection.',
    ngAfterContentInit:
      'Called once after external content (ng-content) has been projected.',
    ngAfterContentChecked: 'Called after every check of projected content.',
    ngAfterViewInit:
      "Called once after the component's view (and child views) has been initialized.",
    ngAfterViewChecked: "Called after every check of the component's view.",
    ngOnDestroy:
      'Called just before the component is destroyed. Use for cleanup (unsubscribe, remove listeners).',
  };

  private log(message: string, data?: any) {
    const explanation = this.explanations[message] || '';
    const fullMessage = explanation ? `${message} → ${explanation}` : message;
    this.logEvent.emit(
      data ? `${fullMessage} | Data: ${JSON.stringify(data)}` : fullMessage,
    );
  }

  constructor() {
    this.log('CONSTRUCTOR');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges', changes);
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
}
