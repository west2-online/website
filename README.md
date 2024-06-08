# Website

west2-online 官方网站源代码及发布托管

## 迭代维护

我们使用 yarn 来进行包管理，下载好源代码后，使用

```bash
$ yarn install   # 安装依赖包
$ yarn run start # 启动本地测试服务器
```

之后可以在`localhost:3000`中复查看到测试页面，测试服务器支持热重载

### 更新文档

文档侧边栏`sidebars.ts`使用文件夹自动生成，当我们需要添加文档时，只需要在`docs`文件夹里添加文件即可，如果需要对文档进行分类，可以直接创建文件夹，然后把分类的文件放进文件夹中即可

### 更新成员

定义文件位于`src/components/Member`文件夹，编辑其中的`memberData.ts`即可
资源文件位于`static/member`文件夹，按照先前年份规范添加新的一年，之后在`memberData.ts`中导入即可

头像请先上传至又拍云的`w2-picture`对象存储`member`目录下（按年份区分）

## 文件结构

```text
.
├── README.md
├── babel.config.js
├── components.json
├── docs                  # 文档
├── docusaurus.config.ts  # Docusaurus 配置
├── sidebars.ts           # 侧边栏配置
├── src                   # 页面源代码
├── static                # 静态资源
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```