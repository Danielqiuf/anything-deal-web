## EN: anything-deal-web
## Vue3.2 + VueRouter4 + Vuex4 + Vue Cli5 项目仓库源码
 
<p align='center'>
   <img src="https://img.shields.io/badge/Vue-@3.2-blue.svg?style=social" />
   <a target="_b lank" href="https://render.com/deploy?repo=https://github.com/apitable/apitable">
      <img src="https://img.shields.io/badge/render-deploy-5364e9" />
  </a>
  <a target="_blank" href="https://github.com/Danielqiuf/good-idea-life-stack/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/LICENSE-MIT-ff69b4" alt="APITable License Badge AGPL" />
  </a>
</p>

> 个人公众号H5练手项目，主要针对Vue3基础框架架构进行封装与调整，实现一些成熟且规范化的Vue3框架
--------------------------------------------------------------------------------
> 🧑 作者(Author) DanielQiu 著作权所有，有问题可以多多交流。
### ✨ 项目优势
- 已配置webpack打包`speed-measure-webpack-plugin`和压缩优化`compression-webpack-plugin`
- 对打包后的代码进行了代码分割`code Spilitting`
- 对于低版本手机或浏览器已加入`autoprefixer`和`babel/polyfill`插件进行兼容处理
- 详细浏览器与前缀方案`browserslist`配置见`package.json`
- 对vue3的使用有着更好的规范定义

### 🔥 目录结构
1. assets: `静态资源与样式目录`
   - images: `图片资源`
   - sass: `sass全局文件`
2. components: `全局组件`
3. constant: `枚举常量定义`
   - http: `Http相关常量定义（状态码，请求头）`
   - theme: `主题相关常量定义（颜色，尺寸）`
4. hooks: `Vue Composition Api函数定义库`
   - init: `初始化数据时用的Composition Api函数`
5. layout: `路由基础布局`
6. router: `路由目录`
   - route-hook: `常用的路由compositionApi函数还有路由守卫的定义`
   - views-route: `包含了所有页面和布局的路由定义`
7. services: `http请求`
8. store: `全局状态管理`
   - modules: `模块化状态管理容器`
9. utils: `工具库`
   - is: `基础类型检测库`
10. views: `基础页面`
    - widget: `局部业务组件`

------------------------------------------------------------
### 💞 编写规范
1. 所有javascript逻辑统一用setup语法糖进行编写
    ```vue
    <template>
        <div v-for='(item, index) in list' :key='index'>{{item.name}}</div>
    </template>
    <script setup>
       import { ref, reactive } from 'vue'
       const active = ref(0)
       const list = reactive([
            { name: 'tester' }
        ])
    </script>
    ```
2. 所有css/sass/less统一用modules进行编写
   ```vue
   <template>
        <div :class='$style.testerContainer'>Tester</div>
   </template>
   <style lang='scss' module>
        .testerContainer {
            width: 100%;
             height: 100vh;
             overflow: hidden
           }    
   </style>
   ```
3. 多个css modules可用命名空间进行定义与获取
   ```vue
   <template>
        <div :class='scopeSass.multipleContainer'>Multiple Modules1</div>
        <div :class='scopeLess.multipleContainer2'>Multiple Modules2</div>
        <div :class='sassModule.multipleContainer'>Multiple useCssModule Modules1</div>
        <div :class='lessModule.multipleContainer2'>Multiple useCssModule Modules2</div>
   </template>
   <script setup>
        import { useCssModule } from 'vue'
        /** 使用scopeSass模块 */
        const sassModule = useCssModule('scopeSass')
        /** 使用scopeLess模块 */
        const lessModule = useCssModule('scopeLess') 
   </script>
   <style lang='scss' module='scopeSass'>
       .multipleContainer {
            display: flex;
            flex-flow: row wrap;
        }
   </style>
   <style lang='less' module='scopeLess'>
        @color: #d3d3d3;
        .multipleContainer2 {
            font-size: 30px;
            color: @color;
        }    
   </style>
   ````
4. 遇到`inheritAttrs`应该单独使用`<script></script>`标签进行包裹。鉴于vue3的`runSideEffectOnce`的机制，可只在该标签中运行一次
  ````vue
   <script>
   /** 只会再该script中运行一次 */
    export default {
        inheritAttrs: false
   }
   </script>
   <script setup>
      /** 在这里可以直接使用useAttrs而不会把attrs显示在原生标签属性中 */
        import { useAttrs } from 'vue'
        const attrs = useAttrs()
   </script>
   ````
5. 对于不常修改，但又不会不改动的数据或者数组，通常都要写在`constant`目录中作为常量，方便以后更改。
6. 对于某些枚举（例如状态值，http状态码）等等，也需要写在`constant`目录中作为常量方便调用。
7. 对于某些局部的业务组件，通常都要写在该页面下的`widget`目录，大概目录例举`views->Home->widget->header.vue`
8. 若想修改组件中的css(vant或其他组件库等)，需要使用`:deep`或者`:global`操作符进行样式深度穿透, 则不能使用`module`进行css modules编写，但需要使用`scoped`进行样式隔离才能生效。
   ````vue
   <template>
        <Button class='button' />
   </template>
   <script setup></script>
   <style lang='scss' scoped>
       /** 对当前作用域下的vant-button样式进行深度修改 */
       :deep(.vant-button) {
            background-color: #000;
        }
        /** 对全局vant-button样式进行深度修改，此操作不被scoped影响 */
        :global(.vant-button){
             background-color: #000;
        }   
        /** 也可以对指定类名下的组件样式进行深度修改 */
        .button:deep(.vant-button) {
            background-color: #000;
        }         
   </style>
   ````

### 🌏 业务组件编写规范
- 局部业务组件若不需要依赖父级组件的数据或函数（父组件则与子组件相反）或不需要和父组件进行交互或通信的话，业务逻辑可写在组件中.
- 若父子需要通信或交互，应该把数据定义或者函数定义写在父级中间中，通过`provide`和`inject`，或者是`props`或`attrs`进行传参。
- 子组件修改父组件属性应暴露函数，或利用`v-model`或`v-model:value`语法糖进行通信。

----------------------------------------------------------------------

## ‍💻 项目安装
```
yarn install
```

### 开发环境启动
```
yarn serve
```

### 生产环境编译
```
yarn build
```

### eslint修复
```
yarn lint
```
----------------------------------------------------------------
### 📺 PS
- 由于开发者使用的`IDE`都不大同，可能会导致eslint规范紊乱，所以每次运行项目的时候都会运行eslint fix修复功能进行修复，更好维护代码的规范性。
- 基于`cross-env`实现的环境变量管理，可在根目录的`.env`，`.env.development`和`.env.production`中进行环境配置。

### 🥰 简介地持续更新ing...
