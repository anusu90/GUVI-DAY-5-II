const btnTask1 = document.getElementById("task1");
const btnTask2 = document.getElementById("task2");
const btnTask3 = document.getElementById("task3");
const btnTask4 = document.getElementById("task4");
const btnTask5 = document.getElementById("task5");
const btnTask6 = document.getElementById("task6");

GetasiaPopulationSum = function () {
    let xhr = new XMLHttpRequest();
    let url = 'https://restcountries.eu/rest/v2/all';
    xhr.open('GET', url, true)
    xhr.onload = function (){
        webData = JSON.parse(xhr.response);
        // console.log(webData);
        let asiaPolulationSum = webData.filter(v=>v.region === 'Asia').reduce((a,c) => {
            return a +c.population;
        },0);
        console.log(asiaPolulationSum);

        manipulateDOM('Sum of population of Asian countries is: ', asiaPolulationSum )
    }
    xhr.send();
}

GettotalPopulationSum = function() {

    let xhr = new XMLHttpRequest();
    let url = 'https://restcountries.eu/rest/v2/all';
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function (){
        webData = JSON.parse(xhr.response);
        // console.log(webData);
        let totalPopulationSum = (webData.reduce(((a,v) => {
            return a+v.population;
        }),0)
        );

        console.log(totalPopulationSum)

        manipulateDOM('Sum of total Population of world is: ', totalPopulationSum )
    }

    // console.log('hello');
}

getCountryPopulationLessThan2lac = () => {

    let xhr = new XMLHttpRequest();
    let url = 'https://restcountries.eu/rest/v2/all';
    xhr.open('GET', url, true)
    xhr.send();
    xhr.onload = function (){
        webData = JSON.parse(xhr.response);
        // console.log(webData);
        let CountryPopulationLessThan2lac = webData.filter(v => v.population<200000).map(v => v.name);

        console.log(CountryPopulationLessThan2lac);

        manipulateDOM('Countries with population less than 2 lacs are: ', CountryPopulationLessThan2lac )
    }
}

getCountriesFromAsia =() =>{

    let xhr = new XMLHttpRequest();
    let url = 'https://restcountries.eu/rest/v2/all';
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function (){
        webData = JSON.parse(xhr.response);
        // console.log(webData);
        let CountriesFromAsia = webData.filter(v => v.region === 'Asia').map(v => v.name);

        console.log(CountriesFromAsia)


        manipulateDOM('Name of countries in Asia are : ', CountriesFromAsia )

        
    }
}

getdollarCountries =() =>{
    let xhr = new XMLHttpRequest();
    let url = 'https://restcountries.eu/rest/v2/all';
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function (){
        webData = JSON.parse(xhr.response);
        // console.log(webData);
        let dollarCountries = webData.filter(v=>v.currencies[0].code === 'USD').map(v=>v.name);
        
        console.log(dollarCountries)

        manipulateDOM('Countries that use USD as their currency are: ', dollarCountries )
    }
}

getprintCountryInfo =() =>{

    let xhr = new XMLHttpRequest();
    let url = 'https://restcountries.eu/rest/v2/all';
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function (){
        webData = JSON.parse(xhr.response);
        console.log(webData);
        webData.forEach(v => {
            console.log(`The name of the country is ${v.name}, it has its capital at ${v.capital} and it's flag url is ${v.flag}`)
        });

        window.alert('Please Check the Console for desired output');
    }
}

btnTask1.addEventListener('click', GetasiaPopulationSum);
btnTask2.addEventListener('click', GettotalPopulationSum);
btnTask3.addEventListener('click', getCountryPopulationLessThan2lac);
btnTask4.addEventListener('click', getCountriesFromAsia) ;
btnTask5.addEventListener('click', getdollarCountries);
btnTask6.addEventListener('click', getprintCountryInfo);

manipulateDOM = (text,data) => {
    mainElement = document.getElementById('output');
    mainElement.innerHTML ="";
    tempElement = document.createElement("div");
    tempElement.id ='inner-Out';
    tempElement.appendChild(document.createTextNode(text));
    mainElement.appendChild(tempElement);

    tempElement = document.createElement("div");
    tempElement.id ='inner-Out-final';
    tempElement.appendChild(document.createTextNode(String(data)));
    mainElement.appendChild(tempElement);
};


alertfunc = () => {
    window.alert("Phone: 9840917857 \nEmail: anusu90@gmail.com")
}
