let score = JSON.parse(localStorage.getItem("score"));
let iterations = JSON.parse(localStorage.getItem("iterations"));
let name = NO_NAME;
let id;

let btns = document.getElementById("ctrl_btns");
let fb_d = firebase.database();

// Make unique id for database
function makeid() {
    let text = "";
    let possible = ALL_CHARS;
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    localStorage.setItem("id", JSON.stringify(text));
    return text;
}

function submit_score() {
    name = prompt(SCORE_PROMPT, NO_NAME);
    
    if (name == null)
        name = NO_NAME;
    
    localStorage.setItem("name", JSON.stringify(name));

    fb_d.ref('players/' + makeid()).set({
        player: name,
        score: score,
        iterations: iterations,
    });
}

if (score > 0) {
    let submit_btn = document.createElement("button");
    let submit_txt = document.createTextNode("Submit score");
    let submit_a = document.createElement("a");
    submit_btn.className = "btn btn-success";
    submit_a.appendChild(submit_btn);
    submit_btn.appendChild(submit_txt);
    btns.appendChild(submit_a);
    submit_a.setAttribute("href", "./Leaderboard.html");
    submit_btn.onclick = submit_score;

    let results = document.createElement("h2");
    let tn = document.createTextNode(SUMMARY_MESSAGE + " " + score);
    results.appendChild(tn);
    document.getElementById("summary_box").appendChild(results);

    let num_its = document.createElement("div");
    let tn_it = document.createTextNode(ITERATION_MSG + iterations);
    num_its.appendChild(tn_it);
    document.getElementById("summary_box").appendChild(num_its);
} else {
    let gameover = document.createElement("h2");
    let tn_go = document.createTextNode(GAME_OVER);
    gameover.appendChild(tn_go);
    document.getElementById("summary_box").appendChild(gameover);

    let go_msg = document.createElement("div");
    let tn_msg = document.createTextNode(GO_MESSAGE);
    go_msg.appendChild(tn_msg);
    document.getElementById("summary_box").appendChild(go_msg);
    localStorage
}

// Set restart button
let restart_btn = document.createElement("button");
let restart_a = document.createElement("a");
let restart_txt = document.createTextNode("Restart");
restart_btn.className = "btn btn-info";
restart_a.onclick = function() {localStorage.clear();};
restart_a.setAttribute('href', './index.html');
restart_a.appendChild(restart_btn);
restart_btn.appendChild(restart_txt);
btns.appendChild(restart_a);