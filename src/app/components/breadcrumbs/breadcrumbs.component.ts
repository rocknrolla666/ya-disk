import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {BreadcrumbItem} from '../../models';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
    @Input() items: BreadcrumbItem[];
    @Output() itemClicked = new EventEmitter<any>();
}
