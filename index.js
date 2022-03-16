//Define Variables
var inputicon = document.getElementsByClassName('input__icon')[0];
var inputtext = document.getElementsByClassName('input__text')[0];
var wait = document.getElementsByClassName('wait')[0];
var done = document.getElementsByClassName('done')[0];
var controlModify = true;

addWaititem("調整會議時間(範例)");
addDoneItem("驗收專案一(範例)");


//Determine the Input text
inputicon.onclick = function(){
    var inputcontent = inputtext.value.trim();
    if (inputcontent == ""){
        alert("尚未輸入項目");
    }else{
        addWaititem(inputcontent);
        inputtext.value="";
    }
}


//Add Wait Item
function addWaititem(content){
    // Define wait Element
    var waitItem=document.createElement("div");
    var waitItemText=document.createElement("div");
    var waitItemIcon=document.createElement("div");
    var waitItemIconEdit=document.createElement("div");
    var waitItemIconTrash=document.createElement("div");
    var waitItemIconDone=document.createElement("div");

    // Define wait class   
    waitItem.className="wait__item";
    waitItemText.className="wait__item__text";
    waitItemIcon.className="wait__item__icon";
    waitItemIconEdit.className="wait__item__icon__edit";
    waitItemIconTrash.className="wait__item__icon__trash";
    waitItemIconDone.className="wait__item__icon__done";

    // Add Wait Content
    waitItemText.innerHTML=content;

    // Add icon
    waitItemIconEdit.innerHTML="<i class="+'"fas fa-pencil-alt"'+"></i>";
    waitItemIconTrash.innerHTML="<i class="+'"fas fa-trash-alt"'+"></i>";
    waitItemIconDone.innerHTML="<i class="+'"far fa-check-circle"'+"></i>";

    // Add appendchild
    
    waitItemIcon.appendChild(waitItemIconEdit);
    waitItemIcon.appendChild(waitItemIconDone);
    waitItemIcon.appendChild(waitItemIconTrash);
    waitItem.appendChild(waitItemText);
    waitItem.appendChild(waitItemIcon);
    

    // Post 
    wait.appendChild(waitItem);

    // Add Modify
    waitItemIconEdit.onclick=function(ev){
        if (controlModify==true){
            controlModify=false;
            var waitItemBefore = waitItemText.innerHTML;
            waitItemText.innerHTML="<input class="+'"wait__item__text__input"'+'type="text">';
            var waitItemTextInput = document.getElementsByClassName('wait__item__text__input')[0];
            waitItemTextInput.value=waitItemBefore;
            waitItemTextInput.focus();
            ev= window.event || ev;
            ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble=ture;
            document.onclick=function(){
                waitItemText.innerHTML=waitItemTextInput.value;
                controlModify=true;
            }
        }
    }

    // Add Trash
    waitItemIconTrash.onclick=function(){
        waitItem.parentNode.removeChild(waitItem);
    }

    // Add Done
    waitItemIconDone.onclick=function(){
        if(controlModify==true){
            addDoneItem(waitItemText.innerHTML);
            waitItem.parentNode.removeChild(waitItem);
        }
    }
}

// Add addDone Item
function addDoneItem(doneContent){
    // Define Done Element
    var doneItem = document.createElement("div");
    var doneItemText = document.createElement("div");
    var doneItemIcon = document.createElement("div");
    var doneItemIconDone = document.createElement("div");
    var doneItemIconTrash = document.createElement("div");

    //Add Done class
    doneItem.className="done__item";
    doneItemText.className="done__item__Text";
    doneItemIcon.className="done__item__Icon";
    doneItemIconDone.className="done__item__Icon__done";
    doneItemIconTrash.className="done__item__Icon__trash";
    
    //Add Done Item
    doneItemText.innerHTML=doneContent;
    
    //Add Icon
    doneItemIconTrash.innerHTML="<i class="+'"fas fa-trash-alt"'+"></i>";
    doneItemIconDone.innerHTML="<i class="+'"fas fa-check-circle"'+"></i>";

    //Add appendchild
    doneItemIcon.appendChild(doneItemIconDone);
    doneItemIcon.appendChild(doneItemIconTrash);
    doneItem.appendChild(doneItemText);
    doneItem.appendChild(doneItemIcon);

    // Post
    done.appendChild(doneItem);

    // Add Trash
    doneItemIconTrash.onclick=function(){
        doneItem.parentNode.removeChild(doneItem);
    }    

    // Add Edit
    doneItemIconDone.onclick=function(){
        addWaititem(doneItemText.innerHTML);
        doneItem.parentNode.removeChild(doneItem);
    }
}

