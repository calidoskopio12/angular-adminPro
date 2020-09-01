import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BreadscrumbsComponent} from './breadscrumbs/breadscrumbs.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
    declarations: [
        BreadscrumbsComponent, SidebarComponent, HeaderComponent
    ],
    exports: [
        BreadscrumbsComponent, SidebarComponent, HeaderComponent
    ],
    imports: [CommonModule, RouterModule]
})
export class SharedModule {}
