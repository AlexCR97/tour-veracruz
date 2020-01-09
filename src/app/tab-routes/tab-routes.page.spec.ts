import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabRoutesPage } from './tab-routes.page';

describe('TabRoutesPage', () => {
  let component: TabRoutesPage;
  let fixture: ComponentFixture<TabRoutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRoutesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRoutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
