import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabPlacesPage } from './tab-places.page';

describe('TabPlacesPage', () => {
  let component: TabPlacesPage;
  let fixture: ComponentFixture<TabPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
