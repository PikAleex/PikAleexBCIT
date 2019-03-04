const MAX_QUESTIONS = 10;

function Question(question, answers) {
    this.question = question;
    this.answers = answers;
}

let question1 = new Question("<p>1) What does the keyword <strong>this</strong> refer to when it is alone or in a function?</p>", ["<input type=\"radio\" name=\"q1\" value=\"a\"> a) to its owner object <br>", "<input type=\"radio\" name=\"q1\" value=\"b\"> b) to the global object <br>", "<input type=\"radio\" name=\"q1\" value=\"c\"> c) undefined <br>", "<input type=\"radio\" name=\"q1\" value=\"d\"> d) THIS object <br>"]);

let question2 = new Question("<p>2) What does the keyword <strong>obj</strong> refer to in this code snippet?</p> <div><span id=\"use_strict_s\">\"use strict\"</span><br>function thisThis() {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"let_span\">let</span> obj = <span class=\"this_class\">this</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"return_span\">return</span> obj;<br>}</div>", ["<input type=\"radio\" name=\"q2\" value=\"a\"> a) to its owner object <br>", "<input type=\"radio\" name=\"q2\" value=\"b\"> b) to the global object <br>", "<input type=\"radio\" name=\"q2\" value=\"c\"> c) undefined <br>", "<input type=\"radio\" name=\"q2\" value=\"d\"> d) THIS object <br>"]);

let question3 = new Question("<p>3) What does the keyword <strong>this</strong> refer to in this code snippet?</p> <div>&lt;<span class=\"html_tags\">button</span> <span class=\"attr_class\">onclick</span>=\"this.style.display=\'none\'\"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;THIS BUTTON<br>&lt;<span class=\"html_tags\">/button</span>&gt;<br>", ["<input type=\"radio\" name=\"q3\" value=\"a\"> a) to the global object <br>", "<input type=\"radio\" name=\"q3\" value=\"b\"> b) The HTML element <br>", "<input type=\"radio\" name=\"q3\" value=\"c\"> c) THIS BUTTON <br>", "<input type=\"radio\" name=\"q3\" value=\"d\"> d) \"this\" style <br>"]);

let question4 = new Question("<p>4) How would you print \"John Doe\" to the console from the following object?</p> <div><span class=\"let_span\">let</span> person = function(firstName, lastName) { <br>&nbsp;&nbsp;&nbsp;&nbsp;firstName: \"John\",<br>&nbsp;&nbsp;&nbsp;&nbsp;lastName: \"Doe\"<br>}<br>", ["<input type=\"radio\" name=\"q4\" value=\"a\"> a) <span class=\"console_span\">console</span>.log(firstName + lastName) <br>", "<input type=\"radio\" name=\"q4\" value=\"b\"> b) <span class=\"console_span\">console</span>.log(\"John Doe\") <br>", "<input type=\"radio\" name=\"q4\" value=\"c\"> c) <span class=\"console_span\">console</span>.log(<span class=\"this_class\">this</span>.firstName + <span class=\"this_class\">this</span>.lastName) <br>"]);

let question5 = new Question("<p>5) What is printed from <span class=\"console_class\">console</span>.log(<span class=\"this_class\">this</span>), alone?</p>", ["<input type=\"radio\" name=\"q5\" value=\"a\"> a) this<br>", "<input type=\"radio\" name=\"q5\" value=\"b\"> b) Window<br>", "<input type=\"radio\" name=\"q5\" value=\"c\"> c) Object<br>"]);

let question6 = new Question("<p>6) What is the command to open a new tab?</p>", ["<input type=\"radio\" name=\"q6\" value=\"a\"> a) window.newtab()<br>", "<input type=\"radio\" name=\"q6\" value=\"b\"> b) open.window()<br>", "<input type=\"radio\" name=\"q6\" value=\"c\"> c) window.open()<br>", "<input type=\"radio\" name=\"q6\" value=\"d\"> d) window.open(sesame)<br>"]);

let question7 = new Question("<p>7) How would you get the element and textNode to work together?</p> <div><span class=\"let_span\">let</span> btn = <span class=\"doc_span\">document</span>.createElement(\"BUTTON\");<br><span class=\"let_span\">let</span> btnText = <span class=\"doc_span\">document</span>.createTextNode(\"This is a button\")</div><br>", ["<input type=\"radio\" name=\"q7\" value=\"a\"> a) btn.setTextNode(btnText);<br>", "<input type=\"radio\" name=\"q7\" value=\"b\"> b) btn.attachTextNode(btnText);<br>", "<input type=\"radio\" name=\"q7\" value=\"c\"> c) btn.setChild(btnText);<br>", "<input type=\"radio\" name=\"q7\" value=\"d\"> d) btn.appendChild(btnText);<br>"]);

let question8 = new Question("<p>8) What function would prevent the following button to direct the user back to the top of the page, using event <strong>e</strong>?</p><div>&lt;<span class=\"html_tags\">button</span> <span class=\"attr_class\">href</span>=\"#\"&gt;Click me!&lt;<span class=\"html_tags\">/button</span>&gt;</div>", ["<input type=\"radio\" name=\"q8\" value=\"a\"> a) e.preventReturn();<br>", "<input type=\"radio\" name=\"q8\" value=\"b\"> b) e.preventDefault();<br>", "<input type=\"radio\" name=\"q8\" value=\"c\"> c) e.stay();<br>", "<input type=\"radio\" name=\"q8\" value=\"d\"> d) e.notDefault();<br>"]);

let question9 = new Question("<p>9) Can you have trigger two functions with one click event? If so, how?</p>", ["<input type=\"radio\" name=\"q9\" value=\"a\"> a) Yes, by using obj.addEventListener(\"click\", function, bool);<br>", "<input type=\"radio\" name=\"q9\" value=\"b\"> b) Yes, by assigning obj.onclick for the first function, then obj.click again for the second function<br>", "<input type=\"radio\" name=\"q9\" value=\"c\"> c) No, it's impossible<br>"]);

let question10 = new Question("<p>10) How many \"Pika\" are printed to the console?</p><div><span class=\"for_span\">for</span> (<span class=\"let_span\">let</span> i = 0; i < 10; ++i) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (i == 5)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"break_span\">break</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"console_span\">console</span>.log(\"Pika\");<br>}<br>", ["<input type=\"radio\" name=\"q10\" value=\"a\"> a) 4<br>", "<input type=\"radio\" name=\"q10\" value=\"b\"> b) 10<br>", "<input type=\"radio\" name=\"q10\" value=\"c\"> c) 5<br>", "<input type=\"radio\" name=\"q10\" value=\"d\"> d) This is an infinite loop, console will print an infinite amount<br>"]);

let questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let numOfQuestions = -1;

while (numOfQuestions < 0 || numOfQuestions > MAX_QUESTIONS || numOfQuestions === "") {
    numOfQuestions = prompt("How many questions would you like? Please enter between 0 and 10 inclusive", 0);
}

let displayQuestions = "";
for (let i = 0; i < numOfQuestions; ++i) {
    displayQuestions += questionList[i].question;
    for (let j = 0; j < questionList[i].answers.length; ++j) {
        displayQuestions += questionList[i].answers[j];
    }
    displayQuestions += "<br>";
}

document.getElementById("questions").innerHTML = displayQuestions;
