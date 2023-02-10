'use strict';

    class Book{
        constructor(title, Author, ISBN, numCopies){

        this.title=title,
        this.Author=Author,
        this.ISBN=ISBN,
        this.numCopies= numCopies

    }
    
    get Availbability(){
        return this.getAvailbability();
    }

    getAvailbability= function (){
        if(this.numcopies ===0 ){
            return 'Out of stock'
        }else if (this.numCopies<10){
            return 'low stock'
        }
        return 'In stock';
    }


    sell(numCopiesSold =1){
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesStocked = 5){
        this.numCopies+= numCopiesStocked;
    };

}


    const SteppingStone = new Book("SteppingStone", "lael lawal", 332245,5);
    console.log(SteppingStone.getAvailbability());

    SteppingStone.restock(12);
    console.log(SteppingStone.getAvailbability());
    
    SteppingStone.sell(17);
    console.log(SteppingStone.getAvailbability());
