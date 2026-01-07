// request data gethering logic
let btn = document.getElementById("demo");
let clickResult = document.getElementById("simple");
let triggerResult = document.getElementById("sample");
// business logic
let clickCount = 0;
let triggercount = 0;
// debounce method logic
function debounce(fn,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn()
        },delay);
    }
}
const debounceResult = debounce(()=>{
    triggercount++;
    triggerResult.innerHTML = `triggered ${triggercount}`;
},1000)
btn.addEventListener("click",() => {
    clickCount ++ ;
    clickResult.innerHTML = `user entered charactors ${clickCount}`; 
    debounceResult()
})