import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsRoutePage } from './details-route.page';

describe('DetailsRoutePage', () => {
  let component: DetailsRoutePage;
  let fixture: ComponentFixture<DetailsRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
