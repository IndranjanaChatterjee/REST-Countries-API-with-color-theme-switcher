import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainSection } from './main-section';

describe('MainSection', () => {
  let component: MainSection;
  let fixture: ComponentFixture<MainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSection,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
