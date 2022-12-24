var fg = document.getElementById("fg");
var fg_select = document.getElementById("fg_select");
var rezept_display = document.getElementById("rezept_display");
var isSpinning = false;

fg_select.onclick = function () {
    if (!isSpinning) {

        isSpinning = true;

        var randomDeg = Math.floor(Math.random() * 360);
        var drink = rezepte[assignDrink(randomDeg)];
        console.log(randomDeg);
        console.log(assignDrink(randomDeg));

        rezept_display.innerHTML = "...";
        rezept_display.style.backgroundColor = "#fff789"

        fg_select.style.opacity = "0%";
        fg.style.transitionProperty = "all";
        fg.style.transform = 'rotate(' + Number(randomDeg + 3600) + 'deg)';

        setTimeout(function () {
            fg_select.style.opacity = "100%";

            fg.style.transitionProperty = "none";
            fg.style.transform = 'rotate(' + randomDeg + 'deg)';

            var rezept_display_text = "";

            rezept_display_text = "" + drink.titel + "<br><br>Zutaten:<br>" + drink.zutaten[0];

            for (let i = 1; i < drink.zutaten.length; i++) {
                rezept_display_text += ", " + drink.zutaten[i];
            };

            rezept_display_text += "<br><br>Zubereitung:<br>" + drink.zubereitung[0];

            for (let i = 1; i < drink.zubereitung.length; i++) {
                rezept_display_text += " · " + drink.zubereitung[i];
            };

            if (drink.ld) {
                rezept_display.style.backgroundColor = "#48ff00";
            } else {
                rezept_display.style.backgroundColor = "#00c3ff";
            };

            rezept_display.innerHTML = rezept_display_text

            isSpinning = false;
        }, 5000);
    };
};
