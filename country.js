class Country {
    constructor(name, officialLang, helloWorld, colors) {
        this.name = name;
        this.officialLanguage = officialLang;
        this.helloWorld = helloWorld;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"]);
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"]);
let wales = new Country("Wales", "Welsh", "Helo Byd!", ["white", "red", "green"]);
let moldova = new Country("Moldova", "Romanian", "Salut Lume!", ["blue", "yellow", "red"]);
let bolivia = new Country("Bolivia", "Spanish", "¡Hola Mundo!", ["red", "yellow", "green"]);

function DisplayColors(country) {

    var COLOR1 = document.getElementById("Color1");
    COLOR1.style.background = country.colors[0];
    var COLOR2 = document.getElementById("Color2");
    COLOR2.style.background = country.colors[1];
    var COLOR3 = document.getElementById("Color3");
    COLOR3.style.background = country.colors[2];
    
    var CNAME = document.getElementById("CountryName");
    CNAME.innerHTML = country.name;
    var OLANG = document.getElementById("OfficialLanguage");
    OLANG.innerHTML = country.officialLanguage;
    var HELLO = document.getElementById("HelloWorld");
    HELLO.innerHTML = country.helloWorld;
}