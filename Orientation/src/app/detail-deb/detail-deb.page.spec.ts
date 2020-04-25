import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailDebPage } from './detail-deb.page';

describe('DetailDebPage', () => {
  let component: DetailDebPage;
  let fixture: ComponentFixture<DetailDebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailDebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
