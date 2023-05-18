const updateBtn = document.querySelector("#update-btn");
const deleteBtn = document.querySelector("#delete-btn");

updateBtn.addEventListener("click",e=>{
    e.preventDefault();
    const updatePost = {
        title:document.querySelector("#tittle-post").value,
        content:document.querySelector("#content-post").value,
        id:updateBtn.getAttribute("data-post-id")
    }
    console.log(updatePost)
})