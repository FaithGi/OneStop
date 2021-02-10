import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarwashPage } from './carwash.page';

describe('CarwashPage', () => {
  let component: CarwashPage;
  let fixture: ComponentFixture<CarwashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarwashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarwashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
