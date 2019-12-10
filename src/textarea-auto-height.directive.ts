import {
    AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output
} from '@angular/core';
import { InputNumber } from '@demacia/cmjs-lib';

@Directive({
    selector: 'textarea[autoHeight]'
})
export class TextareaAutoHeightDirective implements AfterViewInit {

    /**
     * 文本域最大高度
     */
    @Input() @InputNumber() maxHeight: number;

    /**
     * 文本域最小高度
     */
    @Input() @InputNumber() minHeight: number;

    /**
     * 文本域高度变化事件
     */
    @Output() sizeChange = new EventEmitter();

    /**
     * @ignore
     */
    @HostBinding('style.overflow-x') overflowX = 'hidden';

    /**
     * @ignore
     */
    @HostBinding('style.overflow-y') overflowY = 'hidden';

    /**
     * @ignore
     */
    @HostBinding('style.resize') resize = 'none';

    /**
     * @ignore
     */
    @HostListener('input') onInput() {
        this.textarea.style.height = 'auto';

        let dealtHeight = Math.max(this.textarea.scrollHeight, this.minHeight);
        if (!TextareaAutoHeightDirective.isNullOrUndefined(this.maxHeight)) {
            this.overflowY = dealtHeight > +this.maxHeight ? 'auto' : 'hidden';
            dealtHeight = Math.min(dealtHeight, +this.maxHeight);
        }

        this.textarea.style.height = dealtHeight + 'px';

        if (this.prevHeight !== dealtHeight) {
            this.prevHeight = dealtHeight;
            this.sizeChange.emit(dealtHeight);
        }
    }

    private textarea: HTMLTextAreaElement;
    private prevHeight: number;

    /**
     * @ignore
     */
    constructor(private ele: ElementRef) {
        this.textarea = ele.nativeElement;
    }

    /**
     * @ignore
     */
    ngAfterViewInit() {
        this.minHeight = Math.max(this.textarea.getBoundingClientRect().height, +(this.minHeight || 0));
        this.prevHeight = this.minHeight;

        if (!TextareaAutoHeightDirective.isNullOrUndefined(this.maxHeight) && this.minHeight >= +this.maxHeight) {
            this.maxHeight = null;
        }

        setTimeout(() => this.onInput());
    }

    private static isNullOrUndefined(v: any) {
        return v === null || v === undefined;
    }

}