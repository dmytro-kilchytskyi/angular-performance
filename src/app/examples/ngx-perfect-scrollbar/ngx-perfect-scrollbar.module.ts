import { NgModule } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ScrollableTableComponent } from './scrollable-table/scrollable-table.component';
import { NGXPerfectScrollbarRoutingModule } from './ngx-perfect-scrollbar-routing.module';

@NgModule({
  declarations: [ScrollableTableComponent],
  imports: [NGXPerfectScrollbarRoutingModule, PerfectScrollbarModule],
})
export class NGXPerfectScrollbarModule {}
