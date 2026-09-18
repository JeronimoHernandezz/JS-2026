const MAX2 = 1000;
let seguir2 = true;
for (let l = 900; seguir2 == true; l++) {
    document.body.innerHTML += "<p>" + l + "</p>";
    if (l == MAX2) seguir2 = false;
}
