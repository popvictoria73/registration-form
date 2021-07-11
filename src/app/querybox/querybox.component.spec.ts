import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryboxComponent } from './querybox.component';

describe('QueryboxComponent', () => {
  let component: QueryboxComponent;
  let fixture: ComponentFixture<QueryboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
