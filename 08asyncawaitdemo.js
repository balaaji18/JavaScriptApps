// asyncawaitdemo
const movieResult = () =>{
    const movieRating = new Promise((resolve, reject) => {
      let rating = 4.5;
      if (rating > 4) {
        resolve("good movie");
      } else {
        reject("waste of time");
      }
    });
};
//to call promises async await methods
const result = async() =>{
    try{
        await movieResult
    }
    catch{
        console.log(error);
    }
}