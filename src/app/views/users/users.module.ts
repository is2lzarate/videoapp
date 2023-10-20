import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

import {UsersRoutingModule} from './users-routing.module';
import {ButtonDirective, CardModule, ColComponent, RowComponent, TableDirective} from "@coreui/angular";
import {DocsComponentsModule} from "@docs-components/docs-components.module";
import {IconDirective} from "@coreui/icons-angular";



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RowComponent,
    ColComponent,
    DocsComponentsModule,
    CardModule,
    TableDirective,
    IconDirective,
    ButtonDirective,
  ]
})
export class UsersModule { }
