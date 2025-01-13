$(document).ready(function() {
});
    function addProduct(){
        sessionStorage.setItem("price", "21.00")
        sessionStorage.setItem("mKIQTY", "1")
        sessionStorage.setItem("mKIname", "Pale_Rider")

        updateTotal();
    }
    function updateTotal(){
        $("input#total").val(sessionStorage.getItem("price"));
    }