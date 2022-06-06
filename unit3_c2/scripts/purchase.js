function purchased(){
    let arr=JSON.parse(localStorage.getItem("purchase"))||[];
    arr.forEach(element => {
        div=document.createElement("div");
        div.setAttribute("class","vouchers");
        image=document.createElement("img");
        image.src=element.Images;
        names=document.createElement("h3");
        names.innerText=element.Name;
        Price=document.createElement("h3");
        Price.innerText=element.Price;
        div.append(image,names,Price);
        document.getElementById("purchased_vouchers").append(div);
    });
}
purchased();
results=JSON.parse(localStorage.getItem("user"));
document.getElementById("wallet_balance").innerText=results.Amount;