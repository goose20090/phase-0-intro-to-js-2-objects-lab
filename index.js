// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(object, key, value){
    let newObj = {...object};
    newObj[key]= value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key]= value;
    return object;
}

function deleteFromEmployeeByKey(object, key){
    let newObject = {...object};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];
    return object;
}