class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.items[this.items.length-1]
    }
    print(){
        console.log(this.items)
    } 
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }

}


let obj = new Stack()
obj.push(12)
obj.push(3)
obj.push(45)
obj.push(8)

obj.print()
console.log(obj.peek())
console.log(obj.size())