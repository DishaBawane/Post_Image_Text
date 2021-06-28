let userEnterText=document.getElementById("usertext");
let userEnterUrl=document.querySelector(".userimgurl");
let textDisplay = document.getElementById("userinput");
let imgDisplay = document.querySelector(".image");
let postBtn = document.querySelector(".postbtn");
let usertext;


let postObj = [
    {
      text: 'Beautiful Nature Image',
      img: 'https://source.unsplash.com/1600x900/?nature,water'
    },
  {
      text: 'Greyscale Image',
      img: 'https://picsum.photos/200/300?grayscale'
    },
  {
      text: 'Dog Image',
      img: 'https://picsum.photos/id/237/200/300'
    }
  ]

  userEnterText.value = postObj[0].text;
  userEnterUrl.value = postObj[0].img;

  userEnterText.value = postObj[1].text;
  userEnterUrl.value = postObj[1].img;

  userEnterText.value = postObj[2].text;
  userEnterUrl.value = postObj[2].img;




postBtn.addEventListener('click',()=>{
  
    display();
    displayimage();
 
   userEnterText.value = " ";
   userEnterUrl.value = " ";


});



function display(){

  userEnterText =  document.getElementById("usertext").value; 
 // textDisplay.innerHTML = userEnterText;
  let input = document.createElement("P");
  let txt = document.createTextNode( userEnterText);
  textDisplay.appendChild(txt);
  document.body.appendChild(input);
}


function displayimage(){

    userEnterUrl = document.querySelector(".userimgurl").value
    imgDisplay = document.querySelector(".image");
    let img =  document.createElement("IMG");
    img.src = userEnterUrl;
    img.width=515;
    img.height=273;
    imgDisplay.appendChild(img);
}





 