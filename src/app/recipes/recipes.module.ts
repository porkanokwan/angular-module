import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesRountingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  // Module และ Component ในนี้จะไม่สามารถเข้าถึง Module ใน imports ที่อยู่ใน App Module ได้เด็ดขาด ดังนั้นวิธีแก้มีดังนี้
  // เรียกใช้ CommonModule แทน BrowserModule เพื่อให้เข้าถึง ngIf/ngFor ได้ เพราะ BrowserModule ทำงานแค่ครั้งเดียวตอนเริ่ม app
  imports: [
    RouterModule,
    // CommonModule, ใช้จากใน Shared Module แทนแล้ว
    ReactiveFormsModule,
    RecipesRountingModule,
    SharedModule,
  ], // สิ่งที่ใช้ใน template ของ Component จะต้องนำเข้ามาใน Module นี้ ยกเว้น Service

  // ถ้า Component พวกนี้ไม่ได้ถูกนำออกไปใช้ก็ไม่ต้อง export
  // exports: [
  //   RecipesComponent,
  //   RecipeListComponent,
  //   RecipeDetailComponent,
  //   RecipeItemComponent,
  //   RecipeStartComponent,
  //   RecipeEditComponent,
  // ],
})
export class RecipesModule {}
