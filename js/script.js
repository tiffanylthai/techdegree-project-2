//creating the two global variables
const listItem = document.querySelectorAll(".student-item");
const pageMax = 10;

//creating the hide function
function hide (list,page){
   const startIndex = ((page*10)-10);
   const endIndex = ((page*10)-1);
 for (let i = 0; i <list.length; i +=1){
    if(i < startIndex || i > endIndex){
    list[i].style.display = 'none';}else{
       list[i].style.display = 'block';
    }
 };
};

 //function adding page links
 function pageLinks (list){  
    //create new elements as needed  
    const newDiv = document.createElement('div');
    newDiv.className="pagination";
    const newUl = document.createElement('ul');
    const parentDiv = document.querySelector(".page");
    
    
    //place new elements under their parents
    parentDiv.appendChild(newDiv);
    newDiv.appendChild(newUl);

    //how many pages will we need to create?
    let howManyPages = list.length;
    howManyPages = howManyPages/10;
    howManyPages = Math.ceil(howManyPages)-1;

    //loop through to create all of the list elements
    for (i = 0; i <= howManyPages; i += 1){
       let li = document.createElement('li');
       let aTag = document.createElement('a');
       aTag.href = '#';
       newUl.appendChild(li);
       li.appendChild(aTag);
       aTag.textContent=i+1;
    };

    //find first li and set it to active
    const firstLi = newUl.firstElementChild;
    firstLi.className = "active";   

    //listen for click    
    newUl.addEventListener('click', (event) => {
      const allA = document.getElementsByTagName("a");

    //remove all active classes
    for (i = 0; i <= howManyPages; i += 1){
       allA[i].className = '';
    };
    //assign the clicked a as active
    event.target.className = 'active';

    //reset the page to show the correct list items
    hide(listItem, event.target.textContent); 
    });
   
 };
 

 //run the hide function to show the first page at start
 hide(listItem,1);

 //add the page links and make them functional
 pageLinks(listItem);
