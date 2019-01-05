var blogTitle= document.getElementById("blogTitle");
var blogBody= document.getElementById("blogBody");
var blogEditArea = document.getElementById("blogEditArea");
var saveEditButton = document.getElementById("editContentButton");


//click event for editContentButton
saveEditButton.addEventListener("click",()=>{
	var blogContent='';
	if(saveEditButton.innerHTML.includes('Edit')){
		
		  saveEditButton.innerHTML='Save &nbsp <i class="fa fa-save"></i>';
          blogContent=blogBody.innerHTML.trim();
          console.log(blogContent);
		  blogBody.style.display="none";
		  blogTitle.setAttribute("contenteditable",true);
		  blogTitle.style.border= "thin solid #F02875";
		  blogEditArea.style.display="block";
	      blogEditArea.innerHTML=blogContent;
		  blogEditArea.focus();
		  blogEditArea.setSelectionRange(0, 0);



	}else{
		blogContent= blogEditArea.value;
		console.log(blogContent);
		saveEditButton.innerHTML='Edit'; 
		blogTitle.setAttribute("contenteditable",false);
		blogTitle.style.border="none";
		blogEditArea.style.display="none";
		blogBody.style.display="";
		blogBody.innerHTML=blogContent;
	}

});
