let mode = document.querySelector("#mode");
let Body = document.querySelector('body');
let GO = document.querySelector('#go');
let url = document.querySelector('#url');
let lowdiv = document.getElementById('lower-div-inner');
let pic = document.getElementById('pic');
let back = document.getElementById('back');
let error = document.getElementById('error');

pic.style.display = "none";
back.style.display = "none";
error.innerHTML = "";

mode.addEventListener('click', () => {
    if (mode.innerHTML == "Dark Mode") {
        mode.style.backgroundColor = "#131C21";
        mode.innerHTML = "Light Mode";
        mode.style.color = "#DBEEFF";
        Body.style.backgroundColor = '#152E35';
        document.querySelector('h1').style.color = "#DBEEFF";
        GO.style.backgroundColor = "#131C21";
        GO.style.color = "#DBEEFF";
        back.style.backgroundColor = '#131C21';
        back.style.color = 'white';
    }
    else {
        mode.style.backgroundColor = "#73BEFF";
        mode.innerHTML = "Dark Mode";
        mode.style.color = "black";
        Body.style.backgroundColor = 'white';
        document.querySelector('h1').style.color = "black";
        GO.style.backgroundColor = "#73BEFF";
        GO.style.color = "black";
        back.style.backgroundColor = '#73BEFF';
        back.style.color = '#DBEEFF';
    }
})

GO.addEventListener('click', () => {
    if (url.value == '') {
        error.innerHTML = "Please Enter URL";
    }
    else {
        pic.style.display = "block";
        lowdiv.style.display = "none";
        back.style.display = "block";
        let address = url.value;
        let image = document.createElement('img');
        image.src = address;
        pic.appendChild(image);
    }
})

back.addEventListener('click', () => {
    window.location.reload()
})