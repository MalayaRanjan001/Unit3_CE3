function myFunction(){
    // event.preventDefault();
    let form=document.getElementById("form");
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value;
    var obj={};
    obj["name"]=name;
    obj["email"]=email;
    obj["address"]=address;
    obj["amount"]=amount;
    localStorage.setItem("user",JSON.stringify(obj))

    
    
}