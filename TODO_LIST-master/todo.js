//****************************/
/// check off elements

$("ul").on("click" ,"li" ,function(){
    $(this).toggleClass("checked");

    // if($(this).css("color")==="rgb(128, 128, 128)"){
    //     $(this).css({
    //         textDecoration : "none",
    //         color: "black"
    //     });
    // }else{
    //     $(this).css({
    //         textDecoration : "line-through",
    //         color: "grey"
    //     });
    // }
});


//************************ */
// click on X to delete a TODO/li

$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500 ,function(){
        $(this).remove();
    });
});


//**************/
//  the new todo
$("input[type='text']").keypress(function(event){
    if(event.which ===13){
        //take the i/p and clear box 
        var newli = $(this).val();
        $(this).val("");
        // add the new input as <li>
        $("ul").append("<li><span> <i class=\"far fa-trash-alt\"></i> </span> " + newli +"</li>");
    }
});

//  *****************/
// hide/display the input text 
$(".fa-plus").click(function(){
    $("input").fadeToggle();
})