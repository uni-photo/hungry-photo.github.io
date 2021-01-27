
//TEXT SLIDING EFFECT

function scrollAppear(){

    //its grabbing text section
    let introText = document.querySelector('.about-text');

    //It is access relative position to the window
    let introPosition = introText.getBoundingClientRect().top;

    // Define how big screen it is
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition) {

        introText.classList.add('about-appear');

    }
}

window.addEventListener(`scroll`, scrollAppear);



//Slider
let i = 0 //Start point

let images = []; // Empty Array

let time = 3000; // 3 seconds

// const preBtn = document.querySelector('#prevBtn');
// const preBtn = document.querySelector('#nextBtn');


// Array Image List

images[0] = "https://cdn.pixabay.com/photo/2015/09/02/13/04/marriage-918864_960_720.jpg";
images[1] = "https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501_960_720.jpg";
images[2] = "https://cdn.pixabay.com/photo/2016/06/29/04/39/wedding-dresses-1486004_960_720.jpg";
images[3] = "https://cdn.pixabay.com/photo/2015/05/15/14/37/bride-and-groom-768594_960_720.jpg";
images[4] = "https://drscdn.500px.org/photo/290995709/m%3D900/v2?sig=abe948131b09e954e8f9a7aebb145309be790146fab791443f0130803d85e162";
images[5] = "https://drscdn.500px.org/photo/91558981/m%3D900/v2?sig=1863f85025e06e7857bfd960ac3d059a7a96817ab0ccd5cb31fbf80196008385";
images[6] = "https://drscdn.500px.org/photo/290995669/m%3D900/v2?sig=89ecc9ca58278114651999cfd23b7ce7145d99a42ca8c675f43c6af611df12ff";
images[7] = "https://drscdn.500px.org/photo/147602635/m%3D900/v2?sig=5d0511c49ed6310c128b1928727915d2d211b0d923dde5b19906868f989ba0bb";
images[8] = "https://drscdn.500px.org/photo/146961701/m%3D900/v2?sig=9a153d6b02fde32bc06621b5b6c9fceae25f961bc0fe3af4a0ef7e9f0a895c59";
images[9] = "https://drscdn.500px.org/photo/146632755/m%3D900/v2?sig=c70504b3e51564e9d7a1bef985d975f84a990267c1bf3674e85f56ae39600e04";
images[10] = "https://cdn.pixabay.com/photo/2015/05/15/14/37/bride-and-groom-768594_960_720.jpg";
images[11] = "https://cdn.pixabay.com/photo/2015/05/15/14/37/bride-and-groom-768594_960_720.jpg";




// Change Image
function changeImg(){
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if(i < images.length -1) // its -1 because position 0
    {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every 3 seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


