import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResourcesPresenterComponent} from './resources-presenter.component';

describe('ResourcesComponent', () => {
    let component: ResourcesPresenterComponent;
    let fixture: ComponentFixture<ResourcesPresenterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResourcesPresenterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResourcesPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
