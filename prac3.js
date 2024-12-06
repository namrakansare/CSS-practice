const car={type:"Fiat",model:"500",color:"white"};
const person={firstName:"John",lastName:"Doe",age:50,eyeColor:"blue",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
};
document.getElementById("fullName").innerHTML=person.fullName();
function myFunc(){
    document.getElementById("demo").innerHTML=person.firstName;
}
function getAge(){
    document.getElementById("showAge").innerHTML=person.age;
}

