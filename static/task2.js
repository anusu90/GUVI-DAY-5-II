const btn1 = document.getElementById("task1");
const btn2 = document.getElementById("task2")

getAsiaPopulationSum = () => {
    console.log('clicked');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    xhr.send();
    xhr.onload = () => {
        webData = JSON.parse(xhr.response);
        console.log(webData);

        let asiaPolulationSum = webData.filter(v=>v.region === 'Asia').reduce((a,c) => {
            return a +c.population;
        },0);

        console.log(asiaPolulationSum);
    }
}

myfunc2 = () => {
    console.log('clicked-2');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true)
    xhr.send();
    xhr.onload = () => {
        webData = JSON.parse(xhr.response);
        console.log(webData);
    }

}

btn1.addEventListener("click", getAsiaPopulationSum);
btn2.addEventListener("click", myfunc2);