const checkbox = document.querySelectorAll(".check-box");
console.log(checkbox);
const deleteButton = document.getElementById("delete-button");
var href = "/delete-tasks";
var checkCount = 0;
for(let check of checkbox){
    check.addEventListener('click', function(event){
            if(check.checked == true){
                console.log(check.value);
                if(checkCount == 0)
                    href = href + "/" + check.value
                else
                    href = href + "&" + check.value
                checkCount++;
                
            }
            else{
                if(checkCount==1)
                    href = href.replace("/" + check.value, "");
                else{
                    if(href.includes("&" + check.value))
                        href = href.replace("&" + check.value, "");
                    else
                        href = href.replace(check.value + "&", "");
                }
                    
                checkCount--;
            }
            console.log(href);
            deleteButton.setAttribute('href', href);
            if(checkCount == 0)
                deleteButton.setAttribute('href', "/delete-tasks/1");
            
    
    })
}
