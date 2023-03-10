function assignDrink(deg) {
    switch (true) {
        case deg >= 1 && deg <= 7:
            return 0;
            break;
        case deg >= 8 && deg <= 13:
            return 1;
            break;
        case deg >= 14 && deg <= 17:
            return 2;
            break;
        case deg >= 18 && deg <= 22:
            return 3;
            break;
        case deg >= 23 && deg <= 28:
            return 4;
            break;
        case deg >= 29 && deg <= 34:
            return 5;
            break;
        case deg >= 35 && deg <= 40:
            return 6;
            break;
        case deg >= 41 && deg <= 48:
            return 7;
            break;
        case deg >= 49 && deg <= 54:
            return 8;
            break;
        case deg >= 55 && deg <= 60:
            return 9;
            break;
        case deg >= 61 && deg <= 66:
            return 10;
            break;
        case deg >= 67 && deg <= 72:
            return 11;
            break;
        case deg >= 73 && deg <= 77:
            return 12;
            break;
        case deg >= 78 && deg <= 84:
            return 13;
            break;
        case deg >= 85 && deg <= 89:
            return 14;
            break;
        case deg >= 90 && deg <= 95:
            return 15;
            break;
        case deg >= 96 && deg <= 101:
            return 16;
            break;
        case deg >= 102 && deg <= 108:
            return 17;
            break;
        case deg >= 109 && deg <= 114:
            return 18;
            break;
        case deg >= 115 && deg <= 120:
            return 19;
            break;
        case deg >= 121 && deg <= 126:
            return 20;
            break;
        case deg >= 127 && deg <= 131:
            return 21;
            break;
        case deg >= 132 && deg <= 137:
            return 22;
            break;
        case deg >= 138 && deg <= 143:
            return 23;
            break;
        case deg >= 144 && deg <= 147:
            return 24;
            break;
        case deg >= 148 && deg <= 155:
            return 25;
            break;
        case deg >= 156 && deg <= 159:
            return 26;
            break;
        case deg >= 160 && deg <= 164:
            return 27;
            break;
        case deg >= 165 && deg <= 169:
            return 28;
            break;
        case deg >= 170 && deg <= 175:
            return 29;
            break;
        case deg >= 176 && deg <= 180:
            return 30;
            break;
        case deg >= 181 && deg <= 185:
            return 31;
            break;
        case deg >= 186 && deg <= 190:
            return 32;
            break;
        case deg >= 191 && deg <= 195:
            return 33;
            break;
        case deg >= 196 && deg <= 201:
            return 34;
            break;
        case deg >= 202 && deg <= 205:
            return 35;
            break;
        case deg >= 206 && deg <= 210:
            return 36;
            break;
        case deg >= 211 && deg <= 215:
            return 37;
            break;
        case deg >= 216 && deg <= 220:
            return 38;
            break;
        case deg >= 221 && deg <= 224:
            return 39;
            break;
        case deg >= 225 && deg <= 232:
            return 40;
            break;
        case deg >= 233 && deg <= 239:
            return 41;
            break;
        case deg >= 240 && deg <= 246:
            return 42;
            break;
        case deg >= 247 && deg <= 252:
            return 43;
            break;
        case deg >= 253 && deg <= 257:
            return 44;
            break;
        case deg >= 258 && deg <= 265:
            return 45;
            break;
        case deg >= 266 && deg <= 270:
            return 46;
            break;
        case deg >= 271 && deg <= 278:
            return 47;
            break;
        case deg >= 279 && deg <= 285:
            return 48;
            break;
        case deg >= 286 && deg <= 292:
            return 49;
            break;
        case deg >= 293 && deg <= 298:
            return 50;
            break;
        case deg >= 299 && deg <= 304:
            return 51;
            break;
        case deg >= 305 && deg <= 311:
            return 52;
            break;
        case deg >= 312 && deg <= 316:
            return 53;
            break;
        case deg >= 317 && deg <= 322:
            return 54;
            break;
        case deg >= 323 && deg <= 328:
            return 55;
            break;
        case deg >= 329 && deg <= 333:
            return 56;
            break;
        case deg >= 334 && deg <= 338:
            return 57;
            break;
        case deg >= 339 && deg <= 344:
            return 58;
            break;
        case deg >= 345 && deg <= 350:
            return 59;
            break;
        case deg >= 351 && deg <= 355:
            return 60;
            break;
        case deg == 0 || deg >= 356 && deg <= 359:
            return 61;
            break;
        default:
            return -1;
    }
}


const rezepte = [
    {
        titel: "President Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "wei??er Rum",
            "Cuara??ao",
            "trockener Wermuth",
            "Grenadine"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 wei??er Rum",
            "1/3 Cura??ao",
            "1/3 trockener Wermuth",
            "1 Spritzer Grenadine",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Rob Roy Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Angostura",
            "Scotch Whiskey",
            "s????er Wermuth"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1 Spritzer Angostura",
            "2/3 Scotch Whiskey",
            "1/3 s????er Wermuth",
            "sch??tteln und durchseihen",
            "mit Frucht dekorieren."
        ]
    },
    {
        titel: "Screw Driver",
        ld: false,
        zutaten: [
            "Wodka",
            "Orangensaft",
            "Eisw??rfel"
        ],
        zubereitung: [
            "45 ccm Wodka",
            "mit Orangensaft auff??llen auf Eis",
            "mit Orangenscheibe garnieren."
        ]
    },
    {
        titel: "Scorpion",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "dunkler Rum",
            "wei??er Rum",
            "Maracuyasaft"
        ],
        zubereitung: [
            "Eis",
            "30 ccm dunkler Rum",
            "30 ccm wei??er Rum",
            "mit Maracuyasaft auff??llen."
        ]
    },
    {
        titel: "Side Car Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Triple Sec",
            "Cognac",
            "Zitronensaft"
        ],
        zubereitung: [
            "Eisw??rfel",
            "1/3 Triple Sec",
            "1/3 Cognac",
            "1/3 Zitronensaft",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Snowball Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Creme de Menthe",
            "Anisette",
            "s????e Sahne"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Creme de Menthe",
            "1/6 Anisette",
            "1/6 s????e Sahne",
            "kr??ftig sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Singapore Gin Sling",
        ld: true,
        zutaten: [
            "Zitronensaft",
            "Kirschlik??r",
            "Gin",
            "Sodawasser"
        ],
        zubereitung: [
            "1/4 Zitronen- oder Limettensaft",
            "1/4 Kirschlik??r",
            "3/4 Gin",
            "kr??ftig sch??tteln",
            "Sodawasser dazu in ein hohes Becherglas gie??en mit Eis",
            "Zitronenscheibe und Kirsche."
        ]
    },
    {
        titel: "Stinger Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Cognac",
            "wei??e Creme de Menthe"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/2 Cognac",
            "1/2 wei??e Creme de Menthe",
            "kr??ftig sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Tom Collins",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Zitronensaft",
            "Gin",
            "Sodawasser"
        ],
        zubereitung: [
            "Eis",
            "Zitronensaft",
            "45 ccm Gin",
            "mit Sodawasser auff??llen und servieren."
        ]
    },
    {
        titel: "Tropical Cocktail",
        ld: false,
        zutaten: [
            "Angostura",
            "Creme de Cacao",
            "Maraschine",
            "trockener Wermuth"
        ],
        zubereitung: [
            "1 Spritzer Angostura",
            "Orange Bitter",
            "1/3 Creme de Cacao",
            "1/3 Maraschine",
            "1/3 trockener Wermuth",
            "umr??hren und durchseihen und mit Kirsche servieren."
        ]
    },
    {
        titel: "White Lady Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Zitronensaft",
            "wei??e Creme de Menthe",
            "Cointreau"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Zitronensaft",
            "1/3 wei??e Creme de Menthe",
            "1/3 Cointreau",
            "kr??ftig sch??tteln und durchseihen."
        ]
    },
    {
        titel: "White Russian Cocktail",
        ld: false,
        zutaten: [
            "Wodka",
            "Kahlua",
            "Eisw??rfel",
            "Schlagsahne"
        ],
        zubereitung: [
            "1/2 Wodka",
            "1/2 Kahlua",
            "kr??ftig sch??tteln und direkt auf Eis servieren mit einem Tupfer Schlagsahne."
        ]
    },
    {
        titel: "Yellow Bird",
        ld: false,
        zutaten: [
            "Rum",
            "Cointreau",
            "Galliano",
            "Zitronensaft",
            "Eisw??rfel"
        ],
        zubereitung: [
            "5 ccm Rum",
            "15 ccm Cointreau",
            "5 ccm Galliano",
            "5 ccm Zitronensaft",
            "umr??hren und auf Eis servieren."
        ]
    },
    {
        titel: "Zombie Cocktail",
        ld: false,
        zutaten: [
            "Jamaika Rum",
            "wei??er Rum",
            "Triple Sec",
            "Limettensaft",
            "Orangensaft",
            "Grenadine",
            "Rum"
        ],
        zubereitung: [
            "30 ccm Jamaika Rum",
            "30 ccm wei??er Rum",
            "10 ccm Triple Sec",
            "Limettensaft",
            "Orangensaft",
            "2 Spritzer Grenadine",
            "umr??hren und lassen Sie 5 ccm starken Rum ??ber den L??ffelr??cken laufen."
        ]
    },
    {
        titel: "Zoom Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Cognac",
            "Honig",
            "s????e Sahne"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "45 ccm Cognac",
            "3 ccm Honig und s????e Sahne",
            "kr??ftig sch??tteln und in ein kleines Becherglas durchseihen."
        ]
    },
    {
        titel: "Alexander Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Creme de Cacao",
            "Cognac",
            "s????e Sahne"
        ],
        zubereitung: [
            "Eis in Mixbecher",
            "1/3 Creme de Cacao",
            "1/3 Cognac",
            "1/3 s????e Sahne",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "American Beauty",
        ld: true,
        zutaten: [
            "trockener Wermuth",
            "Cognac",
            "Grenadine",
            "Orangensaft",
            "Eisw??rfel",
            "Creme de Menthe",
            "Portwein"
        ],
        zubereitung: [
            "1/4 trockener Wermuth",
            "1/4 Cognac",
            "1/4 Grenadine",
            "1/4 Orangensaft",
            "Eisw??rfel",
            "3 ccm Creme de Menthe",
            "wenig Portwein obenauf."
        ]
    },
    {
        titel: "Americano",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Campari",
            "trockener Wermuth",
            "s????er Wermuth",
            "Sodawasser"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Campari",
            "1/3 trockener Wermuth",
            "1/3 s????er Wermuth",
            "1/2 Orangenscheibe",
            "mit Sodawasser auff??llen."
        ]
    },
    {
        titel: "Angel Dream",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Maraschino",
            "Parfait d'Amour",
            "Schlagsahne"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Maraschino",
            "1/3 Parfait d'Amour",
            "1/3 Sahne als Haube obendrauf."
        ]
    },
    {
        titel: "Bacardi Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Bacardi Rum",
            "Gin",
            "Zitronensaft",
            "Grenadine"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "2/3 Bacardi Rum",
            "1/6 Gin",
            "1/6 Limetten- oder Zitronensaft",
            "2 Spritzer Grenadine",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Between de Sheets",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Cognac",
            "Triple Sec",
            "Bacardi",
            "Zitronensaft"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Cognac",
            "1/3 Triple Sec",
            "1/3 Bacardi",
            "2 Spritzer Zitronensaft",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Black Russian Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Wodka",
            "Tia Maria"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/2 Wodka",
            "1/2 Tia Maria",
            "sch??tteln und servieren."
        ]
    },
    {
        titel: "Bloody Mary",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Worcester Sauce",
            "Tabasco",
            "Salz",
            "Pfeffer",
            "Wodka",
            "Tomatensaft",
            "Zitronensaft"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "6 Spritzer Worcester Sauce",
            "3 Spritzer Tabasco",
            "Salz",
            "Pfeffer",
            "45 ccm Wodka",
            "auff??llen mit Tomatensaft und Saft einer halben Zitrone."
        ]
    },
    {
        titel: "Brandy Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Cognac",
            "Orangenlik??r",
            "Angostura"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "45 ccm Cognac",
            "2 Spritzer Orangenlik??r",
            "2 Spritzer Angostura",
            "umr??hren und durchseihen."
        ]
    },
    {
        titel: "Brandy Fix",
        ld: false,
        zutaten: [
            "Zucker",
            "Zitronensaft",
            "Kischlik??r",
            "Cognac",
            "Eisw??rfel"
        ],
        zubereitung: [
            "3ccm Zuckerl??sung",
            "Saft einer halben Zitrone",
            "1/3 Kirschlik??r",
            "2/3 Cognac",
            "mit gesto??enem Eis auff??llen",
            "vorsichtig umr??hren."
        ]
    },
    {
        titel: "Brandy Sour",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Zucker",
            "Zitronensaft",
            "Cognac"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "3 ccm Zuckerl??sung",
            "Saft einer Zitrone",
            "45 ccm Cognac",
            "sch??tteln und in ein Weinglas durchseihen",
            "Kirsche dazu."
        ]
    },
    {
        titel: "Bronx Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Gin",
            "s????er Wermuth",
            "Orangensaft"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Gin",
            "1/3 s????er Wermuth",
            "Saft einer Orange",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Cafe de Paris Cocktail",
        ld: false,
        zutaten: [
            "Eiwei??",
            "Anisette",
            "Gin",
            "Schlagsahne"
        ],
        zubereitung: [
            "1 Eiwei??",
            "3 Spritzer Anisette",
            "45 ccm Gin",
            "3 ccm Sahne",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Champagner Cocktail",
        ld: false,
        zutaten: [
            "Angostura",
            "Zucker",
            "Cognac",
            "Eisw??rfel",
            "Champagner"
        ],
        zubereitung: [
            "In ein Weinglas: 6 ccm Angostura Zuckerl??sung",
            "5 Spritzer Cognac",
            "Eis",
            "mit Champanger auff??llen und mit Zitronenschale dekorieren."
        ]
    },
    {
        titel: "Clover Club Cocktail",
        ld: false,
        zutaten: [
            "Eiwei??",
            "Limettensaft",
            "Grenadine",
            "Gin",
            "s????er Wermuth"
        ],
        zubereitung: [
            "1 Eiwei??",
            "Saft einer kleinen Limette",
            "3 ccm Grenadine",
            "1/3 Gin",
            "1/6 s????er Wermuth",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Daquiri Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Bacardi Rum",
            "Limettensaft",
            "Zucker"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "3/4 Bacardi Rum",
            "1/4 Limettensaft",
            "Zucker",
            "kr??ftig sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Derby Cocktail",
        ld: false,
        zutaten: [
            "Bitterpfirsich",
            "Minze",
            "Gin"
        ],
        zubereitung: [
            "2 Spritzer Bitterpfirsich",
            "1 Zweig Minze",
            "45 ccm Gin",
            "umr??hren und in Glas seihen",
            "mit Olive servieren."
        ]
    },
    {
        titel: "Diki Diki Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Calvados",
            "schwedischer Punsch",
            "Pampelmusensaft"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "2/3 Calvados",
            "1/6 schwedischer Punsch",
            "1/6 Pampelmusensaft",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Dream Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Cura??ao",
            "Cognac",
            "Anis"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Cura??ao",
            "2/3 Cognac",
            "2 Spritzer Anis",
            "umr??hren und durchseihen."
        ]
    },
    {
        titel: "Dubonnet Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Dubonnet",
            "Gin"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "2/3 Dubonnet",
            "1/3 Gin",
            "umr??hren und durchseihen."
        ]
    },
    {
        titel: "Gibson",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "trockener Wermuth",
            "trockener Gin"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/6 trockerner Wermuth",
            "5/60 trockener Gin",
            "umr??hren und durchseihen",
            "eine Perlzwiebel dazu."
        ]
    },
    {
        titel: "Gimlet",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Gin",
            "Limettensaft Cordial"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "2/3 Gin",
            "1/3 Limettensaft Cordial",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Gin Fizz",
        ld: true,
        zutaten: [
            "Zucker",
            "Zitronensaft",
            "Gin",
            "Sodawasser",
            "Eisw??rfel"
        ],
        zubereitung: [
            "3 ccm Zuckerl??sung",
            "Zitronensaft",
            "45 ccm Gin",
            "kr??ftig sch??tteln",
            "Sodawasser dazu und Eis."
        ]
    },
    {
        titel: "Gin Rickey",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Gin",
            "Zitrone"
        ],
        zubereitung: [
            "Eis",
            "45 ccm Gin",
            "halbe Zitrone auspressen und Fruchtfleisch ins Glas."
        ]
    },
    {
        titel: "Gin Sling",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Zitronensaft",
            "Gin",
            "Grenadine"
        ],
        zubereitung: [
            "Eis",
            "Saft einer Zitrone",
            "45 ccm Gin",
            "3 ccm Grenadine",
            "15 ccm pures Wasser",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Golden Cadillac",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Galliano Lik??r",
            "wei??e Creme de Cacao",
            "s????e Sahne"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Galliano Lik??r",
            "1/3 wei??e Creme de Cacao",
            "1/3 s????e Sahne",
            "kr??ftig sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Grasshopper",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "wei??e Creme de Cacao",
            "gr??ne Creme de Menthe",
            "s????e Sahne"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 wei??e Creme de Cacao",
            "1/3 gr??ne Creme de Menthe",
            "1/3 s????e Sahne",
            "kr??ftig sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Golden Gate",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "trockener Gin",
            "Vanilleeis",
            "Orangensaft"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/4 trockener Gin",
            "1/4 Vanilleeis",
            "5 ccm gepresster Orangensaft",
            "sch??tteln."
        ]

    },
    {
        titel: "Harvey Wallbanger",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Wodka",
            "Orangensaft",
            "Galliano"
        ],
        zubereitung: [
            "Eis",
            "45 ccm Wodka mit Orangensaft auff??llen",
            "20 ccm Galliano obenauf."
        ]
    },
    {
        titel: "Irish Coffee",
        ld: false,
        zutaten: [
            "Zucker",
            "irischer Whiskey",
            "Kaffee",
            "Schlagsahne"
        ],
        zubereitung: [
            "In ein warmes Glas: Zucker nach Geschmack",
            "35 ccm irischer Whiskey",
            "mit Kaffee auff??llen",
            "Schlagsahne obenauf ??ber L??ffelr??cken laufen."
        ]
    },
    {
        titel: "Jack Rose Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Calvados",
            "Zitronensaft",
            "Grenadine"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "45 ccm Calvados",
            "Saft einer Zitrone",
            "4 Spritzer Grenadine",
            "sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Kir",
        ld: false,
        zutaten: [
            "Creme de Cassis",
            "trockner Wei??wein"
        ],
        zubereitung: [
            "10 ccm Creme de Cassis",
            "120 ccm trockener Wei??wein."
        ]
    },
    {
        titel: "Mai Tai Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Orangencuracao",
            "Zucker",
            "Bacardi Rum",
            "dunkler Rum",
            "Zitronensaft",
            "Limettensaft"
        ],
        zubereitung: [
            "Eisw??rfel",
            "3 Tropfen Orangencuracao",
            "5ccm Zuckerl??sung",
            "30 ccm Bacardi Rum",
            "30 ccm dunkler Rum",
            "Saft 1/2 Zitrone und 1/2 Limette",
            "kr??ftig umr??hren und mit einer Frucht verziehren."
        ]
    },
    {
        titel: "Manhattan Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Rye Whiskey",
            "s????er Wermuth",
            "Angostura"
        ],
        zubereitung: [
            "Eisw??rfel",
            "3/4 Rye Whyskey",
            "1/4 s????er Wermuth",
            "2 Tropfen Angostura",
            "umr??hren und mit Kirsche servieren."
        ]
    },
    {
        titel: "Martini Cocktail",
        ld: false,
        zutaten: [
            "Gin",
            "trockener Wermuth"
        ],
        zubereitung: [
            "9/10 Gin",
            "1/10 trockener Wermuth bzw. vorzugsweise waschen Sie die Eisw??rfel in trockenem Wermuth und nehmen Sie 10/10 Gin",
            "umr??hren."
        ]
    },
    {
        titel: "Marganita Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Tequila",
            "Zitronensaft",
            "Cointreau",
            "Salz"
        ],
        zubereitung: [
            "Eisw??rfel",
            "1/3 Tequila",
            "1/3 Zitronensaft",
            "1/3 Cointreau",
            "sch??tteln und in ein Glas mit Salzrand gie??en."
        ]
    },
    {
        titel: "Mayfair Cocktail",
        ld: false,
        zutaten: [
            "Gin",
            "Orangensaft",
            "Aprikosensirup",
            "Nelkensirup",
            "Eisw??rfel"
        ],
        zubereitung: [
            "1/2 Gin",
            "1/2 Orangensaft",
            "3 Spritzer Aprikosensirup",
            "1 Spritzer Nelkensirup zusammen mit Eis im Shaker sch??tteln und durchseihen."
        ]
    },
    {
        titel: "Millionaire Cocktail",
        ld: false,
        zutaten: [
            "Eiwei??",
            "Rye Whiskey",
            "Cura??ao orange",
            "Grenadine",
            "Eisw??rfel"
        ],
        zubereitung: [
            "1 Eiwei??",
            "45 ccm Rye Whiskey",
            "2 Spritzer Cura??ao orange",
            "4 Spritzer Grenadine zusammen mit Eis sch??tteln."
        ]
    },
    {
        titel: "Moulin Rouge",
        ld: false,
        zutaten: [
            "Orangengin",
            "Aprikosenlik??r",
            "Grenadine",
            "Eisw??rfel"
        ],
        zubereitung: [
            "1/2 Orangengin",
            "1/2 Aprikosenlik??r",
            "2 Spritzer Grenadine zusammen mit Eis umr??hren und servieren."
        ]
    },
    {
        titel: "Old Fashioned Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Zucker",
            "Angostura",
            "Bourbon Whiskey",
            "Zitrone"
        ],
        zubereitung: [
            "Gesto??enes Eis",
            "Zuckerl??sung mit Angostura",
            "45 ccm Bourbon Whiskey",
            "Zitronenschale",
            "umr??hren."
        ]
    },
    {
        titel: "Old Pal Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Canadian Whiskey",
            "trockener Wermuth",
            "Campari"
        ],
        zubereitung: [
            "Eisw??rfel",
            "1/3 Canadian Whiskey",
            "1/3 trockener Wermuth",
            "1/3 Campari umr??hren."
        ]
    },
    {
        titel: "Olympic Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Cognac",
            "Cura??ao",
            "Orangensaft"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "1/3 Cognac",
            "1/3 Cura??ao",
            "1/3 Orangensaft",
            "kr??ftig sch??tteln und servieren."
        ]
    },
    {
        titel: "Paradise Cocktail",
        ld: false,
        zutaten: [
            "Eisw??rfel",
            "Orangensaft",
            "Gin"
        ],
        zubereitung: [
            "Eisw??rfel in Mixbecher",
            "Saft 1 Orange",
            "45 ccm Gin",
            "kr??ftig sch??tteln und in Becherglas servieren."
        ]
    },
    {
        titel: "Perfect Cocktail",
        ld: false,
        zutaten: [
            "Gin",
            "trockener Wermuth",
            "s????er Wermuth",
            "Eisw??rfel"
        ],
        zubereitung: [
            "1/3 Gin",
            "1/3 trockener Wermuth",
            "1/3 s????er Wermuth",
            "Eisw??rfel",
            "umr??hren und servieren."
        ]
    },
    {
        titel: "Pina Colada Cocktail",
        ld: false,
        zutaten: [
            "Jamaica Rum",
            "Ananassaft",
            "Kokosnusslik??r",
            "Eisw??rfel"
        ],
        zubereitung: [
            "45 ccm Jamaica Rum",
            "2/3 Ananassaft",
            "1/3 Kokosunsslik??r",
            "kr??ftig sch??tteln",
            "mit Eis und Fr??chten dekorieren."
        ]
    },
    {
        titel: "Pink Gin Cocktail",
        ld: false,
        zutaten: [
            "Gin",
            "Angostura",
            "Eisw??rfel"
        ],
        zubereitung: [
            "45 ccm Gin",
            "Wasser nach Geschmack",
            "3 ccm Angostura",
            "kein Mixbecher",
            "Eis."
        ]
    },
    {
        titel: "Planter's Punch",
        ld: true,
        zutaten: [
            "Eisw??rfel",
            "Zitronensaft",
            "Orangensaft",
            "Grenadine",
            "wei??er Rum",
            "dunkler Rum"
        ],
        zubereitung: [
            "Eis",
            "Saft einer Zitrone und 1 Orange",
            "1 Spritzer Grenadine",
            "30 ccm wei??er Rum",
            "30 ccm dunkler Rum",
            "umr??hren und mit Frucht dekorieren."
        ]
    }
]