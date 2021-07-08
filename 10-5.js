function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [fovoriteNumber]:"That is my favorite!"

}

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "hi";
    },
    sayBye(){
        return this.firstName + " says bye";
    }
}

function createAnimal(){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}