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
最大高度(px)，超出限制后不再增加高度，而是显示滚动条

- minHeight
最小高度(px)，低于限制后不再减少高度

#### 2. @Output() 属性
- sizeChange
高度变化事件，参数为当前 textarea 高度
