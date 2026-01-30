import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DetailedPage } from './detailed-page';

describe('DetailedPage', () => {
  let component: DetailedPage;
  let fixture: ComponentFixture<DetailedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedPage],
      providers: [
        provideRouter([
          {
            path: 'country/:countryCode',
            component: DetailedPage,
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedPage);
    component = fixture.componentInstance;

    // IMPORTANT: trigger routing lifecycle
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
