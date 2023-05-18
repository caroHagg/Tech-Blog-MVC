const addBtn = document.querySelector("#add-comment");

addBtn.addEventListener("click",e=>{
    e.preventDefault();
    const postId = addBtn.getAttribute("data-post-id")
    console.log("++++++++++++++"+postId)
    const newComment = {
        description: document.querySelector("#comment-txtarea").value,
        post_id:postId,
    }

    fetch("/api/comments",{
        method:"POST",
        body:JSON.stringify(newComment),
        headers:{
            "Content-Type":"application/json"
        }

    }).then(res =>{
        if(res.ok){
            location.replace(`/post/${postId}`)
        }else{
            alert("The comment wasn't added")
        }

    })
})