import {
  Component,
  createNgModuleRef,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-async-import',
  templateUrl: './async-import.component.html',
  styleUrls: ['./async-import.component.css'],
})
export class AsyncImportComponent {
  @ViewChild('containerRef', { read: ViewContainerRef })
  private readonly containerRef!: ViewContainerRef;

  constructor(private injector: Injector) {}

  async showSimpleComponent(): Promise<void> {
    const { SimpleComponent } = await import(
      '../../components/simple/simple.component'
    );
    this.containerRef.createComponent(SimpleComponent);
  }

  async showUserWidget(): Promise<void> {
    const { WidgetModule } = await import('../../modules/widget.module');
    const moduleRef = createNgModuleRef(WidgetModule, this.injector);
    const component = moduleRef.instance.getComponent();

    this.containerRef.createComponent(component, {
      ngModuleRef: moduleRef,
    });
  }
}
