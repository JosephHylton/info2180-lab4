// function searchList(){
// fetch('http://localhost/info2180-lab4/superheroes.php')
//     .then(function(response){
//         return response;
//         //console.log(response);
//     })
//     .then(function(data){
//         alert(data);
//     });
// };

window.onload = function(){

    const searchBtn = document.querySelector('#btn');
    var httpReq;

    searchBtn.addEventListener('click', function(elements){

        elements.preventDefault();

        //making an AJAX request
        httpReq = new XMLHttpRequest();
        const search = document.querySelector('#search').value;
        let url = "http://localhost/info2180-lab4/superheroes.php?query=";//"superheroes.php?query= http://localhost/info2180-lab4/superheroes.php";
        httpReq.onreadystatechange = searchList;
        httpReq.open('GET', url+search, true);
        httpReq.send();
        console.log(search);
    });

    

    //handling the response to an AJAX request
    function searchList(){

        const result = document.querySelector('#result');
        

        if (httpReq.readyState === XMLHttpRequest.DONE){
            if (httpReq.status === 200){
                let response = httpReq.responseText;
                console.log(response);
                result.innerHTML = response;
                //alert(response);
            } else {
                alert('There was a problem with the request');
            }
        }
    }

};









//document.addEventListener("DOMContentLoaded", ()=>{
// $(document).ready(function(){
//     $("#btn").click(function(){
//         alert(document.querySelectorAll('test')).load("superheroes.php");
//     });
    
// });

// function searchList(){
//     alert('Working!!!'); 
// }

// const btn = document.getElementById('#btn');
// btn.addEventListener('click', searchList());



// const dbh = new XMLHttpRequest();

// dbh.onreadystatechange = function(){
//     if (dbh.readyState==4){
//         if (dbh.status==200){
//             alert(document.getElementById('test').textContent = dbh.responseText);
//         }

//         if (dbh.status==404){
//             alert(console.log('File not Found!'));
//         }
//     };

//     dbh.open('get','superheroes.php', true);
//     dbh.send();
// }

// window.onload = function() {
//     console.log("Page successfully loaded");
//     var  but = document.getElementById("btn");
//     but.addEventListener("click", dbh);
// };

//});