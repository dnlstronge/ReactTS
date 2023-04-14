let mixedObject: {
    name: string,
    phone: number | string,
}

const updateMixedObject = (a: string, b: any) => {
   mixedObject.name = a
   mixedObject.phone = b
   console.log("mixed object updated")
}

updateMixedObject("dave", 12345); // this works
updateMixedObject("dave", "12345") // wont work

const updateNew = (a: string, b: string) => {
    mixedObject.name = a
    mixedObject.phone = b
    console.log("mixed object updated")
} // will work