'use strict';
class Book{
    
    constructor(title, director, Genre, releaseYear, Rating){
        this.title=title;
        this.director=director;
        this.Genre=Genre;
        this.releaseYear=releaseYear;
        this.Rating=Rating;
    };
}

Movies.prototype.getOverview=function(){
    console.log(`${this.title}, a ${this.Genre} film direction by ${this.director} `)
}

class Technicalbook extent Book {
    constructor(edition){
        this.edition=edition;
    }

    this.getEdition()={

console.log(`${this.title}, a ${this.Genre} film direction by ${this.director} and the edition`)
    }
}