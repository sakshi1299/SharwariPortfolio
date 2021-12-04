fetch('script/BlogsData.json' )
.then(function (response) {
    return response.json();
})
.then(function (data) {
   Blogs(data);
    console.log(data)
})
.catch(function (err) {
    console.log('error: ' + err);
});
function Blogs(data) {
    var mainContainer1 = document.getElementById("two-panel");
    for (var i = 0; i < data.length; i++) {
        var link = document.createElement("a");
        link.setAttribute('href' , data[i].link)
        link.setAttribute('target' , "_blank")
        link.style.textDecoration="none";
        link.style.color = "black"
        var div = document.createElement("div");
        div.classList.add('card');
        link.appendChild(div)
        var img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src =data[i].image;
        div.appendChild(img);
        var overlayDiv = document.createElement("div");
        overlayDiv.classList.add("overlay");
        var overlayText = document.createElement("div")
        overlayText.classList.add("text");
        overlayText.innerHTML = "View Blog" ;
        overlayDiv.appendChild(overlayText);
        div.appendChild(overlayDiv);
        var card_body = document.createElement("div");
        card_body.classList.add("card-body");
        div.appendChild(card_body);
        var heading= document.createElement("h5");
        heading.classList.add("card-heading");
        heading.innerHTML = data[i].title;
        card_body.appendChild(heading);
        mainContainer1.appendChild(link);
       // mainContainer.onclick=window.location(data[i].link)
    }
    console.log(mainContainer1)
}