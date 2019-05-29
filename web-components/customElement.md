## custom elements (自定义标签) [Edge正在实现中...]
    
  ### CustomElementRegistry
  提供注册自定义元素和查询已注册元素的方法， 由 window.customElements创建;

    let CustomElementRegistry = window.createElements;
  
  方法:
    
    CustomElementRegistry.define(name, constructor, options)
      // 定义一个新的自定义元素
    CustomElementRegistry.get()
      // 返回指定自定义元素的构造函数，如果未定义自定义元素，则返回undefined;
    CustomElementRegistry.whenDefined()
      // 返回当使用给定名称的自定义元素时将会执行的 promise; 

  创建两种类型的自定义元素:

    自主定制元素: 独立元素； 不会从内置HTML元素继承；
    自定义内置元素: 元素继承并扩展内置HTML元素;
  
  参数:
  ```
    name: 自定义元素名，必须包含 - 分格符，如 pop-up
    constructor: 自定义元素构造器
    options: (可选), 控制元素如何定义，目前只支行一个选项， extends， 指定继承的已创建的元素，被用于创建自定义内置元素。
  ```
  
  示例:
    
  自主定制元素

    class PopupInfo extends HTMLElement {
      // TODO
    }
    customElements.define('popup-info', PopupInfo);

  自定义内置元素

    class MyButton extends HTMLButtonElement {
      // TODO
    }
    customElements.define('my-button', MyButton, {extends: 'button'});