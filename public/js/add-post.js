
document.querySelector("#new-post-btn").addEventListener("click", e=>{
    e.preventDefault();
    const postObj = {
        title : document.querySelector("#tittle-post").value,
        content:document.querySelector("#content-post").value
    }

    fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.replace("/dashboard")
        }else{
            alert("The post wasn't added")
        }
    })




})