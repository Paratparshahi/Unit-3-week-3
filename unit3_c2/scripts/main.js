function adduser(){
    event.preventDefault();
    let form=document.getElementById("forms");
    obj={
        Name:form.name.value,
        Email:form.email.value,
        Address:form.address.value,
        Amount:form.amount.value
    }
    localStorage.setItem("user",JSON.stringify(obj));
    form.name.value="";
    form.email.value="";
    form.address.value="";
    form.amount.value="";
}
