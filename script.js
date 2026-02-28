console.log("hello world");

const likeButton = document.querySelector("#like");
likeButton.addEventListener('click', (event) =>
{
    //console.log(likeButton.innerHTML);
    //console.log('like button has been clicked');
    likeButton.innerHTML='Liked';
    document.text_updated.innerHTML = "Hello World";
    //likeButton.style.backgroundcolor(Green);
});
