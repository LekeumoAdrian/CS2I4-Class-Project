import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiplomesPage } from './diplomes.page';

describe('DiplomesPage', () => {
  let component: DiplomesPage;
  let fixture: ComponentFixture<DiplomesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiplomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
