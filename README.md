# dx-js
## 升级

- node直接安装新版本
- npm：npm install -g npm
- yarn：npm install -g yarn



## 安装依赖

### npm

npm install name：安装依赖到 mode_modules 目录下,不写入节点, npm install 时不下载该依赖。

npm install -g name：全局安装,不在 mode_modules 目录下,不写入节点, npm install 时不下载该依赖。

npm install name -S：npm install name -save的简写，自动把模块和版本添加到dependencies。

npm install name -D：npm install name -save-dev简写自动把模块和版本添加到devDependencies。

-D后，安装包会在package.json中的devDependencies对象中，简称dev。dev是在开发中要用到的。

-S后，安装包会在package.json中的dependencies对象中。简称dep。dep是在生产环境中要用到的。

比如：

构建工具：gulp和webpakc是用来压缩代码，打包需要的工具，程序实际运行中时候并不需要，就要放在dev中所以要用 -D。

项目插件：如element ui ,echarts,这种的插件要在运行中使用的，就要放在dep中所以就用-S。 一般我们项目插件，在api中都可以看到，一般都是-S。因为这些插件是在程序运行中使用的。

### yarn

examp: yarn add --dev @electron-forge/cli
