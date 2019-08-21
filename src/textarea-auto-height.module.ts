import { NgModule } from '@angular/core';
import { TextareaAutoHeightDirective } from './textarea-auto-height.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TextareaAutoHeightDirective ],
    exports: [ TextareaAutoHeightDirective ]
})
export class TextareaAutoHeightModule {
}