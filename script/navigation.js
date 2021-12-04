
function handleNavigate(id)
{
    console.log(id)
    let home = document.getElementById('home')
    let about = document.getElementById('about')
    let contact = document.getElementById('contact')
    if(id==1)
    {
        home.classList.add("active");
        about.classList.remove("active");
        contact.classList.remove("active");
    }
    else if(id==2)
    {
        about.classList.add("active");
        home.classList.remove("active");
        contact.classList.remove("active");
    }
    else if(id==3)
    {
        contact.classList.add("active");
        about.classList.remove("active");
        home.classList.remove("active");
    }
}
