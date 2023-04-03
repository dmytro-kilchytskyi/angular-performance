import { Component, QueryList, ViewChildren } from '@angular/core';
import { TABLE_ENTITIES } from 'src/app/constants/table-entities.constants';
import { TableEntity } from 'src/app/models/table-entity';

@Component({
  selector: 'app-scrollable-table',
  templateUrl: './scrollable-table.component.html',
  styleUrls: ['./scrollable-table.component.css'],
})
export class ScrollableTableComponent {
  @ViewChildren('checkbox') rowList: QueryList<any> = new QueryList<any>();

  public readonly ENTITIES: TableEntity[] = TABLE_ENTITIES;

  selectAll(_target: EventTarget | null): void {
    if (!_target) return;

    const target = _target as HTMLInputElement;
    const isChecked = target.checked;

    this.rowList.forEach((el: any) => {
      el.nativeElement.checked = isChecked;
    });
  }

  onChange(): void {}
}
