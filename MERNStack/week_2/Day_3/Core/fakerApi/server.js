const express = require("express");
const app = express();
const PORT = 8003;
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




app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json({ user: newUser });
});


app.get('/api/companies/new', (req, res) => {
    const newCompany = createFakeCompany();
    res.json({ company: newCompany });
});

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createFakeCompany();
    res.json({ user: newUser, company: newCompany });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
