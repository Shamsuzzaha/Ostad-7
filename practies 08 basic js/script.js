let data = [
    {
        "q": "What is the capital city of Bangladesh?",
        "o": ["Chittagong", "Dhaka", "Khulna", "Sylhet"],
        "a": 1
    },
    {
        "q": "What is the national language of Bangladesh?",
        "o": ["Bengali", "Hindi", "Urdu", "English"],
        "a": 0
    },
    {
        "q": "Which river is the longest in Bangladesh?",
        "o": ["Padma", "Jamuna", "Meghna", "Brahmaputra"],
        "a": 3
    },
    {
        "q": "What is the national flower of Bangladesh?",
        "o": ["Rose", "Lily", "Shapla", "Tulip"],
        "a": 2
    },
    {
        "q": "When did Bangladesh gain independence?",
        "o": ["1971", "1965", "1947", "1980"],
        "a": 0
    },
    {
        "q": "What is the currency of Bangladesh?",
        "o": ["Rupee", "Taka", "Dollar", "Euro"],
        "a": 1
    },
    {
        "q": "What is the name of the largest mangrove forest in Bangladesh?",
        "o": ["Sundarbans", "Hill Tracts", "Lawachara", "Ratargul"],
        "a": 0
    },
    {
        "q": "Who is known as the Father of the Nation in Bangladesh?",
        "o": ["Sheikh Hasina", "Bangabandhu Sheikh Mujibur Rahman", "Ziaur Rahman", "Kazi Nazrul Islam"],
        "a": 1
    },
    {
        "q": "What is the national animal of Bangladesh?",
        "o": ["Elephant", "Royal Bengal Tiger", "Deer", "Peacock"],
        "a": 1
    },
    {
        "q": "Which sea borders Bangladesh to the south?",
        "o": ["Arabian Sea", "Bay of Bengal", "South China Sea", "Indian Ocean"],
        "a": 1
    }
];

// ------Variables--------
let dataIndex = 0;
let score = 0;

// -------On Load fundamental function / data received---------
function onLoad() {
    // Check if dataIndex is valid
    if (dataIndex >= data.length) return;

    // Question add
    let qTitle = document.getElementById("qTitle");
    qTitle.innerHTML = dataIndex + 1 + "/ " + data.length + ") " + data[dataIndex].q;

    // Options add
    let options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = data[dataIndex].o[i];
        options[i].style.background = 'blue';
        options[i].disabled = false;
    }

    // next button disabled
    let next = document.getElementById('next');
    next.disabled = true;
}

onLoad();

// -------------Option click-------------
function selectOption(index) {
    let options = document.getElementsByClassName("option");

    // click on correct or wrong answer
    if (index === data[dataIndex].a) {
        options[index].style.background = "green";
        score++;
    } else {
        options[index].style.background = "red";
        options[data[dataIndex].a].style.background = "green";
    }

    // option duplicate click disabled
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true; // Works if options are buttons or inputs
    }

    // next button show
    let next = document.getElementById('next');
    next.disabled = false;
    next.innerHTML = "Current Score: " + score + "/" + data.length + " || Next";
}

// ----------Next button----------
function next() {
    if (dataIndex < data.length - 1) {
        dataIndex++;
        onLoad();
    } else {
        let result = document.getElementById("flag");
        result.innerHTML = `
            <h2>Your Score is ${score} out of ${data.length}</h2><br>
            <h3>Thank you for your participation</h3><br>
            <button class="btn btn-primary m-2" onclick="restart()">Restart</button>
        `;
    }
}

// --------Restart-------
function restart() {
    window.location.reload();
}
