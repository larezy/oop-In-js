'use strict';
class Movies{
    
    constructor(title, director, Genre, releaseYear, Rating){
        this.title=title;
        this.director=director;
        this.Genre=Genre;
        this.releaseYear=releaseYear;
        this.Rating=Rating;

}

}
    Movies.prototype.getOverview=function(userOne){
        console.log(`${this.title} a ${this.Genre} film directed by ${this.director} was released in ${this.releaseYear}. It recieved a rating of ${this.Rating}` )
    }

var userOne = new Movies('The Dark Knight', 'Christopher Nolan', 'Action/Adventure', 2008, 4.9  );

console.log(userOne);
userOne.getOverview();