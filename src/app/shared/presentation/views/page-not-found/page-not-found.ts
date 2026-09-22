import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button'; // remember it

@Component({
  imports: [TranslatePipe, MatButton],
  selector: 'app-page-not-found',
  styleUrl: './page-not-found.css',
  templateUrl: './page-not-found.html',
})

// Implements OnInit
export class PageNotFound implements OnInit {
  protected invalidPath = '';
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.invalidPath = this.route.snapshot.url.map((url) => url.path).join('/');
  }

  protected navigateToHome() {
    this.router.navigate(['home']).then();
  }
}
