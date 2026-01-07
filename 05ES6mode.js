// multiline string we use backtick( ` )
let coll = `top collage in AP
more recruiments
more activity`;
console.log(coll);
//string interpolish
let first_Name = "Balaji";
let last_Name = "Kuda";
console.log(`${first_Name} ${last_Name}`); 
// array destructing
let p_Names = ["realme" , "LG" , "vivo" ];
let [brand1 , brand2, brand3] = p_Names;
console.log(brand1); 
console.log(brand2);
console.log(brand3);

// object destructing
const movieInfo = {movieNmae:Bahubali,
    Director:Rajamouli,
    producer:Shobu
};
let { movie_Name , Director , producer } = movieInfo;
console.log(movieName);
console.log(Director);
console.log(producer);
