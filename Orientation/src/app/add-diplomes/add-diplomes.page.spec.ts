import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDiplomesPage } from './add-diplomes.page';

describe('AddDiplomesPage', () => {
  let component: AddDiplomesPage;
  let fixture: ComponentFixture<AddDiplomesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiplomesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDiplomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
