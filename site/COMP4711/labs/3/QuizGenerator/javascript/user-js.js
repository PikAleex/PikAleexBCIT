let q_list = [];
let user_score = 0;
let marking_list = [];
let user_ans = [];

function Question(question, answers, correct_ans) {
    this.question = question;
    this.answers = answers;
    this.correct_ans = correct_ans;
}

function get_questions() {
    let obj;
    for (let i = 0; i < localStorage.length; ++i) {
       obj = JSON.parse(localStorage.getItem("question" + (i + 1)));
        q_list.push(new Question(obj.question, obj.answers, obj.correct_ans));
    }
}

function display_questions() {
    let div_counter = 1;
    let div_id;
    let div_q;
    let q_q;
    let q_text;
    
    get_questions();
    
    for (let i = 0; i < localStorage.length; ++i) {
        div_id = "udiv" + div_counter; // Each question gets one unique id
        
        div_q = document.createElement("DIV");
        div_q.setAttribute("id", div_id);
        
        // Show Question
        q_q = document.createElement("H3");
        q_text = document.createTextNode(div_counter + ") " + q_list[(div_counter - 1)].question);
        q_q.appendChild(q_text);
        
        // Radio button configuration
        let rad_a = document.createElement("INPUT");
        let rad_b = document.createElement("INPUT");
        let rad_c = document.createElement("INPUT");
        let rad_d = document.createElement("INPUT");
        
        rad_a.setAttribute("type", "radio");
        rad_b.setAttribute("type", "radio");
        rad_c.setAttribute("type", "radio");
        rad_d.setAttribute("type", "radio");
        
        rad_a.setAttribute("value", "0");
        rad_b.setAttribute("value", "1");
        rad_c.setAttribute("value", "2");
        rad_d.setAttribute("value", "3");
        
        rad_a.setAttribute("name", "q" + div_counter);
        rad_b.setAttribute("name", "q" + div_counter);
        rad_c.setAttribute("name", "q" + div_counter);
        rad_d.setAttribute("name", "q" + div_counter);
        
        // Show and list options
        let opt1 = document.createElement("H4");
        let opt2 = document.createElement("H4");
        let opt3 = document.createElement("H4");
        let opt4 = document.createElement("H4");
        
        let rad_texta = document.createTextNode(q_list[(div_counter - 1)].answers[0]);
        let rad_textb = document.createTextNode(q_list[(div_counter - 1)].answers[1]);
        let rad_textc = document.createTextNode(q_list[(div_counter - 1)].answers[2]);
        let rad_textd = document.createTextNode(q_list[(div_counter - 1)].answers[3]);
        
        opt1.appendChild(rad_texta);
        opt2.appendChild(rad_textb);
        opt3.appendChild(rad_textc);
        opt4.appendChild(rad_textd);
        
        let br = document.createElement("BR");
        let br2 = document.createElement("BR");
        let br3 = document.createElement("BR");
        let hr = document.createElement("HR");
        
        document.getElementById("the_questions").appendChild(div_q);
        div_q.appendChild(q_q);
        div_q.appendChild(rad_a);
        div_q.appendChild(opt1);
        document.getElementById(div_id).appendChild(br);
        div_q.appendChild(rad_b);
        div_q.appendChild(opt2);
        document.getElementById(div_id).appendChild(br2); 
        div_q.appendChild(rad_c);
        div_q.appendChild(opt3);
        document.getElementById(div_id).appendChild(br3);
        div_q.appendChild(rad_d);
        div_q.appendChild(opt4);
        document.getElementById(div_id).appendChild(hr);
        
        ++div_counter;
    }
}

function show_ans() {
    // Clear the page
    document.getElementById("the_questions").innerHTML = "";
    document.getElementById("user_btns").innerHTML = "";
    
    let div_id;
    let div_q;
    let q_q;
    let q_text;
    let div_counter = 1;
    
    // Load questions without radio buttons
    for (let i = 0; i < localStorage.length; ++i) {
        div_id = "udiv" + div_counter; // Each question gets one
        div_q = document.createElement("DIV");
        get_questions();
        div_q.setAttribute("id", div_id);

        q_q = document.createElement("H3");
        q_text = document.createTextNode(div_counter + ") " + q_list[(div_counter - 1)].question);
        q_q.appendChild(q_text);
        
        let opt1 = document.createElement("H4");
        let opt2 = document.createElement("H4");
        let opt3 = document.createElement("H4");
        let opt4 = document.createElement("H4");
        
        opt1.setAttribute("id", div_counter + "ua0");
        opt2.setAttribute("id", div_counter + "ua1");
        opt3.setAttribute("id", div_counter + "ua2");
        opt4.setAttribute("id", div_counter + "ua3");
        
        let rad_texta = document.createTextNode(q_list[(div_counter - 1)].answers[0] + "");
        let rad_textb = document.createTextNode(q_list[(div_counter - 1)].answers[1] + "");
        let rad_textc = document.createTextNode(q_list[(div_counter - 1)].answers[2] + "");
        let rad_textd = document.createTextNode(q_list[(div_counter - 1)].answers[3] + "");
        
        let br = document.createElement("BR");
        let br2 = document.createElement("BR");
        let br3 = document.createElement("BR");
        let hr = document.createElement("HR");
        
        opt1.appendChild(rad_texta);
        opt2.appendChild(rad_textb);
        opt3.appendChild(rad_textc);
        opt4.appendChild(rad_textd);
        
        div_q.appendChild(q_q);
        div_q.appendChild(opt1); 
        document.getElementById("the_questions").appendChild(div_q);
        div_q.appendChild(q_q);
        div_q.appendChild(opt1);
        document.getElementById(div_id).appendChild(br);
        div_q.appendChild(opt2);
        document.getElementById(div_id).appendChild(br2); 
        div_q.appendChild(opt3);
        document.getElementById(div_id).appendChild(br3);
        div_q.appendChild(opt4);
        document.getElementById(div_id).appendChild(hr);
        
        ++div_counter;
        
    }
    
    highlight_ans();
}

function highlight_ans() {
    let div_counter = 1;
    let show_correct;
    let user_wrong;
    
    for (let i = 0; i < localStorage.length; ++i) {
        show_correct = document.getElementById(div_counter + "ua" + q_list[i].correct_ans);
        show_correct.setAttribute("style", "background-color:springgreen");
        
        if (!marking_list[i]) {
            user_wrong = document.getElementById(div_counter + "ua" + user_ans[i]);
            user_wrong.setAttribute("style", "background-color:lightcoral")
        }
        
        ++div_counter;
    }
}

function show_score() {
    alert(SHOWSCORE + user_score + "/" + localStorage.length);
    show_ans();
}

function check_ans() {
    let cur_div;
    let radio_list = [];
    let q_ansd = false;
    let all_answered = true;
    
    for (let i = 1; i <= localStorage.length; ++i) {
        radio_list = document.getElementsByName("q" + i);
        for (let j = 0; j < 4; ++j) {
            if (radio_list[j].checked) {
                q_ansd = true;
                if (q_list[i - 1].correct_ans == j) {
                    ++user_score;
                    marking_list.push(true);
                }
                else
                    marking_list.push(false);
                user_ans.push(j);
            }
            if (j == 3 && !q_ansd) {
                all_answered = false;
                alert(NOTALLANSWERED);
            }
        }
    }
    
    if (all_answered)
        show_score();
}

function set_submit_btn() {
    let submit_btn = document.createElement("BUTTON");
    let submit_text = document.createTextNode("Submit");
    
    submit_btn.appendChild(submit_text);
    submit_btn.className = "btn btn-success";
    submit_btn.onclick = check_ans;
    document.getElementById("user_btns").appendChild(submit_btn);
}

(function retrieveQuiz() {
    user_score = 0;
    marking_list = [];
    
    if (localStorage.length == 0) {
        document.getElementById("the_questions").innerHTML = NOQUESTIONS;
    } else {
        q_list = [];
        display_questions();
        set_submit_btn();
    }
})();
