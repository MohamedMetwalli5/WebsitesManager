Blocked_websites = []
storage_key = "BlockedWebsites"

document.getElementById("add-website-button").addEventListener("click", AddWebsite);

function AddWebsite() {
    let the_website_url = document.getElementById("website-url").value;
    if(!Blocked_websites.includes(the_website_url)){

        console.log("The Website Is Added!");

        Blocked_websites.push(the_website_url);
        SetLocalStorage();

        let li = document.createElement('li');
        li.style.width="fit-content";
        li.style.display="flex";
        li.style.margin="5px";
        li.style.border="solid";
        li.style.borderRadius="20px";
        li.style.backgroundColor="rgb(247, 174, 64)";
        li.style.padding="5px"; 
        li.class = "remove-website-button";

        

        let label = document.createElement('label');
        label.innerHTML = "Website Url:"
        label.style.marginRight="10px";
        li.appendChild(label);



        let h7 = document.createElement('h7');
        h7.innerHTML = the_website_url;
        h7.style.marginRight="10px";
        li.appendChild(h7);
        
        
        
        let button = document.createElement('button');
        button.innerHTML = "Remove"
        button.style.marginRight="2px";
        button.style.borderRadius="20px";
        button.style.backgroundColor="rgb(244, 70, 35)";
        button.style.cursor="pointer";
        var number = "";
        var length = the_website_url.length;
        for (var i = 0; i < length; i++)
            number += the_website_url.charCodeAt(i).toString(16); //encode the website url to a string from a number in the base 16
        li.id = number.toString(16); //assign the new button container id the new encoded value
        button.addEventListener("click", function(){RemoveWebsite(the_website_url, number.toString(16))});
        li.appendChild(button);
        
        document.getElementById("container").appendChild(li);

        // console.log(Blocked_websites);
        
        
    }
}



function RemoveWebsite(website_url_to_be_removed, the_button_container_id) {
    let the_website_url = document.getElementsByClassName("remove-website-button").value;
    Blocked_websites.indexOf(the_website_url) !== -1 && Blocked_websites.splice(Blocked_websites.indexOf(the_website_url), 1); //to make sure that the block list contains only unique values
    Blocked_websites = Blocked_websites.filter(arrayItem => arrayItem !== website_url_to_be_removed); // Remove the website from the block list
    
    if(Blocked_websites.length > 0){
        console.log("The Website Is Removed!, and the new list is : \n" + Blocked_websites);
    }else{
        console.log("All The Website Are Removed!");
    }

    document.getElementById(the_button_container_id).remove(); //remove the website from the block list
}


function SetLocalStorage(){ // For storing the blocked websites locally
    chrome.storage.local.set({storage_key: Blocked_websites}, ()=> {
        console.log("Value is now ya sa7by : " + Blocked_websites);
    });
}

function GetLocalStorage(){ // For getting the localyl stored blocked websites
    chrome.storage.local.get([storage_key], (result) => {
        console.log('Value currently is : ' + result.BlockedWebsites);
    });
}
