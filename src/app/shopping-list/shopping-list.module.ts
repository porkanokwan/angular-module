import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    // CommonModule, ใช้จากใน Shared Module แทนแล้ว
    FormsModule,
    RouterModule.forChild([{ path: "", component: ShoppingListComponent }]),
    SharedModule,
  ],
  providers: [LoggingService],
  exports: [ShoppingListComponent, ShoppingEditComponent],
})
export class ShoppingListModule {}
