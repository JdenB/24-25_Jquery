$(document).ready(function() {
});
    function addProduct(){
        sessionStorage.setItem("price", "21.00")
        updateTotal();
    }
    function updateTotal(){
        $("input#total").val(sessionStorage.getitem("price"));
    }