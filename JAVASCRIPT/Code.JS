/* getting all required elements */
const inputBox = document.querySelector(".Inputfield input");
const addBtn = document.querySelector(".Inputfield button");
const dateElement = document.getElementById("date");
const todolist = document.querySelector(".todolist");
const editbtn = document.querySelector(".todolist buttom")
const deleteAllBtn = document.querySelector(".footer button");




/* date  */
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);




 /* onkeyup event */
inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value; 
    if(userEnteredValue.trim() != 0){
      addBtn.classList.add("active"); 
    }else{
      addBtn.classList.remove("active"); 
    }
  }
  showTasks();
  addBtn.onclick = ()=>{ 
    let userEnteredValue = inputBox.value; 
    let getLocalStorageData = localStorage.getItem("New Todo"); 
    if(getLocalStorageData == null){ 
      listArray = []; 
    }else{
      listArray = JSON.parse(getLocalStorageData); 
    }
    listArray.push(userEnteredValue); 
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); 
    addBtn.classList.remove("active"); /* off */
  }


  function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      listArray = [];
    }else{
      listArray = JSON.parse(getLocalStorageData); 
    }

    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArray.length; 
    if(listArray.length > 0){ 
      deleteAllBtn.classList.add("active"); /* on */
    }else{
      deleteAllBtn.classList.remove("active"); /* off */
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
      newLiTag += 
    /* modify */
      `<li>  ${element} <span onclick="deletetask(${index})"; > <I class="fas fa-trash"></I> </span> <span1 onclick="completetodo(${index})"><I class="fas fa-check"></I> </span1>  <span2 onclick="editaruno(${index})"><I class="fas fa-pen-square"></I> </span2>  </li>`;
    });
    todolist.innerHTML = newLiTag; 
    inputBox.value = ""; 
  }
  
/*   delete function */
  function deletetask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); 
  }


  /* check list (tachar) */
function completetodo(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listarray = JSON.parse(getLocalStorageData);
  array_element = listarray[index];
  element_array = array_element.strike();
  listarray.splice(index, 1, element_array);
  localStorage.setItem("New Todo", JSON.stringify(listarray));
  showTasks();
}


/* delete all */
deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
}

/* editing already stablished data  */
/* To edit first you type your new info then u select de (edit button)=>(pen_in_a_box) */
function editaruno(index){
  
  let getLocalStorageData = localStorage.getItem("New Todo");
  listarray = JSON.parse(getLocalStorageData);
  let element = inputBox.value;
  
  listarray.splice(index,1, element);
  localStorage.setItem("New Todo", JSON.stringify(listarray));
  showTasks(); 
  
}