$(document).ready(()=> {
    $(".click").click(()=> {
        $(".dsgn-hidden").toggle();
        $(".dsgn-showing").toggle();
    });
    $(".click2").click(()=> {
        $(".dvt-hidden").toggle();
        $(".dvt-showing").toggle();
    });
    $(".click3").click(()=> {
        $(".mmgt-hidden").toggle();
        $(".mmgt-showing").toggle();
    });
    $(".buttonsend").click(()=>{
        const user = document.getElementById('name').value;
        alert("Hello there " + user + " your message has been received.");
        return false;
        
    });
});
