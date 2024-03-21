function ans()
{
    if(document.querySelectorAll('input[value="1"]:checked').length>0)
{
    // document.getElementsByClassName('form-group')[2].style.color = 'green';
    document.querySelectorAll('input[value="1"]:checked').forEach((element) => {
        element.style.color = 'green';
        alert("correct Answer");
    });
}
else
{
    document.querySelectorAll('input[value="2"]:checked').forEach((element) => {
        element.style.color = 'red';
        alert("Wrong Answer");
    });
}
}

// const text = 'HTML stands for -';
// for (let i = 0; i < text.length; i++) {
//   setTimeout(() => {
//     document.getElementById('myText').innerHTML += text[i];
//   }, i * 100);
// }

// const text1 = 'Which of the following tag is used for inserting the largest heading in HTML?';
// for (let i = 0; i < text1.length; i++) {
//   setTimeout(() => {
//     // document.getElementById('myText').innerHTML += text[i];
//     document.getElementsByClassName('text1')[0].innerHTML += text1[i];
// }, i * 100);
// }

// const text2 = 'How to create a hyperlink in HTML?';
// for (let i = 0; i < text2.length; i++) {
//   setTimeout(() => {
//     document.getElementsByClassName('text1')[1].innerHTML += text2[i];

//   }, i * 100);
// }

// const text3 = 'How to insert an image in HTML?';
// for (let i = 0; i < text3.length; i++) {
//   setTimeout(() => {
//     document.getElementsByClassName('text1')[2].innerHTML += text3[i];

//   }, i * 100);
// }

// const text4 = 'How to create a checkbox in HTML?';
// for (let i = 0; i < text4.length; i++) {
//   setTimeout(() => {
//     document.getElementsByClassName('text1')[3].innerHTML += text4[i];

//   }, i * 100);
// }