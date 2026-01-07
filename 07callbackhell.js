const studemtInfo = () => {
    console.log("studentDetailsare");
    setTimeout(() =>{
        let rollNo = [1,2,3,4,];
        console.log(rollNo);
        setTimeout((roll_no) => {
            const data = {
                sName:"balaji",
                qualification:"bTech"
            }
            console.log(`student name is ${data.sName} and roll num is ${roll_no}`);
        },2000,roll_no[1]);
    },2000);
};
studemtInfo();