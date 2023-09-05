import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  // กำหนด path เพื่อบอกว่าเมื่อเข้า /recipes แล้วให้ load module/component ทุกอย่างใน recipes (Lazy load)
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipes.module").then((module) => module.RecipesModule), // ใส่ให้ Angular รู้ว่า Module อะไรอยู่ไฟล์ไหน
  },
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        (module) => module.ShoppingListModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((module) => module.AuthModule),
  },
  // ย้าย routes ไปใน recipes-routing
  // {
  //   path: "recipes",
  //   component: RecipesComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: "", component: RecipeStartComponent },
  //     { path: "new", component: RecipeEditComponent },
  //     {
  //       path: ":id",
  //       component: RecipeDetailComponent,
  //       resolve: [RecipesResolverService],
  //     },
  //     {
  //       path: ":id/edit",
  //       component: RecipeEditComponent,
  //       resolve: [RecipesResolverService],
  //     },
  //   ],
  // },

  // ย้ายไป routes shopping-list เอง
  // { path: "shopping-list", component: ShoppingListComponent },
  // ย้ายไป auth module เอง
  // { path: "auth", component: AuthComponent },
];
// ใช้ Module เหล่านี้เพื่อตั้งค่าและจัดกลุ่มบางอย่างไว้ด้วยกัน อย่าง AppRoutingModule นี้มีไว้เพื่อเก็บการกำหนดค่า route ของเรา
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ], // forRoot() ใช้ได้แค่ครั้งเเดียว เพราะเป็นการกำหนกเส้นทางหลักของเรา
  exports: [RouterModule],
})
export class AppRoutingModule {}
