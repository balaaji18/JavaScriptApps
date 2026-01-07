//API call in logic with async await
const todos_Data = async() =>{
    try{
        let result = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await result.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
todos_Data();