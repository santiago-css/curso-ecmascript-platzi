function newUser(name, age, country) {
    var name = name || "Santiago";
    var age = age || 21;
    var country = country || "COL";
    console.log(name, age, country);
}

newUser();
newUser("Oscar", 34, "MX");

function newAdmin(name = "David", age = 22, country = "COL") {
    console.log(name, age, country);
}

newAdmin()
newAdmin("Camilo", 19, "ESP");