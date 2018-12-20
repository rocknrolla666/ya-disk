import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesComponent {
    @Input() items: any[];
    @Output() folderClicked = new EventEmitter<any>();
}
