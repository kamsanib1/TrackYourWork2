import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCoreComponent } from './query-core.component';

describe('QueryCoreComponent', () => {
  let component: QueryCoreComponent;
  let fixture: ComponentFixture<QueryCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
