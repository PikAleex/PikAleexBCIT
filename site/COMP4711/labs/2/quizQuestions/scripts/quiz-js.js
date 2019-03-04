const MAX_QUESTIONS = 5;

function Question(question, answers) {
    this.question = question;
    this.answers = answers;
}

let question1 = new Question("<p>1) What is the JavaScript code to inject a &lt;h1&gt; element that says \"Hello World!\" into the &lt;body&gt; element?</p>", ["<input type=\"radio\" name=\"q1\" value=\"a\"> a) <span class=\"doc_span\">document</span>.body = \"&lt;h1&gt;Hello World!&lt;/h1&gt;\"; <br>", "<input type=\"radio\" name=\"q1\" value=\"b\"> b) <span class=\"doc_span\">document</span>.body.HTML = \"&lt;h1&gt;Hello World!&lt;/h1&gt;\"; <br>", "<input type=\"radio\" name=\"q1\" value=\"c\"> c) <span class=\"doc_span\">document</span>.body.innerHTML = \"&lt;h1&gt;Hello World!&lt;/h1&gt;\"; <br>", "<input type=\"radio\" name=\"q1\" value=\"d\"> d) <span class=\"doc_span\">document</span>.body.innerhtml = \"&lt;h1&gt;Hello World!&lt;/h1&gt;\"; <br>"]);

let question2 = new Question("<p>2) What will be displayed in the console from this code snippet?</p><div><div>&nbsp;<span class=\"var_span\">var</span> a = 5;</div><div>&nbsp;<span class=\"var_span\">var</span> b = 6;</div><div>&nbsp;<span class=\"var_span\">var</span> c = 11;</div><div>&nbsp;<span class=\"var_span\">var</span> d = \"9\";</div><div>&nbsp;<span class=\"console_span\">console</span>.log((a + b)/c + d);</div></div><br>", ["<input type=\"radio\" name=\"q2\" value=\"a\"> a) 10 <br>", "<input type=\"radio\" name=\"q2\" value=\"b\"> b) 19 <br>", "<input type=\"radio\" name=\"q2\" value=\"c\"> c) NaN <br>", "<input type=\"radio\" name=\"q2\" value=\"d\"> d) 56119 <br>"]);

let question3 = new Question("<p>3) What method duplicates the array, arr, to the variable named newArr?</p>", ["<input type=\"radio\" name=\"q3\" value=\"a\"> a) <span class=\"var_span\">var</span> newArr = arr.slice(); <br>", "<input type=\"radio\" name=\"q3\" value=\"b\"> b) <span class=\"var_span\">var</span> newArr = arr.copy() <br>", "<input type=\"radio\" name=\"q3\" value=\"c\"> c) <span class=\"var_span\">var</span> newArr = copy(arr); <br>", "<input type=\"radio\" name=\"q3\" value=\"d\"> d) <span class=\"var_span\">var</span> newArr = newArr.slice(); <br>"]);

let question4 = new Question("<p>4) An object is named student. The object has a name, an id, and program. How is this object defined?</p>", ["<input type=\"radio\" name=\"q4\" value=\"a\"> a) <span class=\"var_span\">var</span> student = { <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name = \"John Doe\",</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id = 12345678,</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;program = \"CST\",</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div> <br>", "<input type=\"radio\" name=\"q4\" value=\"b\"> b) <span class=\"var_span\">var</span> student = { <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: \"John Doe\",</div> <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 12345678,</div> <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;program: \"CST\",</div> <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div> <br>", "<input type=\"radio\" name=\"q4\" value=\"c\"> c) <span class=\"var_span\">var</span> student = { <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: \"John Doe\";</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 12345678;</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;program: \"CST\";</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><br>"]);

let question5 = new Question("<p>5) What is the resulting array of this script?</p><div><span class=\"var_span\">var</span> hiWorld = (function() {</div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"var_span\">var</span> result = 1;</div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\".for_span\">for</span> (<span class=\"let_span\">let</span> i = 2; i &lt; 5; ++i) {</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result *= i;</div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"var_span\">var</span> greeting;</div><div>&nbsp;&nbsp;&nbsp;&nbsp;result &lt; 25 ? greeting = \"Hi world!\" : greeting = \"Hello world!\";</div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"var_span\">var</span> answer = [greeting, result];</div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"return_span\">return</span> answer;</div><div>})()</div> <br>", ["<input type=\"radio\" name=\"q5\" value=\"a\"> a) [\"Hi world!\", 24] <br>", "<input type=\"radio\" name=\"q5\" value=\"b\"> b) [\"Hi world!\", 23] <br>", "<input type=\"radio\" name=\"q5\" value=\"c\"> c) [\"Hello world!\", 25] <br>", "<input type=\"radio\" name=\"q5\" value=\"d\"> d) [\"Hello world!\", 26] <br>"]);

let questionList = [question1, question2, question3, question4, question5];
let numOfQuestions = -1;

while (numOfQuestions < 0 || numOfQuestions > MAX_QUESTIONS || numOfQuestions === "") {
    numOfQuestions = prompt("How many questions would you like? Please enter between 0 and 5 inclusive", 0);
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
