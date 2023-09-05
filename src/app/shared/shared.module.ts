import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  //   เราต้องการให้ไม่ว่าเราจะ import module นี้เข้าที่ไหน เราจะสามารถเข้าถึง feature ทั้งหมดนี้ที่ export ไปได้(รวมทั้ง Module พื้นฐานทั่วไป)
  // ดังนั้น Module อื่นๆ ที่ต้องการใช้ Feature เหล่านี้ทั้งหมดหรืออย่างใดอย่างนึงไม่จำเป็นต้องเพิ่มลง Module ของตัวเอง เพียงแค่ import SharedModule ตัวนี้ไปใช้ก็จะสามารถเข้าถึงได้ (ถ้าเราไม่ export จะเข้าถึงไม่ได้)
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ],
})
export class SharedModule {}
