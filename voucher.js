let User=JSON.parse(localStorage.getItem("user"));
let wallet=document.getElementById("wallet_balance");
wallet.innerText=User.amount;

let url="https://masai-vouchers-api.herokuapp.com/api/vouchers";
let myData=[{"name":"Buffets","image":"https://img4.nbstatic.in/tr:w-350/622a6aa86f487a000c2bf442.jpg","price":299},{"name":"Haircuts","image":"https://img4.nbstatic.in/tr:w-350/622a6a633b031b000b44c81f.jpg","price":299},{"name":"Brunch","image":"https://img4.nbstatic.in/tr:w-350/622a69d63b031b000b44c81d.jpg","price":99},{"name":"Hair Spa","image":"https://img4.nbstatic.in/tr:w-350/622a69ad6f487a000c2bf440.jpg","price":349},{"name":"Thali","image":"https://img4.nbstatic.in/tr:w-350/6100b65a40e9df000b0f5f37.jpg","price":699},{"name":"Breakfast","image":"https://img4.nbstatic.in/tr:w-350/6100b57a1e2731000b9be705.jpg","price":149},{"name":"Pizza","image":"https://img4.nbstatic.in/tr:w-350/6100b68640e9df000b0f5f38.jpg","price":239},{"name":"Head Spa","image":"https://img4.nbstatic.in/tr:w-350/60fe5ce140e9df000b0f5bde.jpg","price":399},{"name":"Ayurvedic Massage","image":"https://img4.nbstatic.in/tr:w-350/60fe5cc340e9df000b0f5bdb.jpg","price":459},{"name":"Holiday","image":"https://img4.nbstatic.in/tr:w-350/60fe5cad40e9df000b0f5bd9.jpg","price":499}]
append(myData)

function getData(){
    fetch(url).then((response) => {
        return response.json();
    }).then((data)=>{
        
    })
}
getData()
function append(data){
    let container=document.getElementById("voucher_list")
    data.forEach(function(el){
        let image=document.createElement("img");
        image.src=el.image;

        let name=document.createElement("p")
        name.innerText=el.name;

        let price=document.createElement("p")
        price.innerText=el.price;

        let div=document.createElement("div")
        let btn=document.createElement("button")
        btn.innerText="Buy";
        btn.onclick="myClick()";
        // div.append(image,name,price);
        div.append(image,name,price,btn);

        container.append(div);
    })
    

}
