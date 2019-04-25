import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    console.log('Somjit says Hello');    
    response.send("Hello from Somjit's code!");
});
 