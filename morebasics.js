var mixedObject;
var updateMixedObject = function (a, b) {
    mixedObject.name = a;
    mixedObject.phone = b;
    console.log("mixed object updated");
};
updateMixedObject("dave", 12345); // this works
updateMixedObject("dave", "12345");
