class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertfirstNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  insertLastNode(data) {
    let node = new Node(data);
    let current;

    // if empty ? make head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //Insert at index
  insertAtIndex(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let node = new Node(data);
    let current;
    let previous;

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  //Remove at index

  //clear list

  //print list data

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertfirstNode(100);
ll.insertfirstNode(200);
ll.insertfirstNode(300);

ll.insertLastNode(400);
ll.insertAtIndex(777, 2);
// ll.printListData();
ll.getAtIndex(0);
