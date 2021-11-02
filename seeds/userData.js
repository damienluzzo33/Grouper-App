const { userData } = require('..models');

const userData = [
    {
    email: "hehexd@gmail.com",
    password: "password1",
    userName: "user1",
    },
    {
        email: "fakemail@gmail.com",
        password: "password2",
        userName: "user2",
        },
    {
    email: "fakemail2@gmail.com",
    password: "password3",
    userName: "user3",
    },
    {
        email: "fakemail3@gmail.com",
        password: "password4",
        userName: "user4",
        },
    {
    email: "fakemail4@gmail.com",
    password: "password5",
    userName: "user5",
    }, 
]

const userData = () => userData.bulkCreate(userData);

module.export = seeduserData; 