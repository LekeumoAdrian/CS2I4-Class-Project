import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDebouchesPage } from './add-debouches.page';

describe('AddDebouchesPage', () => {
  let component: AddDebouchesPage;
  let fixture: ComponentFixture<AddDebouchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDebouchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDebouchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
