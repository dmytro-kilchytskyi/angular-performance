import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExamplesRoutingModule } from './examples-routing.module';
import { AsyncImportComponent } from './async-import/async-import.component';
import { ChangedAfterCheckErrorComponent } from './changed-after-check-error/changed-after-check-error.component';

@NgModule({
  declarations: [AsyncImportComponent, ChangedAfterCheckErrorComponent],
  imports: [CommonModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
