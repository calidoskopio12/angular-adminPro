import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadscrumbsComponent } from './breadscrumbs/breadscrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BreadscrumbsComponent, SidebarComponent, HeaderComponent],
  exports: [BreadscrumbsComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
