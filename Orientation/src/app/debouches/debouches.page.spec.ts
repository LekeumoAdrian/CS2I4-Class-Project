import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebouchesPage } from './debouches.page';

describe('DebouchesPage', () => {
  let component: DebouchesPage;
  let fixture: ComponentFixture<DebouchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebouchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
