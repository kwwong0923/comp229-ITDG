const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/model-user");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => 
{
    console.log("Serializing User...");
    done(null, user._id);
    // grab the mongoDB's id -> store to the session
});

passport.deserializeUser(async (_id, done) => 
{
    console.log("deserializing User...");
    let foundUser = await User.findOne({_id});
    done(null, foundUser); // assign foundUser to req.user
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // if all the auth are OK -> redirect
            callbackURL: "/auth/google/redirect",
        },
        async (accessToken, refreshToken, profile, done) =>
        {
            console.log("Google Strategy");
            let foundUser = await User.findOne({googleID: profile.id})
            if (foundUser)
            {                
                // user login before
                console.log("Already registered");
                done(null, founder); // -> serializeUser
            }
            else
            {
                // the first time of login -> save to database
                let newUser = new User(
                    {
                        name: profile.displayNmae,
                        googleID: profile.id,
                        email: profile.emails[0].value,
                    }
                )
                let saveUser = await newUser.save();
                console.log("The new user was created");
                done(null, savedUser); // -> serializeUser
            }
        }
    )
)

// local strategy
passport.use(new LocalStrategy(async (username, password, done) => 
{
    let foundUser = await User.findOne({email: username});
    if (foundUser)
}))