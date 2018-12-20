import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/index';

import {ResourcesService} from '../../services/resources.service';
import {BreadcrumbItem, ResourceItem, ResourceItemsData} from '../../models';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-resources-container',
    templateUrl: './resources-container.component.html',
    styleUrls: ['./resources-container.component.css']
})
export class ResourcesContainerComponent implements OnInit {
    itemsData$: Observable<ResourceItemsData>;

    breadcrumbRootItem: BreadcrumbItem = {name: environment.rootBreadcrumbsItemName, path: environment.rootPath};
    breadcrumbsItems: BreadcrumbItem[];

    rootPath = environment.rootPath;
    currentPath: string;
    page: number;
    pageSize = environment.defaultPageSize;
    maxPages = 3;
    defaultOffset = '0';

    constructor(private resourcesService: ResourcesService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.itemsData$ = this.resourcesService.resourcesItemsData$;

        this.activatedRoute.queryParams.subscribe((params: {path: string, limit: string, offset: string}) => {
            this.currentPath = params.path || this.rootPath;
            const limit = params.limit || this.pageSize.toString();
            const offset = params.offset || this.defaultOffset;
            this.page = this.getPageNumByOffset(+offset);
            this.resourcesService.loadResourceItems(this.currentPath, limit, offset);
            this.createBreadcrumbsItems(this.currentPath);
        });
    }

    private getPageNumByOffset(offset: number): number {
        return (offset / this.pageSize) + 1;
    }

    private createBreadcrumbsItems(path: string): void {
        if (path === this.rootPath) {
            this.breadcrumbsItems = [this.breadcrumbRootItem];
            return;
        }
        const parts = path.split('/');
        const breadcrumbsItems = [this.breadcrumbRootItem];
        if (parts.length > 1) {
            parts.reduce((acc, cur) => {
                const itemPath = acc + '/' + cur;
                breadcrumbsItems.push({
                    name: cur,
                    path: itemPath
                });
                return itemPath;
            });
        }
        this.breadcrumbsItems = breadcrumbsItems;
    }

    onFolderChange(item: ResourceItem | BreadcrumbItem): void {
        this.page = 1;
        this.router.navigate(['disk'], {queryParams: {path: item.path}});
    }

    onPageChange(): void {
        const offset = (this.page - 1) * this.pageSize;
        this.router.navigate(['disk'], {queryParams: {path: this.currentPath, offset: offset}});
    }
}
