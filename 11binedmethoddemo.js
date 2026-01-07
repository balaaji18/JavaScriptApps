const movieInfo = {
    heroName : "balaji",
    villainName : "D",
    movieDetails : function (){
        return this.heroName + " " + this.villainName;
    }
};
const bahubali = {
    heroName:"prabhas",
    villainName:"rana"
}
const movieResult = movieInfo.movieDetails.bind(bahubali);

console.log(movieResult());