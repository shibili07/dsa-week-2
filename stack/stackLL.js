class Node{
     constructor(value){
        this.val = value
        this.next = null

     }
}


class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.top){
            this.top = newNode
            return
        }
        newNode.next = this.top
        this.top = newNode
        this.size++
    }
    pop(){
        if(this.isEmpty()){
             return "stack is empty"
        }
        let popped = this.top
        this.top = this.top.next
        this.size --
        return popped
    }
    peek(){
        return  this.isEmpty() ? null:this.top.val
    }
    //check is empty 
    isEmpty(){
        return this.size===0
    }
    print(){
       let current = this.top
       let res = ""
       while(current){
        res+=current.val+"=>"
        current = current.next
       }
       res+=" Null"
       console.log(res)
    }
}

let stack = new Stack()

stack.push(23)
stack.push(9)
stack.push(45)
stack.push(7)
stack.push(1)
stack.push(2)
stack.pop()
console.log(stack.peek());

stack.print()