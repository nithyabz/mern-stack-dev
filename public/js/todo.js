console.log("nithya js");

fetch("/api/todos")
    .then(function(response)
    {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("loader").style.display = "none";//block -  for show
    });

var light = true;
function setTheme() {
    let theme = document.getElementById("themeButton");
    if (light) {
        light = false
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        theme.innerHTML = `<i class="fas fa-sun fa-lg fa-fw"></i>`
    } else {
        light = true
        document.documentElement.setAttribute('data-bs-theme', 'light')
        theme.innerHTML = `<i class="fas fa-moon fa-lg fa-fw"></i>`
    }

}