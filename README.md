# angular 文本域根据内容自动适应高度插件

## 📦 安装

> npm install ngx-textarea-auto-height --save

## 🔨 使用
引入module

``` js
import { TextareaAutoHeightModule } from 'ngx-list-filter';

@NgModule({
    imports: [
        TextareaAutoHeightModule
    ]
})
export class AppModule {
}
```

在 textarea 标签上使用

``` html
<textarea autoHeight></textarea>
```

## 🎨 API

#### 1. @Input() 属性
- maxHeight
- minHeight

#### 2. @Output() 属性
- sizeChange
