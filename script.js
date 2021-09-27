$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        var activity=$(this).siblings(".description").val().trim()
    
        console.log(activity)
    })
})