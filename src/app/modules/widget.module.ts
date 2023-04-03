import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [WidgetComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
})
export class WidgetModule {
  getComponent(): typeof WidgetComponent {
    return WidgetComponent;
  }
}
