/* Declaring DOM VAriable*/
let userEnterText=document.getElementById("usertext");
let userEnterUrl=document.querySelector(".userimgurl");
let postBtn = document.querySelector(".postbtn");


// postBtn.addEventListener('click',()=>{ 
// if(userEnterText.value == " " && userEnterUrl.value == " "){
    
//     alert("Enter Text and URL");

 
// }
// else 
// {
// }
//     display();
//     userEnterText.value = " ";
//     userEnterUrl.value = " ";

// });
  

postBtn.addEventListener('click',()=>{ 

    display();
    userEnterText.value = " ";
    userEnterUrl.value = " ";

});

function display(){

  
        /* create a card html using  JAVASCRIPT*/
        let bodyElement=document.body;
        let cardElement=document.createElement('div');
        let imageContainer=document.createElement('div');
        let infoContainer=document.createElement('div');
        let imageElement=document.createElement('img')
        let paragraphElement=document.createElement('p');


        /*adding classes to above declared element*/
        cardElement.className="card";
        imageContainer.className="image-container";
        infoContainer.className="text";
        imageElement.className="image";
        paragraphElement.className="userinput";
        

        
      // imageElement.src=`${item.img};`
          imageElement.src=document.querySelector(".userimgurl").value;
      // paragraphElement.innerHTML=`${item.text}`;
        paragraphElement.innerHTML= document.getElementById("usertext").value;
        bodyElement.appendChild(cardElement);
        cardElement.append(imageContainer,infoContainer)
        imageContainer.appendChild(imageElement);
        infoContainer.appendChild(paragraphElement);


        bodyElement.appendChild(cardElement);
        cardElement.append(imageContainer,infoContainer)
        imageContainer.appendChild(imageElement);
        infoContainer.appendChild(paragraphElement);
 
}







