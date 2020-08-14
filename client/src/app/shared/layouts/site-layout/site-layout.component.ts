import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { routes } from '../../../app.routing';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css'],
})
export class SiteLayoutComponent implements AfterViewInit {
  constructor(private authService: AuthService, private router: Router) {}

  @ViewChild('floating', { static: false }) floating: ElementRef;

  links = [
    {
      url: '/overview',
      name: 'Overview',
    },
    {
      url: '/analytics',
      name: 'Analytics',
    },
    {
      url: '/history',
      name: 'History',
    },
    {
      url: '/order',
      name: 'Add order',
    },
    {
      url: '/categories',
      name: 'Assortment',
    },
  ];

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floating);
  }
}
