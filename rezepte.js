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
            "Eiswürfel",
            "weißer Rum",
            "Cuaraçao",
            "trockener Wermuth",
            "Grenadine"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 weißer Rum",
            "1/3 Curaçao",
            "1/3 trockener Wermuth",
            "1 Spritzer Grenadine",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Rob Roy Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Angostura",
            "Scotch Whiskey",
            "süßer Wermuth"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1 Spritzer Angostura",
            "2/3 Scotch Whiskey",
            "1/3 süßer Wermuth",
            "schütteln und durchseihen",
            "mit Frucht dekorieren."
        ]
    },
    {
        titel: "Screw Driver",
        ld: false,
        zutaten: [
            "Wodka",
            "Orangensaft",
            "Eiswürfel"
        ],
        zubereitung: [
            "45 ccm Wodka",
            "mit Orangensaft auffüllen auf Eis",
            "mit Orangenscheibe garnieren."
        ]
    },
    {
        titel: "Scorpion",
        ld: true,
        zutaten: [
            "Eiswürfel",
            "dunkler Rum",
            "weißer Rum",
            "Maracuyasaft"
        ],
        zubereitung: [
            "Eis",
            "30 ccm dunkler Rum",
            "30 ccm weißer Rum",
            "mit Maracuyasaft auffüllen."
        ]
    },
    {
        titel: "Side Car Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Triple Sec",
            "Cognac",
            "Zitronensaft"
        ],
        zubereitung: [
            "Eiswürfel",
            "1/3 Triple Sec",
            "1/3 Cognac",
            "1/3 Zitronensaft",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Snowball Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Creme de Menthe",
            "Anisette",
            "süße Sahne"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Creme de Menthe",
            "1/6 Anisette",
            "1/6 süße Sahne",
            "kräftig schütteln und durchseihen."
        ]
    },
    {
        titel: "Singapore Gin Sling",
        ld: true,
        zutaten: [
            "Zitronensaft",
            "Kirschlikör",
            "Gin",
            "Sodawasser"
        ],
        zubereitung: [
            "1/4 Zitronen- oder Limettensaft",
            "1/4 Kirschlikör",
            "3/4 Gin",
            "kräftig schütteln",
            "Sodawasser dazu in ein hohes Becherglas gießen mit Eis",
            "Zitronenscheibe und Kirsche."
        ]
    },
    {
        titel: "Stinger Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Cognac",
            "weiße Creme de Menthe"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/2 Cognac",
            "1/2 weiße Creme de Menthe",
            "kräftig schütteln und durchseihen."
        ]
    },
    {
        titel: "Tom Collins",
        ld: true,
        zutaten: [
            "Eiswürfel",
            "Zitronensaft",
            "Gin",
            "Sodawasser"
        ],
        zubereitung: [
            "Eis",
            "Zitronensaft",
            "45 ccm Gin",
            "mit Sodawasser auffüllen und servieren."
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
            "umrühren und durchseihen und mit Kirsche servieren."
        ]
    },
    {
        titel: "White Lady Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Zitronensaft",
            "weiße Creme de Menthe",
            "Cointreau"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Zitronensaft",
            "1/3 weiße Creme de Menthe",
            "1/3 Cointreau",
            "kräftig schütteln und durchseihen."
        ]
    },
    {
        titel: "White Russian Cocktail",
        ld: false,
        zutaten: [
            "Wodka",
            "Kahlua",
            "Eiswürfel",
            "Schlagsahne"
        ],
        zubereitung: [
            "1/2 Wodka",
            "1/2 Kahlua",
            "kräftig schütteln und direkt auf Eis servieren mit einem Tupfer Schlagsahne."
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
            "Eiswürfel"
        ],
        zubereitung: [
            "5 ccm Rum",
            "15 ccm Cointreau",
            "5 ccm Galliano",
            "5 ccm Zitronensaft",
            "umrühren und auf Eis servieren."
        ]
    },
    {
        titel: "Zombie Cocktail",
        ld: false,
        zutaten: [
            "Jamaika Rum",
            "weißer Rum",
            "Triple Sec",
            "Limettensaft",
            "Orangensaft",
            "Grenadine",
            "Rum"
        ],
        zubereitung: [
            "30 ccm Jamaika Rum",
            "30 ccm weißer Rum",
            "10 ccm Triple Sec",
            "Limettensaft",
            "Orangensaft",
            "2 Spritzer Grenadine",
            "umrühren und lassen Sie 5 ccm starken Rum über den Löffelrücken laufen."
        ]
    },
    {
        titel: "Zoom Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Cognac",
            "Honig",
            "süße Sahne"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "45 ccm Cognac",
            "3 ccm Honig und süße Sahne",
            "kräftig schütteln und in ein kleines Becherglas durchseihen."
        ]
    },
    {
        titel: "Alexander Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Creme de Cacao",
            "Cognac",
            "süße Sahne"
        ],
        zubereitung: [
            "Eis in Mixbecher",
            "1/3 Creme de Cacao",
            "1/3 Cognac",
            "1/3 süße Sahne",
            "schütteln und durchseihen."
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
            "Eiswürfel",
            "Creme de Menthe",
            "Portwein"
        ],
        zubereitung: [
            "1/4 trockener Wermuth",
            "1/4 Cognac",
            "1/4 Grenadine",
            "1/4 Orangensaft",
            "Eiswürfel",
            "3 ccm Creme de Menthe",
            "wenig Portwein obenauf."
        ]
    },
    {
        titel: "Americano",
        ld: true,
        zutaten: [
            "Eiswürfel",
            "Campari",
            "trockener Wermuth",
            "süßer Wermuth",
            "Sodawasser"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Campari",
            "1/3 trockener Wermuth",
            "1/3 süßer Wermuth",
            "1/2 Orangenscheibe",
            "mit Sodawasser auffüllen."
        ]
    },
    {
        titel: "Angel Dream",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Maraschino",
            "Parfait d'Amour",
            "Schlagsahne"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Maraschino",
            "1/3 Parfait d'Amour",
            "1/3 Sahne als Haube obendrauf."
        ]
    },
    {
        titel: "Bacardi Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Bacardi Rum",
            "Gin",
            "Zitronensaft",
            "Grenadine"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "2/3 Bacardi Rum",
            "1/6 Gin",
            "1/6 Limetten- oder Zitronensaft",
            "2 Spritzer Grenadine",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Between de Sheets",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Cognac",
            "Triple Sec",
            "Bacardi",
            "Zitronensaft"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Cognac",
            "1/3 Triple Sec",
            "1/3 Bacardi",
            "2 Spritzer Zitronensaft",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Black Russian Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Wodka",
            "Tia Maria"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/2 Wodka",
            "1/2 Tia Maria",
            "schütteln und servieren."
        ]
    },
    {
        titel: "Bloody Mary",
        ld: true,
        zutaten: [
            "Eiswürfel",
            "Worcester Sauce",
            "Tabasco",
            "Salz",
            "Pfeffer",
            "Wodka",
            "Tomatensaft",
            "Zitronensaft"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "6 Spritzer Worcester Sauce",
            "3 Spritzer Tabasco",
            "Salz",
            "Pfeffer",
            "45 ccm Wodka",
            "auffüllen mit Tomatensaft und Saft einer halben Zitrone."
        ]
    },
    {
        titel: "Brandy Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Cognac",
            "Orangenlikör",
            "Angostura"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "45 ccm Cognac",
            "2 Spritzer Orangenlikör",
            "2 Spritzer Angostura",
            "umrühren und durchseihen."
        ]
    },
    {
        titel: "Brandy Fix",
        ld: false,
        zutaten: [
            "Zucker",
            "Zitronensaft",
            "Kischlikör",
            "Cognac",
            "Eiswürfel"
        ],
        zubereitung: [
            "3ccm Zuckerlösung",
            "Saft einer halben Zitrone",
            "1/3 Kirschlikör",
            "2/3 Cognac",
            "mit gestoßenem Eis auffüllen",
            "vorsichtig umrühren."
        ]
    },
    {
        titel: "Brandy Sour",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Zucker",
            "Zitronensaft",
            "Cognac"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "3 ccm Zuckerlösung",
            "Saft einer Zitrone",
            "45 ccm Cognac",
            "schütteln und in ein Weinglas durchseihen",
            "Kirsche dazu."
        ]
    },
    {
        titel: "Bronx Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Gin",
            "süßer Wermuth",
            "Orangensaft"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Gin",
            "1/3 süßer Wermuth",
            "Saft einer Orange",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Cafe de Paris Cocktail",
        ld: false,
        zutaten: [
            "Eiweiß",
            "Anisette",
            "Gin",
            "Schlagsahne"
        ],
        zubereitung: [
            "1 Eiweiß",
            "3 Spritzer Anisette",
            "45 ccm Gin",
            "3 ccm Sahne",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Champagner Cocktail",
        ld: false,
        zutaten: [
            "Angostura",
            "Zucker",
            "Cognac",
            "Eiswürfel",
            "Champagner"
        ],
        zubereitung: [
            "In ein Weinglas: 6 ccm Angostura Zuckerlösung",
            "5 Spritzer Cognac",
            "Eis",
            "mit Champanger auffüllen und mit Zitronenschale dekorieren."
        ]
    },
    {
        titel: "Clover Club Cocktail",
        ld: false,
        zutaten: [
            "Eiweiß",
            "Limettensaft",
            "Grenadine",
            "Gin",
            "süßer Wermuth"
        ],
        zubereitung: [
            "1 Eiweiß",
            "Saft einer kleinen Limette",
            "3 ccm Grenadine",
            "1/3 Gin",
            "1/6 süßer Wermuth",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Daquiri Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Bacardi Rum",
            "Limettensaft",
            "Zucker"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "3/4 Bacardi Rum",
            "1/4 Limettensaft",
            "Zucker",
            "kräftig schütteln und durchseihen."
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
            "umrühren und in Glas seihen",
            "mit Olive servieren."
        ]
    },
    {
        titel: "Diki Diki Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Calvados",
            "schwedischer Punsch",
            "Pampelmusensaft"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "2/3 Calvados",
            "1/6 schwedischer Punsch",
            "1/6 Pampelmusensaft",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Dream Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Curaçao",
            "Cognac",
            "Anis"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Curaçao",
            "2/3 Cognac",
            "2 Spritzer Anis",
            "umrühren und durchseihen."
        ]
    },
    {
        titel: "Dubonnet Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Dubonnet",
            "Gin"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "2/3 Dubonnet",
            "1/3 Gin",
            "umrühren und durchseihen."
        ]
    },
    {
        titel: "Gibson",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "trockener Wermuth",
            "trockener Gin"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/6 trockerner Wermuth",
            "5/60 trockener Gin",
            "umrühren und durchseihen",
            "eine Perlzwiebel dazu."
        ]
    },
    {
        titel: "Gimlet",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Gin",
            "Limettensaft Cordial"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "2/3 Gin",
            "1/3 Limettensaft Cordial",
            "schütteln und durchseihen."
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
            "Eiswürfel"
        ],
        zubereitung: [
            "3 ccm Zuckerlösung",
            "Zitronensaft",
            "45 ccm Gin",
            "kräftig schütteln",
            "Sodawasser dazu und Eis."
        ]
    },
    {
        titel: "Gin Rickey",
        ld: true,
        zutaten: [
            "Eiswürfel",
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
            "Eiswürfel",
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
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Golden Cadillac",
        ld: true,
        zutaten: [
            "Eiswürfel",
            "Galliano Likör",
            "weiße Creme de Cacao",
            "süße Sahne"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Galliano Likör",
            "1/3 weiße Creme de Cacao",
            "1/3 süße Sahne",
            "kräftig schütteln und durchseihen."
        ]
    },
    {
        titel: "Grasshopper",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "weiße Creme de Cacao",
            "grüne Creme de Menthe",
            "süße Sahne"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 weiße Creme de Cacao",
            "1/3 grüne Creme de Menthe",
            "1/3 süße Sahne",
            "kräftig schütteln und durchseihen."
        ]
    },
    {
        titel: "Golden Gate",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "trockener Gin",
            "Vanilleeis",
            "Orangensaft"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/4 trockener Gin",
            "1/4 Vanilleeis",
            "5 ccm gepresster Orangensaft",
            "schütteln."
        ]

    },
    {
        titel: "Harvey Wallbanger",
        ld: true,
        zutaten: [
            "Eiswürfel",
            "Wodka",
            "Orangensaft",
            "Galliano"
        ],
        zubereitung: [
            "Eis",
            "45 ccm Wodka mit Orangensaft auffüllen",
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
            "mit Kaffee auffüllen",
            "Schlagsahne obenauf über Löffelrücken laufen."
        ]
    },
    {
        titel: "Jack Rose Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Calvados",
            "Zitronensaft",
            "Grenadine"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "45 ccm Calvados",
            "Saft einer Zitrone",
            "4 Spritzer Grenadine",
            "schütteln und durchseihen."
        ]
    },
    {
        titel: "Kir",
        ld: false,
        zutaten: [
            "Creme de Cassis",
            "trockner Weißwein"
        ],
        zubereitung: [
            "10 ccm Creme de Cassis",
            "120 ccm trockener Weißwein."
        ]
    },
    {
        titel: "Mai Tai Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Orangencuracao",
            "Zucker",
            "Bacardi Rum",
            "dunkler Rum",
            "Zitronensaft",
            "Limettensaft"
        ],
        zubereitung: [
            "Eiswürfel",
            "3 Tropfen Orangencuracao",
            "5ccm Zuckerlösung",
            "30 ccm Bacardi Rum",
            "30 ccm dunkler Rum",
            "Saft 1/2 Zitrone und 1/2 Limette",
            "kräftig umrühren und mit einer Frucht verziehren."
        ]
    },
    {
        titel: "Manhattan Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Rye Whiskey",
            "süßer Wermuth",
            "Angostura"
        ],
        zubereitung: [
            "Eiswürfel",
            "3/4 Rye Whyskey",
            "1/4 süßer Wermuth",
            "2 Tropfen Angostura",
            "umrühren und mit Kirsche servieren."
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
            "1/10 trockener Wermuth bzw. vorzugsweise waschen Sie die Eiswürfel in trockenem Wermuth und nehmen Sie 10/10 Gin",
            "umrühren."
        ]
    },
    {
        titel: "Marganita Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Tequila",
            "Zitronensaft",
            "Cointreau",
            "Salz"
        ],
        zubereitung: [
            "Eiswürfel",
            "1/3 Tequila",
            "1/3 Zitronensaft",
            "1/3 Cointreau",
            "schütteln und in ein Glas mit Salzrand gießen."
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
            "Eiswürfel"
        ],
        zubereitung: [
            "1/2 Gin",
            "1/2 Orangensaft",
            "3 Spritzer Aprikosensirup",
            "1 Spritzer Nelkensirup zusammen mit Eis im Shaker schütteln und durchseihen."
        ]
    },
    {
        titel: "Millionaire Cocktail",
        ld: false,
        zutaten: [
            "Eiweiß",
            "Rye Whiskey",
            "Curaçao orange",
            "Grenadine",
            "Eiswürfel"
        ],
        zubereitung: [
            "1 Eiweiß",
            "45 ccm Rye Whiskey",
            "2 Spritzer Curaçao orange",
            "4 Spritzer Grenadine zusammen mit Eis schütteln."
        ]
    },
    {
        titel: "Moulin Rouge",
        ld: false,
        zutaten: [
            "Orangengin",
            "Aprikosenlikör",
            "Grenadine",
            "Eiswürfel"
        ],
        zubereitung: [
            "1/2 Orangengin",
            "1/2 Aprikosenlikör",
            "2 Spritzer Grenadine zusammen mit Eis umrühren und servieren."
        ]
    },
    {
        titel: "Old Fashioned Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Zucker",
            "Angostura",
            "Bourbon Whiskey",
            "Zitrone"
        ],
        zubereitung: [
            "Gestoßenes Eis",
            "Zuckerlösung mit Angostura",
            "45 ccm Bourbon Whiskey",
            "Zitronenschale",
            "umrühren."
        ]
    },
    {
        titel: "Old Pal Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Canadian Whiskey",
            "trockener Wermuth",
            "Campari"
        ],
        zubereitung: [
            "Eiswürfel",
            "1/3 Canadian Whiskey",
            "1/3 trockener Wermuth",
            "1/3 Campari umrühren."
        ]
    },
    {
        titel: "Olympic Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Cognac",
            "Curaçao",
            "Orangensaft"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "1/3 Cognac",
            "1/3 Curaçao",
            "1/3 Orangensaft",
            "kräftig schütteln und servieren."
        ]
    },
    {
        titel: "Paradise Cocktail",
        ld: false,
        zutaten: [
            "Eiswürfel",
            "Orangensaft",
            "Gin"
        ],
        zubereitung: [
            "Eiswürfel in Mixbecher",
            "Saft 1 Orange",
            "45 ccm Gin",
            "kräftig schütteln und in Becherglas servieren."
        ]
    },
    {
        titel: "Perfect Cocktail",
        ld: false,
        zutaten: [
            "Gin",
            "trockener Wermuth",
            "süßer Wermuth",
            "Eiswürfel"
        ],
        zubereitung: [
            "1/3 Gin",
            "1/3 trockener Wermuth",
            "1/3 süßer Wermuth",
            "Eiswürfel",
            "umrühren und servieren."
        ]
    },
    {
        titel: "Pina Colada Cocktail",
        ld: false,
        zutaten: [
            "Jamaica Rum",
            "Ananassaft",
            "Kokosnusslikör",
            "Eiswürfel"
        ],
        zubereitung: [
            "45 ccm Jamaica Rum",
            "2/3 Ananassaft",
            "1/3 Kokosunsslikör",
            "kräftig schütteln",
            "mit Eis und Früchten dekorieren."
        ]
    },
    {
        titel: "Pink Gin Cocktail",
        ld: false,
        zutaten: [
            "Gin",
            "Angostura",
            "Eiswürfel"
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
            "Eiswürfel",
            "Zitronensaft",
            "Orangensaft",
            "Grenadine",
            "weißer Rum",
            "dunkler Rum"
        ],
        zubereitung: [
            "Eis",
            "Saft einer Zitrone und 1 Orange",
            "1 Spritzer Grenadine",
            "30 ccm weißer Rum",
            "30 ccm dunkler Rum",
            "umrühren und mit Frucht dekorieren."
        ]
    }
]