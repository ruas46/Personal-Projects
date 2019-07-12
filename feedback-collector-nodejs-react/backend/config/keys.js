//Heroku production validation
if(process.env.NODE_ENV === 'production') {
    module.exports = {
        googleClientId: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        mongoURI: process.env.MONGO_URI,
        cookieKey: process.env.COOKIE_KEY
    }
} else {
    module.exports = {
        googleClientId: "",
        googleClientSecret: "",
        mongoURI: '',
        cookieKey: 'redacted'
    }
}
// Update googleClientId and googleClientSecret with Google Credentials, set MongoDB Atlas URI in mongoURI and rename this file to .keys.js