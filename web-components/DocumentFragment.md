### DocumentFragment: 创建一个空白文档片段
```
  let fragment = document.createDocumentFragment();
```

### 描述

  DocumentFragment 通常的用例是创建文档片段， 将元素附加到文档片段， 然后将文档片段附加到DOM树， 在DOM树中， 文档片段将替换当前节点下的子元素。 

  文档片段存在于内存中，并不是在DOM树中， 所以将子元素插入到文档片段时不会引起页面回流。 因此使用文档片段通常会带来更好的性能。

### DEMO

  ```
    <ul id="ul"></ul>

    // 获取元素结点
    const element = document.querySelector('#id');
    // 获取文档片段
    const fragment = document.createDocumentFragment();
    const arrs = [1, 2, 3, 4, 5];
    // 循环创建子节点并添加到文档片段中
    arrs.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      fragment.appendChild(li);
    });
    // 将文档片段添加至元素结点中
    element.appendChild(fragment);
  ```

### 属性  继承Node与ParentNode接口的属性
  1. ParentNode.children 只读
  2. ParentNode.firstElementChild 只读
  3. ParentNode.lastElementChild 只读
  4. ParentNode.childElementCount 只读

### 方法
  1. DocumentFragment.querySelector();
  2. DocumentFragment.querySelectorAll();
  3. DocumentFragment.getElementById();
