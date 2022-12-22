/**
 *  Task 1: Implement getValue method. The getValue method should take
 *  an object and a path as arguments, and return the value at
 *  the specified path in the object.
 *
 *  'path' is a string that represents the path to the value in object
 *  (e.g. "company.address.street" for the street property
 *  of the address property of the company property of object).
 */

function getValue(object, path) {
    const properties = path.split('.');

    try {
        for (let index = 0; index < properties.length; index += 1) {
            object = object[properties[index]];
            if(object === undefined) {
                throw Error
            }
        }
    }
    catch(err) {
        object = "Object property pathing wasn't set correctly"
    }

    return object;
}

const employee = {
    name: "John",
    surname: "Doe",
    position: "Frontend Developer",
    company: {
        info: {
            email: "info@deegloo.com"
        },
        address: {
            city: "Zagreb",
            street: "Zadarska 80",
            zipCode: 10000
        }
    }
};

const path = "company.address.street";
const extractedValue = getValue(employee, path);

console.log("Value extracted from object is: ", extractedValue);