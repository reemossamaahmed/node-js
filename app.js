const yargs = require('yargs');

const actions = require('./actions');

yargs.command({
    command:'add',
    describe:'Add new a person',
    builder:{
        id:{
            describe:'id of person',
            demandOption:true,
            type:'string'
        },
        fname:{
            describe:'First name of person',
            demandOption:true,
            type:'string'
        },
        lname:{
            describe:'last name of person',
            demandOption:true,
            type:'string'
        },
        age:{
            describe:'age of person',
            demandOption:true,
            type:'string'
        },
        city:{
            describe:'city of person',
            demandOption:true,
            type:'string'
        },
        sub1 : {
            describe:"Adding sub1",
            demandOption:true,
            type:"string"
        },
        sub2 : {
            describe:"Adding sub2",
            demandOption:true,
            type:"string"
        },
        sub3 : {
            describe:"Adding sub3",
            demandOption:true,
            type:"string"
        },
        sub4 : {
            describe:"Adding sub4",
            demandOption:true,
            type:"string"
        },
        sub5 : {
            describe:"Adding sub5",
            demandOption:true,
            type:"string"
        },
        sub6 : {
            describe:"Adding sub6",
            demandOption:true,
            type:"string"
        }
    },
    handler:(action)=>{
        // console.log('add a new person');
        actions.addData(action.id,action.fname,action.lname,action.age,action.city,action.sub1,action.sub2,action.sub3,action.sub4,action.sub5,action.sub6);
    }
});

yargs.command({
    command:'delete',
    describe:'delete a person',
    builder:{
        id:{
            describe:'id of person',
            demandOption:true,
            type:'string'
        },
    },
    handler:(action)=>{
        // console.log('delete a person');
        actions.deleteData(action.id);
    }
});



yargs.command({
    command:'list',
    describe:'show all persons',
    handler:(action)=>{
        // console.log('show all person');
        actions.showAllData(action.id);
    }
});


yargs.command({
    command:'read',
    describe:'read one person',
    builder:{
        id:{
            describe:'id of person',
            demandOption:true,
            type:'string'
        },
    },
    handler:(action)=>{
        // console.log('show a person selected');
        actions.readSelectedData(action.id);
    }
});

yargs.parse();