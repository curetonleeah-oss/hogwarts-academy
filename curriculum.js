const curriculum = {
    1: {
        name: "First Year",
        core: [
            "Charms",
            "Transfiguration",
            "Potions",
            "Herbology",
            "Defense Against the Dark Arts",
            "Astronomy",
            "History of Magic"
        ],
        electives: [],
        exams: []
    },

    2: {
        name: "Second Year",
        core: [
            "Charms",
            "Transfiguration",
            "Potions",
            "Herbology",
            "Defense Against the Dark Arts",
            "Astronomy",
            "History of Magic"
        ],
        electives: [],
        exams: []
    },

    3: {
        name: "Third Year",
        core: [
            "Charms",
            "Transfiguration",
            "Potions",
            "Herbology",
            "Defense Against the Dark Arts",
            "Astronomy",
            "History of Magic"
        ],
        electives: [
            "Care of Magical Creatures",
            "Divination",
            "Ancient Runes",
            "Arithmancy",
            "Muggle Studies"
        ],
        exams: []
    },

    4: {
        name: "Fourth Year",
        core: [
            "Charms",
            "Transfiguration",
            "Potions",
            "Herbology",
            "Defense Against the Dark Arts",
            "Astronomy",
            "History of Magic"
        ],
        electives: [
            "Care of Magical Creatures",
            "Divination",
            "Ancient Runes",
            "Arithmancy",
            "Muggle Studies"
        ],
        exams: []
    },

    5: {
        name: "Fifth Year",
        core: [
            "Charms",
            "Transfiguration",
            "Potions",
            "Herbology",
            "Defense Against the Dark Arts",
            "Astronomy",
            "History of Magic"
        ],
        electives: [
            "Care of Magical Creatures",
            "Divination",
            "Ancient Runes",
            "Arithmancy",
            "Muggle Studies"
        ],
        exams: [
            "O.W.L. Examinations"
        ]
    },

    6: {
        name: "Sixth Year",
        core: [],
        electives: [],
        exams: []
    },

    7: {
        name: "Seventh Year",
        core: [],
        electives: [],
        exams: [
            "N.E.W.T. Examinations"
        ]
    }
};
function getCurriculumForYear(year) {
    return curriculum[year] || curriculum[1];
}
