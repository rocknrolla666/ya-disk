import {Injectable} from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {BehaviorSubject, Observable} from 'rxjs/index';

import {ResourcesHttpService} from './resources-http.service';
import {ResourceItemsData} from '../models';

@Injectable({
    providedIn: 'root'
})
export class ResourcesService {
    private resourcesItemsDataSubject = new BehaviorSubject<ResourceItemsData>({items: [], total: 0});
    public resourcesItemsData$: Observable<ResourceItemsData>;

    constructor(private resourcesHttp: ResourcesHttpService) {
        this.resourcesItemsData$ = this.resourcesItemsDataSubject.asObservable();
    }

    loadResourceItems(path: string, limit: string, offset: string): void {
        this.resourcesHttp.getResource(path, limit, offset)
            .pipe(
                map((res: any) => {
                    const items = res._embedded.items.map(item => {
                        return {
                            name: item.name,
                            path: item.path,
                            type: item.type,
                            size: item.size || null
                        };
                    });
                    const total = res._embedded.total;
                    return {items, total};
                })
            ).subscribe((items: ResourceItemsData) => this.resourcesItemsDataSubject.next(items));
    }
}
