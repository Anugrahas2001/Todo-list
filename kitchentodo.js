// taking important ids

let kitchenInput=document.getElementById("kitchen_input"); //input field
let addBtn=document.getElementById("add_btn"); //add button
let kitchenItems_list=document.getElementById("kitchen_items_list"); // ul-list

//make it as global
let kitchenData;
let KitchenArray=[];

//set storage function
function setLocalStorage()
{
    localStorage.setItem("KitchenInput",JSON.stringify(KitchenArray));
}

//get storage function
function getStorage()
{
    if(localStorage.getItem("KitchenInput"))
    {
        KitchenArray= JSON.parse(localStorage.getItem("KitchenInput"));
        console.log(KitchenArray);
        buildUi();
    }
}


//create build ui function. it should be executed whwther the uuser click on the refresh button or not.
function buildUi()
{
    kitchenItems_list.textContent=" ";
     //for accessing each element from array
     KitchenArray.forEach((item)=>{
        if(item.length !==0)
       {
         //create DOM
         let li=document.createElement("li");

         //create span tag
         let span=document.createElement("span");
         li.appendChild(span);
         span.innerText=item;
         kitchenItems_list.appendChild(li);
         kitchenInput.value=" ";
         kitchenInput.focus();
         console.log(li);
     
         //create delete button
         let deleteBtn=document.createElement("i");
         deleteBtn.classList.add("fas","fa-trash");
         li.appendChild(deleteBtn);
     
     
         // cReate edit button
         let editBtn=document.createElement("i");
         editBtn.classList.add("fas","fa-edit")
         li.appendChild(editBtn);
       }
     }
     
     
     );



}


function addKitchenItems(event){
     kitchenData=kitchenInput.value;
     KitchenArray.push(kitchenData);
     console.log(KitchenArray);

    //set to local storage
    setLocalStorage();

    //get from local storage
    getStorage();
    


} 

//delete function
function deleteKitenItem(event){
    if(event.target.classList[1]==="fa-trash")
    {
        let parent=event.target.parentElement;
        // alert("Item is going to delete.")
        parent.remove();
    }
    
}
//edit function
function editKitchenItem(event)
{
    if(event.target.classList[1]==="fa-edit")
    {
        let newValue= prompt("Please enter new value");
        //Accessing parent element
        let parElement=event.target.parentElement;
        //Acessing child element-->span
        let spanel=parElement.querySelector("span");
        spanel.innerText=newValue;
        
    }
}


//calling addkitchen Function
addBtn.addEventListener("click",addKitchenItems);

//calling delete function
kitchenItems_list.addEventListener("click", deleteKitenItem);

//calling edit function
kitchenItems_list.addEventListener("click", editKitchenItem); 


// make get function as global
getStorage();


