var inputBrand=document.getElementById("inputBrand");
var inputName=document.getElementById("inputName");
var inputSystem=document.getElementById("inputSystem");
var inputProcessor=document.getElementById("inputProcessor");
var inputColor=document.getElementById("inputColor");
var inputPrice=document.getElementById("inputPrice");
var inputUrl=document.getElementById("inputUrl");

var BtnProduct=document.getElementById("btnProduct");
var BtnStatus="Create";
var UpPro;

var ProList=[];


if(localStorage.getItem("Product")!=null){
    ProList=JSON.parse(localStorage.getItem("Product"))
    displayProduct();
}else{
    ProList=[]
}


function AddPro(){
    var Product={
        brand:inputBrand.value,
        name:inputName.value,
        system:inputSystem.value,
        processor:inputProcessor.value,
        color:inputColor.value,
        price:inputPrice.value,
        url:inputUrl.value,
    }

    if(BtnStatus==="Create"){
        ProList.push(Product)
    }
    
    else{
        ProList[UpPro]=Product;
        BtnStatus="Create";
        BtnProduct.innerText='Add Product'
    }


    localStorage.setItem("Product",JSON.stringify(ProList))
    displayProduct();
    clearProduct();
    console.log(ProList);

}



function displayProduct() {
    cartona=``;
    for (var i = 0; i < ProList.length; i++) {
        cartona+=`
        <tr>
                    <td class="text-center">${i+1}</td>
                    <td class="text-center">${ProList[i].brand}</td>
                    <td class="text-center">${ProList[i].name}</td>
                    <td class="text-center">${ProList[i].system}</td>
                    <td class="text-center">${ProList[i].processor}</td>
                    <td class="text-center">${ProList[i].color}</td>
                    <td class="text-center">${ProList[i].price}</td>
                    <td class="text-center"><button class="btn btn-outline-success" onclick="visitProduct(${i}) " >Visit</button></td>
                    <td class="text-center"><button class="btn btn-outline-warning" onclick="updateProduct(${i})" >UpDate</button></td>
                    <td class="text-center"><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>

        `
        
    }
    document.getElementById("Probody").innerHTML=cartona;
}


function clearProduct() {

    inputBrand.value=''
    inputName.value=''
    inputSystem.value=''
    inputProcessor.value=''
    inputColor.value=''
    inputPrice.value=''
    inputUrl.value=''
    
}

function deleteProduct(index){
    ProList.splice(index,1);
    displayProduct();
    localStorage.setItem("Product",JSON.stringify(ProList))
}


function updateProduct(index){
    inputBrand.value=ProList[index].brand,
    inputName.value=ProList[index].name,
    inputSystem.value=ProList[index].system,
    inputProcessor.value=ProList[index].processor,
    inputColor.value=ProList[index].color,
    inputPrice.value=ProList[index].price,
    inputUrl.value=ProList[index].url,
    BtnProduct.innerText='Update',
    BtnStatus='Update',
    UpPro=index;
}


function visitProduct(index) {
    window.open(ProList[index].url);
}

function searchProduct(index) {
     cartona=``;
    for (var i = 0; i < ProList.length; i++) {
       if (ProList[i].brand.toLowerCase().includes(index.toLowerCase())==true) {
        ProList[i].newBrand=ProList[i].brand.replace(index,`<span class="text-danger fw-bolder">${index}</span>`)
        cartona+=`
        <tr>
                    <td class="text-center">${i+1}</td>
                    <td class="text-center">${ProList[i].newBrand?ProList[i].newBrand:ProList[i].brand}</td>
                    <td class="text-center">${ProList[i].name}</td>
                    <td class="text-center">${ProList[i].system}</td>
                    <td class="text-center">${ProList[i].processor}</td>
                    <td class="text-center">${ProList[i].color}</td>
                    <td class="text-center">${ProList[i].price}</td>
                    <td class="text-center"><button class="btn btn-outline-success" onclick="visitProduct(${i}) " >Visit</button></td>
                    <td class="text-center"><button class="btn btn-outline-warning" onclick="updateProduct(${i})" >UpDate</button></td>
                    <td class="text-center"><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>
        `
    }}
    document.getElementById("Probody").innerHTML=cartona;
       }
        
    
function validationProductBrand() {
    var regex=/^[A-Z][a-z]{3,8}$/
    if (regex.test(inputBrand.value)) {
        document.getElementById("brandError").classList.add("d-none");
    }else{
        document.getElementById("brandError").classList.remove("d-none");
    }}


function validationProductName() {
    var regex=/\w/
    if (regex.test(inputName.value)) {
        document.getElementById("NameError").classList.add("d-none");
    }else{
        document.getElementById("NameError").classList.remove("d-none");
    }}


function validationProductPrice() {
    var regex=/^[0-9]{2,6}$/
    if (regex.test(inputPrice.value)) {
        document.getElementById("priceError").classList.add("d-none");
    }else{
        document.getElementById("priceError").classList.remove("d-none");
    }}