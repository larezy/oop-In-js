class Book{
    constructor(title, Author, ISBN, numCopies){

        this.title=title,
        this.Author=Author,
        this.ISBN=ISBN,
        this.numCopies= numCopies

    }
    getAvailbability (){
        if(numcopies ===0 ){
            console.log('Out of stock');
        }else if (this.numCopies<10){
            console.log('low Stock');
        }
    }
}