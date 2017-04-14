# Tab
快速生成一个 Tab 组件

### 在线预览(Demo)
[live demo](https://carlmac.github.io/Tab/Tab.html)

### 依赖(dependencies)
- 不需要 jQuery, no requirement for jQuery

### 兼容性(compatability)
- IE 11+

### 用法(Usage)

#### HTML

give the tab an id, here is `tab-demo`
````
<div class="tab" id="tab-demo">
  <ul class="tab-nav">
    <li class="active">tab 1</li>
    <li>tab 2</li>
    <li>tab 3</li>
  </ul>
  <div class="tab-body">
    <div class="active">content 1</div>
    <div>content 2</div>
    <div>content 3</div>
  </div>
</div>
````

#### CSS

insert CSS file in the head
````
<link rel="stylesheet" href="css/Tab.css">
````

#### Javascript

Insert Javascript file
````
<script src="js/Tab.js"></script>
````

And then initialize using it's id
````
Tab.init('#tab-demo');
````
