const google = require('googleapis')
const functions = require("firebase-functions")
const admin = require("firebase-admin")
const firebase = require('firebase') 
// const serviceAccount = require("./permissions.json");
const express = require('express')
const app = express()
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://constant-cubist-344902-default-rtdb.firebaseio.com"
// });

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
admin.initializeApp()
const config = {
    apiKey: "AIzaSyDyT5RQLjsT4hSVSNie-DS05RUv3R9-K4U",
    authDomain: "constant-cubist-344902.firebaseapp.com",
    databaseURL: "https://constant-cubist-344902-default-rtdb.firebaseio.com",
    projectId: "constant-cubist-344902",
    storageBucket: "constant-cubist-344902.appspot.com",
    messagingSenderId: "114087196127",
    appId: "1:114087196127:web:9202029ee482f20318406a",
    measurementId: "G-GB40S6DGKJ"
};



firebase.initializeApp(config)
const cors = require('cors')
app.use(cors({origin:true}))

app.get('/get', (req, res) => {
    admin
        .firestore()
        .collection('screams')
        .get()
        .then((data) => {
            let screams = []
            data.forEach(doc => {
                screams.push({
                    screamID: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle
                })
            })
            return res.json(screams)
        }).catch(err => {
            res.json({error: err})
        })
})
app.post('/create', (req, res) => {
    if(req.method !== 'POST'){
        return res.json({error: "Method not allowed"})
    }
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: new Date().toISOString
    }

    admin
        .firestore()
        .collection('screams')
        .add(newScream)
        .then(doc => {
            res.json({message: `document ${doc.id} created successfullly`})
        }).catch(err => {
            res.json({error: err})
        })
})

app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    }
    admin.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.json({message: `user ${data.user.uid} signed up successfully`})
        })        
})
exports.app = functions.https.onRequest(app)