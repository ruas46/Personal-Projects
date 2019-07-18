//Heroku production validation
if(process.env.NODE_ENV === 'production') {
    module.exports = {
        googleClientId: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        mongoURI: process.env.MONGO_URI,
        cookieKey: process.env.COOKIE_KEY,
        stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        stripeSecretKey: process.env.STRIPE_SECRET_KEY
    }
} else {
    module.exports = {
        googleClientId: "",
        googleClientSecret: "",
        mongoURI: '',
        cookieKey: 'redacted',
        stripePublishableKey: '',
        stripeSecretKey: ''
    }
}
// Update googleClientId and googleClientSecret with Google Credentials, set MongoDB Atlas URI in mongoURI and rename this file to .keys.js