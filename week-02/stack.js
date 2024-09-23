// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
  // 透過前綴 # 符號來創建一個物件的私有屬性
  // 只能在物件內部被使用，而無法透過外部存取，以此來保護內部資料封裝
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
		// TODO
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
		// TODO
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO
    let topIndex = this.#items.length - 1
    return this.#items[topIndex];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // TODO
    if (this.#items.length === 0)
      return true;
    else
      return false;
  }

  // 回傳 stack 中元素的個數
  size() {
    // TODO
    let elements = this.#items.length;
    return elements;
  }

  // 清空 stack 
  clear() {
    // TODO
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    for (let i = 0; i < this.#items.length; i++){
      console.log(this.#items[i]);
    }  
  }

}

// 測試程式: