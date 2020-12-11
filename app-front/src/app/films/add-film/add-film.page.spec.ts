import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmPage } from './add-film.page';

describe('AddFilmPage', () => {
  let component: AddFilmPage;
  let fixture: ComponentFixture<AddFilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
