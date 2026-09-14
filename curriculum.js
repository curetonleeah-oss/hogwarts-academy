const curriculum = {

    1: {
        name: "First Year",

        core: [
            {
                id: "charms",
                name: "Charms",
                professor: "Professor Flitwick"
            },
            {
                id: "transfiguration",
                name: "Transfiguration",
                professor: "Professor McGonagall"
            },
            {
                id: "potions",
                name: "Potions",
                professor: "Professor Snape"
            },
            {
                id: "herbology",
                name: "Herbology",
                professor: "Professor Sprout"
            },
            {
                id: "defense",
                name: "Defense Against the Dark Arts",
                professor: "Professor Quirrell"
            },
            {
                id: "astronomy",
                name: "Astronomy",
                professor: "Professor Sinistra"
            },
            {
                id: "history",
                name: "History of Magic",
                professor: "Professor Binns"
            }
        ],

        electives: [],

        special: [
            {
                id: "flying",
                name: "Flying",
                professor: "Madam Hooch"
            }
        ],

        exams: [
            "End-of-Year Examinations"
        ]
    },

    2: {
        name: "Second Year",

        core: [
            {
                id: "charms",
                name: "Charms",
                professor: "Professor Flitwick"
            },
            {
                id: "transfiguration",
                name: "Transfiguration",
                professor: "Professor McGonagall"
            },
            {
                id: "potions",
                name: "Potions",
                professor: "Professor Snape"
            },
            {
                id: "herbology",
                name: "Herbology",
                professor: "Professor Sprout"
            },
            {
                id: "defense",
                name: "Defense Against the Dark Arts",
                professor: "Professor Lockhart"
            },
            {
                id: "astronomy",
                name: "Astronomy",
                professor: "Professor Sinistra"
            },
            {
                id: "history",
                name: "History of Magic",
                professor: "Professor Binns"
            }
        ],

        electives: [],

        special: [],

        exams: [
            "End-of-Year Examinations"
        ],

        electiveSelection: {
            available: [
                "Care of Magical Creatures",
                "Divination",
                "Ancient Runes",
                "Arithmancy",
                "Muggle Studies"
            ],
            minimum: 2
        }
    },

    3: {
        name: "Third Year",

        core: [
            {
                id: "charms",
                name: "Charms",
                professor: "Professor Flitwick"
            },
            {
                id: "transfiguration",
                name: "Transfiguration",
                professor: "Professor McGonagall"
            },
            {
                id: "potions",
                name: "Potions",
                professor: "Professor Snape"
            },
            {
                id: "herbology",
                name: "Herbology",
                professor: "Professor Sprout"
            },
            {
                id: "defense",
                name: "Defense Against the Dark Arts",
                professor: "Professor Lupin"
            },
            {
                id: "astronomy",
                name: "Astronomy",
                professor: "Professor Sinistra"
            },
            {
                id: "history",
                name: "History of Magic",
                professor: "Professor Binns"
            }
        ],

        electives: [],

        special: [],

        exams: [
            "End-of-Year Examinations"
        ]
    },

    4: {
        name: "Fourth Year",

        core: [
            {
                id: "charms",
                name: "Charms",
                professor: "Professor Flitwick"
            },
            {
                id: "transfiguration",
                name: "Transfiguration",
                professor: "Professor McGonagall"
            },
            {
                id: "potions",
                name: "Potions",
                professor: "Professor Snape"
            },
            {
                id: "herbology",
                name: "Herbology",
                professor: "Professor Sprout"
            },
            {
                id: "defense",
                name: "Defense Against the Dark Arts",
                professor: "Professor Moody"
            },
            {
                id: "astronomy",
                name: "Astronomy",
                professor: "Professor Sinistra"
            },
            {
                id: "history",
                name: "History of Magic",
                professor: "Professor Binns"
            }
        ],

        electives: [],

        special: [],

        exams: [
            "End-of-Year Examinations"
        ]
    },

    5: {
        name: "Fifth Year",

        core: [
            {
                id: "charms",
                name: "Charms",
                professor: "Professor Flitwick"
            },
            {
                id: "transfiguration",
                name: "Transfiguration",
                professor: "Professor McGonagall"
            },
            {
                id: "potions",
                name: "Potions",
                professor: "Professor Snape"
            },
            {
                id: "herbology",
                name: "Herbology",
                professor: "Professor Sprout"
            },
            {
                id: "defense",
                name: "Defense Against the Dark Arts",
                professor: "Professor Umbridge"
            },
            {
                id: "astronomy",
                name: "Astronomy",
                professor: "Professor Sinistra"
            },
            {
                id: "history",
                name: "History of Magic",
                professor: "Professor Binns"
            }
        ],

        electives: [],

        special: [],

        exams: [
            "O.W.L. Examinations"
        ]
    },

    6: {
        name: "Sixth Year",

        core: [],

        electives: [],

        special: [
            {
                id: "apparition",
                name: "Apparition",
                professor: "Apparition Instructor"
            }
        ],

        exams: [
            "End-of-Year Examinations"
        ],

        advancedCourses: true,

        optionalSpecialSubjects: [
            "Alchemy"
        ]
    },

    7: {
        name: "Seventh Year",

        core: [],

        electives: [],

        special: [],

        exams: [
            "N.E.W.T. Examinations"
        ],

        advancedCourses: true
    }
};


function getCurriculumForYear(year) {
    return curriculum[year] || curriculum[1];
}
