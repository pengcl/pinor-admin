import {NgModule} from '@angular/core';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ThemeModule} from '../../@theme/theme.module';
import {CatalogRoutingModule} from "./catalog-routing.module";
import {routedComponents} from "./catalog-routing.module";

@NgModule({
  imports: [
    NgxDatatableModule,
    ThemeModule,
    CatalogRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CatalogModule {
}
