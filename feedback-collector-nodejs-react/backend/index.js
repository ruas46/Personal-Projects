const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/.keys')
const app = express()
const PORT = process.env.PORT || 5000 //Heroku Deploy

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('access Token: ', accessToken)
        console.log('refresh Token: ', refreshToken)
        console.log('profile: ', profile)
        console.log('done: ', done)
    })
)

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

app.get('/auth/google/callback', passport.authenticate('google'))

app.get('/', (req, res) => {
    res.send({ hi: 'there'})
})

app.listen(PORT)