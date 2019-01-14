import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CatalogComponent} from "./catalog.component";
import {CatalogListComponent} from "./list/list.component";
import {CatalogAddComponent} from "./add/add.component";
import {CatalogEditComponent} from "./edit/edit.component";

const routes: Routes = [{
  path: '',
  component: CatalogComponent,
  children: [
    {
      path: 'list',
      component: CatalogListComponent,
    },
    {
      path: 'add',
      component: CatalogAddComponent,
    },
    {
      path: 'edit/:id',
      component: CatalogEditComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {
}

export const routedComponents = [
  CatalogComponent,
  CatalogListComponent,
  CatalogAddComponent,
  CatalogEditComponent
];
