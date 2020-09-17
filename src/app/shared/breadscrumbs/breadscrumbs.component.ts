import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadscrumbs',
  templateUrl: './breadscrumbs.component.html',
  styles: [],
})
export class BreadscrumbsComponent implements OnDestroy {
  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentoRutas().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }
  getArgumentoRutas() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
