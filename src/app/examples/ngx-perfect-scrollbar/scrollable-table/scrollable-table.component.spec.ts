import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollableTableComponent } from './scrollable-table.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

describe('ScrollableTableComponent', () => {
  let component: ScrollableTableComponent;
  let fixture: ComponentFixture<ScrollableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollableTableComponent],
      imports: [PerfectScrollbarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
