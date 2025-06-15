function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size) {
    return -1;
  }

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  // let temp = this.head

  // while(temp.next !== null){
  //     console.log(temp.val)
  //     temp = temp.next
  // }

  return curr !== null ? curr.val : null;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    // console.log("size: " +this.size+ " index: "+ index)
    this.addAtHead(val);
    return;
  } else if (this.size === index) {
    this.addAtTail(val);
    return;
  } else if (index > this.size) {
    return;
  } else {
    // run loop till index - 1
    let curr = this.head;
    // 1 -> 2 -> 3 -> 4
    // index
    // 0    1    2    3

    // if index = 2 and we want to add between 1 and 2 , we need to reach 1
    // at i=0 curr will be at index 1 because it will be pushed to curr = curr.next

    // at i=0, curr = 2 which is at index 1
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    let newNode = new Node(val);
    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
  }

  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
