import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AppRoutingModule } from "./app-routing.module";
import { RecipeService } from "./recipes/recipe.service";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AlertComponent } from "./shared/alert/alert.component";
import { PlaceholderDirective } from "./shared/placeholder/placeholder.directive";
import { RecipesModule } from "./recipes/recipes.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { AuthModule } from "./auth/auth.module";
import { LoggingService } from "./logging.service";

@NgModule({
  // ต้องใส่เป็น Component, Directive, Pipe ไม่งั้นจะเรียกใช้ใน Template/Route ไม่ได้
  declarations: [
    AppComponent,
    HeaderComponent,
    // ย้ายไปใช้ใน AuthModule
    // AuthComponent,

    // ย้ายไปใช้ใน Shared Module แล้ว ต้องเอาในนี้ออก เพราะ ประกาศได้แค่ครั้งเดียว
    // DropdownDirective,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective,
  ],
  // ช่วยนำเข้า Module อื่น เป็นสิ่งสำคัญในการแบ่ง application ออกเป็นหลายๆ Module
  imports: [
    BrowserModule,
    // ย้ายไปใส่ใน AuthModule
    // FormsModule, // เป็นการ import การใช้งาน feature ทั้งหมดใน Form เราจะได้ไม่ต้องมานั่ง import FormGroup/FormArray และอื่นๆ ทีละตัว
    // แค่ import FormsModule ก็ใช้เรียกใช้งานพวก Feature ได้หมดเลย เช่น FormControl
    // ReactiveFormsModule,

    HttpClientModule,
    AppRoutingModule,

    // ไม่ต้อง import เข้ามาแล้วเพราะ เป็น module ที่ lazy load กำลังเรียกใช้ให้
    // RecipesModule,
    // AuthModule,
    // ShoppingListModule,

    SharedModule,
  ],
  // กำหนด Service ที่เราต้องการใช้
  providers: [
    // ย้ายไปอยู่ใน CoreModule
    // ShoppingListService,
    // RecipeService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
    CoreModule,
    LoggingService,
  ],
  // มีความสำคัญสำหรับการ start app มันเป็นตัวกำหนด Component ที่อยู่ในไฟล์ index.html ซึ่งจริงๆ แล้วมีได้หลายตัวแต่การทำงานจะยากขึ้น
  bootstrap: [AppComponent],
  // มีความสำคัญสำหรับ Dynamic Component ช่วยให้ Angular รับรู้ถึง Component นี้เมื่อต้องจำเป็นต้องสร้าง
  entryComponents: [AlertComponent],
})
export class AppModule {}
