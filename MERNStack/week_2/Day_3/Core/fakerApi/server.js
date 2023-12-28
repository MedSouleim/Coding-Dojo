const express = require("express");
const app = express();
const PORT = 8000;
const faker  = require('faker');



// app.get("/api", (req, res) => {
//     res.json({ message: "Faker Api" });
// });





const createUser = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        firstName: firstName,
        lastName: lastName,
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);



const createFakeCompany = () => {
    const company = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return company;
};

const fakeCompany = createFakeCompany();
console.log(fakeCompany);



app.listen( PORT, () => {
    console.log(`Listening on PORT: ${PORT}`) }
    );