const fs = require('fs');

const loadData = ()=>{
    try{
        const dataJson =  fs.readFileSync('data.json').toString();
        return JSON.parse(dataJson);
    }
    catch{
        return [];
    }
}


const saveData= (data)=>{
    const dataJson = JSON.stringify(data);
    fs.writeFileSync('data.json',dataJson);
}


const addData = (id,Fname,Lname,age,city)=>{
    const data = loadData();

    duplicatedData = data.filter((person)=>{
        return person.id === id;
    });

    if(duplicatedData.length === 0)
    {
        data.push({
            id:id,
            fName:Fname,
            lname:Lname,
            age:age,
            city:city
        });
        saveData(data);
    
    }
    else{
        console.log('Error , This person added before!!')
    }
}

const deleteData = (id)=>{
    const data = loadData();
    dataKeeped = data.filter((person)=>{
        return person.id !== id;
    });
    console.log(dataKeeped);
    saveData(dataKeeped);
}

const readSelectedData = (id)=>{
    const data = loadData();
    
    const selectedData = data.find((person)=>{
        return person.id === id;
    });

    if(selectedData !== undefined)
    {
        console.log(selectedData.id,selectedData.fName,selectedData.lname,selectedData.age,selectedData.city);
    }
    else{
        console.log('Ops, This person not found');
    }
};

const showAllData = ()=>{
    const data = loadData();
    data.forEach((person) => {
        console.log(person.fName,person.age,person.city);
    });
};





module.exports= {
    addData,
    deleteData,
    readSelectedData,
    showAllData,
}