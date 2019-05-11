import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CodeComponent } from './pages/code/code.component';
import { NgxMaterialModule } from '../ngx-material/ngx-material.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, CodeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxMaterialModule
  ]
})
export class LayoutModule { }
