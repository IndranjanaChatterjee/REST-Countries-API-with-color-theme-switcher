import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DetailedPage } from './detailed-page';

describe('DetailedPage', () => {
  let component: DetailedPage;
  let fixture: ComponentFixture<DetailedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => 'IN', // mock country code
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
