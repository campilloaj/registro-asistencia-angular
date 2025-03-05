import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, FooterComponent],
  templateUrl: './dashboard-router.component.html',
  styleUrl: './dashboard-router.component.css',
})
export class DashboardRouterComponent {}
