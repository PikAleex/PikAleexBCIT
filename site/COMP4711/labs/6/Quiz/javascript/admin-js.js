let question_list = [];
let q_class_value = 1;
let loading = false;

let add_q_func = function() {
    let div_id = "div" + q_class_value;
    let q_class = "question" + q_class_value;
    
    // Add new div for the question
    let new_div = document.createElement("DIV");
    new_div.setAttribute("id", div_id);
    
    // Question* label
    let label1 = document.createElement("H5");
    let text1 = document.createTextNode(ADMINQLABEL);
    label1.appendChild(text1);
    
    // Question input box
    let question_box = document.createElement("TEXTAREA");
    question_box.className = "form-control " + q_class;
    
    // Answers* label
    let label2 = document.createElement("H5");
    let text2 = document.createTextNode(ADMINALABEL);
    label2.appendChild(text2);
    
    // Radio inputs
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
    
    rad_a.setAttribute("name", "q" + q_class_value);
    rad_b.setAttribute("name", "q" + q_class_value);
    rad_c.setAttribute("name", "q" + q_class_value);
    rad_d.setAttribute("name", "q" + q_class_value);
    
    // textbox inputs
    let ans_a = document.createElement("INPUT");
    let ans_b = document.createElement("INPUT");
    let ans_c = document.createElement("INPUT");
    let ans_d = document.createElement("INPUT");
    
    ans_a.className = "txtbx" + q_class_value;
    ans_b.className = "txtbx" + q_class_value;
    ans_c.className = "txtbx" + q_class_value;
    ans_d.className = "txtbx" + q_class_value;
    
    ans_a.setAttribute("type", "text");
    ans_b.setAttribute("type", "text");
    ans_c.setAttribute("type", "text");
    ans_d.setAttribute("type", "text");
    
    ans_a.setAttribute("name", "ans_a" + q_class_value);
    ans_b.setAttribute("name", "ans_b" + q_class_value);
    ans_c.setAttribute("name", "ans_c" + q_class_value);
    ans_d.setAttribute("name", "ans_d" + q_class_value);
    
    // setting value to tetboxes
    if (loading) {
        switch(question_list[(q_class_value - 1)].correct_ans) {
            case '0':
                rad_a.checked = true;
                break;
            case '1':
                rad_b.checked = true;
                break;
            case '2':
                rad_c.checked = true;
                break;
            case '3':
                rad_d.checked = true;
                break;
        }
        
        question_box.value = question_list[(q_class_value - 1)].question;
        ans_a.setAttribute("value", question_list[(q_class_value - 1)].answers[0]);
        ans_b.setAttribute("value", question_list[(q_class_value - 1)].answers[1]);
        ans_c.setAttribute("value", question_list[(q_class_value - 1)].answers[2]);
        ans_d.setAttribute("value", question_list[(q_class_value - 1)].answers[3]);
        loading = false;
    }
    
    // Displaying to the page
    document.getElementById("new_questions").appendChild(new_div);
    document.getElementById(div_id).appendChild(label1);
    document.getElementById(div_id).appendChild(question_box);
    
    let br = document.createElement("BR");
    let br2 = document.createElement("BR");
    let br3 = document.createElement("BR");
    let hr = document.createElement("HR");
    
    document.getElementById(div_id).appendChild(br);
    document.getElementById(div_id).appendChild(label2);
    document.getElementById(div_id).appendChild(rad_a);
    document.getElementById(div_id).appendChild(ans_a);
    document.getElementById(div_id).appendChild(br);
    document.getElementById(div_id).appendChild(rad_b);
    document.getElementById(div_id).appendChild(ans_b);
    document.getElementById(div_id).appendChild(br2);    
    document.getElementById(div_id).appendChild(rad_c);
    document.getElementById(div_id).appendChild(ans_c);
    document.getElementById(div_id).appendChild(br3);
    document.getElementById(div_id).appendChild(rad_d);
    document.getElementById(div_id).appendChild(ans_d);
    document.getElementById(div_id).appendChild(hr);
    
    ++q_class_value;
};

function load_form() {
    for (let i = 0; i < localStorage.length; ++i) {
        loading = true;
        add_q_func();
        get_ansbox = [];
    }
}

// Read from local storage
(function retrieveQuiz() {
    for (let i = 0; i < localStorage.length; ++i) {
        question_list.push(JSON.parse(localStorage.getItem("question" + (i + 1))));
    }
    load_form();
})();


function Question(question, answers, correct_ans) {
    this.question = question;
    this.answers = answers;
    this.correct_ans = correct_ans;
}

// Checks to see if any textfields are empty
function check_empty() {
    for (let i = 0; i < question_list.length; ++i) {
        if (question_list[i].question.trim() == "" || question_list[i].correct_ans.trim() == "")
            return true;
        for (let j = 0; j < 4; ++j) {
            if (question_list[i].answers[j].trim() == "") // Seeing if the answer is blank
                return true;
        }
    }
    return false;
}

// needs fixing for database
function storeQuiz() {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", `/lab6/submit?questions=${JSON.stringify(question_list)}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };

    // for (let i = 1; i < q_class_value; ++i) {
    //     //localStorage.setItem("question" + i, JSON.stringify(question_list[i - 1]));
        
    // }
}

// Gets any inputs in the textfields, and loads them in to the question_list as Question objects
let save_q_func = function() {
    if (q_class_value > 1) { // if there is at least 1 question form open
        let div_it;
        let get_q;
        let tmp_list;
        let ans_list = [];
        let rad_list;
        let cor_ans = "";
        
        question_list = []; // Flush question_list buffer
        for (let i = 1; i < q_class_value; ++i) {
            ans_list = [];
            
            div_it = document.getElementById("div" + i);
            get_q = div_it.getElementsByClassName("question" + i)[0].value;
            tmp_list = div_it.getElementsByClassName("txtbx" + i);
            rad_list = document.getElementsByName("q" + i);

            for (let j = 0; j < 4; ++j) {
                ans_list.push(tmp_list[j].value);
                if (rad_list[j].checked)
                    cor_ans = rad_list[j].value;
            }

            question_list.push(new Question(get_q, ans_list, cor_ans));
            localStorage.clear();
            
            if (check_empty()) { // At least 1 field is empty
                alert(CHECKEMPTYMSG); // need to put into strings file
                question_list = [];
                break;
            }
            else {
                storeQuiz();
            }
        }
    }
}

let del_q_func = function() {
    if (q_class_value > 1) {
        --q_class_value;
        let del_div = document.getElementById("div" + q_class_value);
        del_div.parentNode.removeChild(del_div);
        localStorage.removeItem("question" + q_class_value);
    }
}

// Admin buttons
let add_btn = document.createElement("BUTTON");
let add_text = document.createTextNode("Add");
let del_btn = document.createElement("BUTTON");
let del_text = document.createTextNode("Delete");
let save_btn = document.createElement("BUTTON");
let save_text = document.createTextNode("Save");

add_btn.appendChild(add_text);
del_btn.appendChild(del_text);
save_btn.appendChild(save_text);

add_btn.className = "btn btn-success";
del_btn.className = "btn btn-danger";
save_btn.className = "btn btn-warning";

add_btn.onclick = add_q_func;
del_btn.onclick = del_q_func;
save_btn.onclick = save_q_func;

document.getElementById("admin_btns").appendChild(add_btn);
document.getElementById("admin_btns").appendChild(del_btn);
document.getElementById("admin_btns").appendChild(save_btn);
