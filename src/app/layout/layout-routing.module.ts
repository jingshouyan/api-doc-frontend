import { CodeComponent } from './pages/code/code.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ServerComponent } from './pages/server/server.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'code', component: CodeComponent },
      { path: 'server/:name', component: ServerComponent },
      { path: '**', redirectTo: 'code' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
