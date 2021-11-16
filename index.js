
var i=0;
var updatedImage=[
    "0.jpeg",
    "9.jpeg",
    "78.jpeg",
    "97.jpeg"
    ]
    //debug the code to store list
    var updatedName=[
    "Me (Adwit Samant)",
    "Small brother (Arin Samant)",
    "Mom (Arati Prabhu)",
    "Dad (Waman Samant)",
    ];
    
function update(){
    document.getElementById("img1").src=updatedImage[i];
 
    document.getElementById("lblName").innerHTML = updatedName[i];
    i++;
    if(i==4){
        i= 0;
    }
  }
