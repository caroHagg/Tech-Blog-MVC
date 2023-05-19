const updateBtn = document.querySelector("#update-btn");
const deleteBtn = document.querySelector("#delete-btn");


updateBtn.addEventListener("click",e=>{
    e.preventDefault();
    const updatePost = {
        title:document.querySelector("#tittle-post").value,
        content:document.querySelector("#content-post").value,
    }
    const id = updateBtn.getAttribute("data-post-id")    
    fetch(`/api/posts/${id}`,{
        method:"PUT",
        body:JSON.stringify(updatePost),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.replace("/dashboard")
        }else{
            alert("No updates have been made")
        }
    })

});

deleteBtn.addEventListener("click", e=>{
    e.preventDefault()
    const deleteId = deleteBtn.getAttribute("data-post-id");
    fetch(`/api/posts/${deleteId}`,{
        method:"DELETE",
    }).then(res=>{
        if(res.ok){
            location.replace("/dashboard")
        }else{
            alert("No post has been deleted")
        }
    })

})