const updateBtn = document.querySelector("#update-btn");
const deleteBtn = document.querySelector("#delete-btn");

updateBtn.addEventListener("click",e=>{
    e.preventDefault();
    const updatePost = {
        title:document.querySelector("#title"),
        content:document.querySelector("#content"),
    }
})