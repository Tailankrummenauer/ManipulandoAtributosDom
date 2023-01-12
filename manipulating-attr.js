function verifyEnablement(){
    var selectedValue = document.querySelector("select").value
    if (selectedValue == "disabled"){
        document.querySelector("input[name='some-text']").disabled = true
        var pElement = document.getElementById("message")
        pElement.innerText = "DESABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
        pElement.style.marginRight = "93.8%"
    }
    else{
        document.querySelector("input[name='some-text']").disabled = false
        var pElement = document.getElementById("message")
        pElement.innerText = "HABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "green"
        pElement.style.marginRight = "94.7%"
    }
}