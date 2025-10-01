import { Component } from '@angular/core';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { NewTicketComponent } from './dashboard/tickets/new-ticket/new-ticket.component';
import { ButtonComponent } from './shared/button/button.component';

@Component({
  selector: 'app-dummy',
  standalone: true,
  templateUrl: './dummy.component.html',
  styleUrl: './styles.css',

  imports: [
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class DummyComponent {}
