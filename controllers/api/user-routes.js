//* import the express router and the user model
const router = require('express').Router();
const { User } = require('../../models');

//* CREATE a new user
router.post('/', async (req, res) => {
    try {

        //*  Create new user based on fields provided in handlebars page
        const newUserData = await User.create(req.body);

        //* When user account is created, then save to session the fact that the user is now logged in
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = newUserData.id;
            
            res.status(200).json(newUserData);
        });

    //*  If there is a server error, throw the error
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//* ALLOW user to log in to account
router.post('/login', async (req, res) => {
    try {

        //*  Find the data that matches the username given by the user
        const dbUserData = await User.findOne({
            where: {username: req.body.username}
        });

        //*  If the user data doesn't exist, throw a 400 error
        if (!dbUserData) {
            res.status(400).json({ message: 'You entered an invalid username or password...' });
            return;
        }

        //*  Check to see if the provided username matches the username on file
        const validPassword = await dbUserData.validatePassword(req.body.password);
        

        if (!validPassword) {
            res.status(400).json({ message: 'You entered an invalid username or password...' });
            return;
        }

        //*  If password is valid, then create new log-in session
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = newUserData.id;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });

    //*  Otherwise, throw a server error
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//* ALLOW user to log out of account
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else res.status(404).end();
})

//* export the 
module.exports = router;