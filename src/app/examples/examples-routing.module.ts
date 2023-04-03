import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncImportComponent } from './async-import/async-import.component';
import { ChangedAfterCheckErrorComponent } from './changed-after-check-error/changed-after-check-error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'async-import',
  },
  {
    path: 'async-import',
    component: AsyncImportComponent,
  },
  {
    path: 'changed-after-check-error',
    component: ChangedAfterCheckErrorComponent,
  },
  {
    path: 'ngx-perfect-scrollbar',
    loadChildren: () =>
      import('./ngx-perfect-scrollbar/ngx-perfect-scrollbar.module').then(
        (m) => m.NGXPerfectScrollbarModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
