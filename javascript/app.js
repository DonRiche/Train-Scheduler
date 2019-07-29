var addTrainName = $('#trainInputName')
var addDestination = $('#destinationInputName')
var addFirstTrain = $('#firstTrainInputName')
var addFrequency = $('#frequencyInputName')

var submitButton = $('#submitOn')

var firebaseConfig = {
    apiKey: "AIzaSyBiEpvBpunUVTCaXZn0M45oyG82QGvBMWA",
    authDomain: "test-afb4b.firebaseapp.com",
    databaseURL: "https://test-afb4b.firebaseio.com",
    projectId: "test-afb4b",
    storageBucket: "",
    messagingSenderId: "798898889652",
    appId: "1:798898889652:web:9b6e79821799b5af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);