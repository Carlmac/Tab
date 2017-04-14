# Tab
Tab 组件

### 依赖(dependencies)
- 不需要 jQuery, no requirement for jQuery

### 兼容性(compatability)
- IE 11+

### 在线预览(Demo)
[live demo]()

### 用法(Usage)

#### HTML
`
<div class="tab" id="tab-id">
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
`

#### JS

`
Tab.init('#tab-id');
`
