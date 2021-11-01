import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaBuilderComponent } from './meta-builder.component';

describe('MetaBuilderComponent', () => {
  let component: MetaBuilderComponent;
  let fixture: ComponentFixture<MetaBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
