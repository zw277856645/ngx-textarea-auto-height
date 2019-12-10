# angular 文本域根据内容自动适应高度插件

## 📦 安装

> npm install @demacia/ngx-textarea-auto-height --save

## 🔗 链接
- [DOCS](https://zw277856645.gitlab.io/ngx-textarea-auto-height/)

## 🔨 使用

###### 引入module

``` js
import { TextareaAutoHeightModule } from '@demacia/ngx-textarea-auto-height';

@NgModule({
    imports: [
        TextareaAutoHeightModule
    ]
})
export class AppModule {
}
```

###### 在 textarea 标签上使用

``` html
<textarea autoHeight></textarea>
```
