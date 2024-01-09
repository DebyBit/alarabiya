grudMend();
function grudMend(){
    var getcoolloc = window.location.href
    var currento = getcoolloc.substr(getcoolloc.lastIndexOf('/') + 1);
    console.log("g", getcoolloc)
    console.log("c", currento)
    if(currento == "index.html" || currento.includes("index")){
        document.getElementById("homeLk").classList.add("active");
    }else if(currento == "about.html" || currento.includes("about")){
        document.getElementById("aboutLk").classList.add("active");
    }else if(currento == "products.html" || currento.includes("products")){
        document.getElementById("prdouctsLk").classList.add("active");
    }else if(currento == "contact.html" || currento.includes("contact")){
        document.getElementById("contactLk").classList.add("active");
    }else if(currento == "smallcapprogram.html" || currento.includes("smallcapprogram")){
        document.getElementById("prdouctsLk").classList.add("active");
    }else if(currento == "projectfunding.html" || currento.includes("projectfunding")){
        document.getElementById("prdouctsLk").classList.add("active");
    }else if(currento == "bankguarantee.html" || currento.includes("bankguarantee")){
        document.getElementById("prdouctsLk").classList.add("active");
    }else{
        document.getElementById("homeLk").classList.add("active");
    }
}