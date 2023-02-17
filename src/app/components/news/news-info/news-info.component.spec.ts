import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsInfoComponent } from './news-info.component';

describe('NewsInfoComponent', () => {
  let component: NewsInfoComponent;
  let fixture: ComponentFixture<NewsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsInfoComponent ],
      imports: [
        RouterTestingModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title of the page', () => {    
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.paragraph h2')?.textContent).toContain('You are reading more about ');
  });
});
