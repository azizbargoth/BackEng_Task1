

const fs=require("fs");
// const all
// const { Module } = require("module");
const addPerson=(id,fName1,lName1,age,city)=>{
    const allData=loadData();
    const dublicatedData=allData.filter((obj)=>{
        return obj.id===id
    })
    if(dublicatedData.length==0){
    allData.push({
        id:id,
        fName:fName1,
        lName:lName1,
        age:age,
        city:city 
    })
    savData(allData);}
    else{console.log("dunlicated id")};
}
///////////////////////
const loadData=()=>{
    try{
        dataJson=fs.readFileSync("jisoon10.json").toString()
        // console.log(JSON.parse(dataJson))
        return JSON.parse(dataJson)
        }catch{
            return []
        }
}
///////////////////////
const savData=(allData)=>{
    const allJsonData=JSON.stringify(allData)
    fs.writeFileSync("jisoon10.json",allJsonData)
}
const deleteData =(id)=>{
    allData=loadData();
    const itemsToKeep=   allData.filter((obj)=>{
    return obj.id !==id
    })
    savData(itemsToKeep);
}
const readData=(id)=>{
    allData=loadData();
    const itemToRead=allData.find((obj)=>{
        return obj.id ==id
        })
        if(!itemToRead.length){
        return console.log(itemToRead)
        }else{
            return console.log("on item found")
        }
        // console.log(itemToRead)
}
const listData=()=>{
    const dataList=loadData();
    dataList.forEach(element => {
    console.log(element.fName,element.lName) 
    }); 
}
module.exports={
    addPerson,
    deleteData,
    readData,
    listData
};