import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResourcesContainerComponent} from './containers/resources-container/resources-container.component';

const routes: Routes = [
    {
        path: 'disk',
        component: ResourcesContainerComponent
    },
    {
        path: '**',
        redirectTo: 'disk'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
