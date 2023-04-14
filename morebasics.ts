let mixedObject: {
    name: string,
    phone: number,
}

const updateMixedObject = (a: string, b: number) => {
   mixedObject.name = a
   mixedObject.phone = b
   console.log("mixed object updated")
}

updateMixedObject("dave", 12345); // this works
updateMixedObject("dave", "12345") // wont work