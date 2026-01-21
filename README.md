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