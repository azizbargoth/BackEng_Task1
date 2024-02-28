
// modules 

// const { require } = require("yargs");

// const { require } = require("yargs");

// 1- core modules 
 
//   const fs=require("fs");
//   fs.writeFileSync("data2.txt","aziz")
 
//   fs.appendFileSync("data2.txt",",Ahmad")
//   // console.log(fs.readFileSync("data2.txt").toString())
//   const x=require("./allData11.js")
//   // console.log(x.lastName)


//   const validator=require("validator")

// // console.log(validator.isEmail("aziz@aziz.com"))

// // console.log(process.argv)
// // const comm=
// // if(process.argv[2]=="add"){
// // console.log("added")
// // }else{
// //   console.log("nooo")
// // }
const fs=require("fs");
const data10=require("./data110");
const yargs=require("yargs");
yargs.command({
  command:"add",
  describe:"dd one itemd",
  builder:{
    id:{
      describe:"id",
      demandOption:true,
    },
    fName:{
      describe:"first name",
      demandOption:true,
      type:"string"
    },
    lName:{
      describe:"last name",
      demandOption:true,
      type:"string"
    }
  },
  handler:(x)=>{
  data10.addPerson(x.id,x.fName,x.lName,x.age,x.city)
  }
})
// console.log(yargs.argv)
// const fs=require("fs");
// const person1={
//   firstName:"Aziz",
//   lastName:"bbb"
// };
// const jisonObject=JSON.stringify(person1)
// fs.writeFileSync("jisoon10.json",jisonObject);
        // const yargs=require("yargs")
        yargs.command({
          command:"delete",
          describe:"to delete  an item",
          handler:(x)=>{
            data10.deleteData(x.id)
          }
        })
  yargs.command({
    command:"read",
    describe:"to read data",
    builder:{
      id:{
        describe:"id for item",
        demandOption:true,
        type:"string"
      }
    },
    handler:(x)=>{
      data10.readData(x.id)
    }
  })
  yargs.command({
    command:"list",
    describe:"to read list data",
    // builder:{
    //   id:{
    //     describe:"id for item",
    //     demandOption:true,
    //     type:"string"
    //   }
    // },
    handler:(x)=>{
      data10.listData(x.id)
    }
  })
yargs.parse()
