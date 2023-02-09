'use strict';
class Movies{
    
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