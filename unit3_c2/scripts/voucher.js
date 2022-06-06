async function Voucher_list(){
    try{
        const vouch=await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers");
        const data= await vouch.json();
        console.log(data[0].vouchers);
        voucherlist(data[0].vouchers);
    }catch(err){
        console.log(err);
    }
}
Voucher_list();
function voucherlist(arr){
    arr.forEach(element => {
   div=document.createElement("div");
   div.setAttribute("class","voucher");
   image=document.createElement("img");
   image.src=element.image;
   Name=document.createElement("h3");
   Name.innerText=element.name;
   Price=document.createElement("h3");
   Price.innerText=element.price
   button=document.createElement("button");
   button.innerText="BUY";
   button.addEventListener("click",function () {
       event.preventDefault();
       resu=JSON.parse(localStorage.getItem("user"));
       if(resu.Amount>=element.price){
           resu.Amount-=element.price;
           alert("Hurray! Purchase Successfull");
       }else{
           alert("Insufficient Balance");
       }
       localStorage.setItem("user",JSON.stringify(resu));
      var result = JSON.parse(localStorage.getItem("purchase"))||[];
      obj={
          Name:element.name,
          Images:element.image,
          Price:element.price,
      };
      result.push(obj);
      localStorage.setItem("purchase",JSON.stringify(result));
      document.getElementById("wallet_balance").innerHTML=resu.Amount;
      
   })
   div.append(image,Name,Price,button);
   document.getElementById("voucher_list").append(div);
    });
}
res=JSON.parse(localStorage.getItem("user"));
console.log(res["Amount"]);
document.getElementById("wallet_balance").innerHTML=res.Amount;