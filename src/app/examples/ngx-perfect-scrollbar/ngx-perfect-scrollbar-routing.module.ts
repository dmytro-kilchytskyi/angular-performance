import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollableTableComponent } from './scrollable-table/scrollable-table.component';

const routes: Routes = [
  {
    path: '',
    component: ScrollableTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NGXPerfectScrollbarRoutingModule {}
