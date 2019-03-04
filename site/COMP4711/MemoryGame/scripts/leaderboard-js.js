let top_players = [];
let player_list = [];
let id_list = [];
let printed = false;

let name = JSON.parse(localStorage.getItem("name"));
let score = JSON.parse(localStorage.getItem("score"));
let iterations = JSON.parse(localStorage.getItem("iterations"));
let id = JSON.parse(localStorage.getItem("id"));

let playagain = document.createElement("button");
playagain.onclick = function() { localStorage.clear(); };
let btns = document.getElementById("ctrl_btns");
let a_tag = document.createElement("a");
let tn = document.createTextNode("Restart");
playagain.className = "btn btn-success";
playagain.appendChild(tn);
btns.appendChild(a_tag);
a_tag.appendChild(playagain);
a_tag.setAttribute('href', './index.html');

let player_result = document.createElement("h2");
document.getElementById("leaderboard_box").appendChild(player_result);

let tab = document.createElement("table");
tab.setAttribute("id", "score_table");
document.getElementById("leaderboard_box").appendChild(tab);

let hdr_row = document.createElement("tr");
let name_hdr = document.createElement("th");
let score_hdr = document.createElement("th");
let iteration_hdr = document.createElement("th");
let rank_hdr = document.createElement("th");
let rank_txt = document.createTextNode("Rank");
let name_txt = document.createTextNode("Name");
let score_txt = document.createTextNode("Score");
let iteration_txt = document.createTextNode("Grid Patterns");
rank_hdr.appendChild(rank_txt);
name_hdr.appendChild(name_txt);
score_hdr.appendChild(score_txt);
iteration_hdr.appendChild(iteration_txt);
hdr_row.appendChild(rank_hdr);
hdr_row.appendChild(name_hdr);
hdr_row.appendChild(score_hdr);
hdr_row.appendChild(iteration_hdr);
tab.appendChild(hdr_row);

function getscores() {
    let query = firebase.database().ref("players");

    query.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let key = childSnapshot.key;
            id_list.push(key);
            let childData = childSnapshot.val();
            player_list.push(childData);
        });
        loadtopfive();
        showscores();
    });
}

function loadtopfive() {
    let tmp;
    for (let i = 0; i < player_list.length - 1; ++i) {
        for (let j = i + 1; j < player_list.length; ++j) {
            if (player_list[j].score > player_list[i].score || (player_list[j].score == player_list[i].score && player_list[j].iterations < player_list[i].iterations)) {
                tmp = player_list[i];
                player_list[i] = player_list[j];
                player_list[j] = tmp;

                tmp = id_list[i];
                id_list[i] = id_list[j];
                id_list[j] = tmp;
            }
        }
    }

    for (let i = 0; i < player_list.length; ++i) {
        if (id_list[i] == id) {
            let player_txt = document.createTextNode(name + ": Rank " + (i + 1) + ", Score: " + score);
            player_result.appendChild(player_txt);
            break;
        }
    }
    
    if (player_list.length < 5) {
        for (let i = 0; i < player_list.length; ++i)
            top_players.push(player_list[i]);
    } else {
        for (let i = 0; i < 5; ++i)
            top_players.push(player_list[i]);
    }
}

function showscores() {
    let player_row;
    let rank_cell;
    let name_cell;
    let score_cell;
    let iteration_cell;
    let name_text;
    let score_text;
    let iteration_text;

    if (!printed) {
        for (let i = 0; i < top_players.length; ++i) {
            player_row = document.createElement("tr");
            rank_cell = document.createElement("td");
            name_cell = document.createElement("td");
            score_cell = document.createElement("td");
            iteration_cell = document.createElement("td");
            rank_text = document.createTextNode(i + 1);
            name_text = document.createTextNode(top_players[i].player);
            score_text = document.createTextNode(top_players[i].score);
            iteration_text = document.createTextNode(top_players[i].iterations);
            rank_cell.appendChild(rank_text);
            name_cell.appendChild(name_text);
            score_cell.appendChild(score_text);
            iteration_cell.appendChild(iteration_text);
            player_row.appendChild(rank_cell);
            player_row.appendChild(name_cell);
            player_row.appendChild(score_cell);
            player_row.appendChild(iteration_cell);
            tab.appendChild(player_row);
        }
        printed = true;
    }
}

getscores();
