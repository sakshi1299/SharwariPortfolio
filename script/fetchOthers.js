fetch('script/OthersData.json' )
.then(function (response) {
    return response.json();
})
.then(function (blogs) {
   getOthers(blogs);
    console.log(blogs)
})
.catch(function (err) {
    console.log('error: ' + err);
});
var caseStudy;
function getOthers(blogs) {
    var mainContainer = document.getElementById("three-panel");

    for (var i = 0; i < blogs.length; i++) {
        var link = document.createElement("a");
        link.setAttribute('href' , blogs[i].link)
        link.setAttribute('target' , "_blank")
        link.style.textDecoration="none";
        link.style.color = "black" ;
        var div = document.createElement("div");
        div.classList.add('card');
        link.appendChild(div);
        var img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src =blogs[i].image;
        div.appendChild(img);
        var overlayDiv = document.createElement("div");
        overlayDiv.classList.add("overlay");
        var overlayText = document.createElement("div")
        overlayText.classList.add("text");
        overlayText.innerHTML = blogs[i].title  ;
        overlayDiv.appendChild(overlayText);
        div.appendChild(overlayDiv);
        var card_body = document.createElement("div");
        card_body.classList.add("card-body");
        div.appendChild(card_body);
        var heading= document.createElement("h5");
        heading.classList.add("card-heading");
        heading.innerHTML = blogs[i].title;
        card_body.appendChild(heading);
        // var desc = document.createElement("p");
        // desc.classList.add("card-desc")
        // desc.innerHTML = blogs[i].description;
        // card_body.appendChild(desc);
        mainContainer.appendChild(link);
        // caseStudy = blogs[i].caseStudy;
        // div.setAttribute('onClick' , 'navigate( " '+caseStudy+' " ,  " '+blogs[i].title+' ")');
    }
}
function navigate(i , j)
{
    console.log(i);
    const url= "project.html?id="+i+"&title="+ j;
    window.location.href = url
}