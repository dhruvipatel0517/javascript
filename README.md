<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: ERROR </p>
<p>Why : we print before declaration and initialize let keyword </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>
<p>var b = "username";</p>
<p>Answer or Error: ERROR undefined</p>
<p>Why : we print before declaration and initialize with VAR keyword </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: ANSWER : 2 </p>
<p>Why : Because var keyword print BLOCK scope </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: ANSWERS : OUTSIDE :- 20    INSIDE :- 10 </p>
<p>Why : Because let keyword print GLOBAL scope </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: User and ERROR both </p>
<p>Why : Because const keyword can property change but const keyword can't reassign</p>
</div>


<!-- DATE 21/01/2026  -->

<div>
<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: ANSWER :- 1 </p>
<p>Why : it consider TRUE means 1 and FALSE means 0  </p>
</div>

<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: ANSWER :- 1</p>
<p>Why : it consider null 0 means EMPTY </p>
</div>

 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error: ANSWER :- 1212</p>
<p>Why :  it combines like a STRING </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: FALSE </p>
<p>Why : when value not defined then it calls undefined then !undefined = true so !true=false so !!undefined=false</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: ANSWER :- 11</p>
<p>Why : its consider substraction</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: hello5</p>
<p>Why : it consider string it means both values added </p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: X = undefined , Y = null</p>
<p>Why : x is not defined it means ans is undefined 
while y is declare null then answer is null</p>
</div>

<!-- DATE 23/01/2026  -->

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer or Error: ANSWER </p>
<p>Why : Both conditona are Grater than 5 </p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer or Error: ANSWER </p>
<p>Why : One condition true & second condition is false so ... true || false so, answer is Acess granted </p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer or Error: ANSWER </p>
<p>Why : 30 no. grater than 35 but before condition !(not) is use so... else part print</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer or Error: ANSWER </p>
<p>Why : Because 0 is nothing ans false value </p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer or Error: ANSWER </p>
<p>Why : </p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer or Error:  </p>
<p>Why : </p>
</div>

<!--  DATE : 23/01/2026  -->

<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>Answer or Error: ANSWER TWO or THREE  </p>
<p>Why : Becuase breack is not define so.....  Simple Print Message  </p>
<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<div>