Blocked_websites = []

document.getElementById("add-website-button").addEventListener("click", AddWebsite);

function AddWebsite() {
    let the_website_url = document.getElementById("website-url").value;
    if(!Blocked_websites.includes(the_website_url)){

        console.log("The Website Is Added!");

        Blocked_websites.push(the_website_url);

        let li = document.createElement('li');
        li.style.width="fit-content";
        li.style.display="flex";
        li.style.margin="5px";
        li.style.border="solid";
        li.style.borderRadius="20px";
        li.style.backgroundColor="rgb(247, 174, 64)";
        li.style.padding="5px";

        

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
        button.addEventListener("click", function(){RemoveWebsite(the_website_url)});
        li.appendChild(button);
        
        document.getElementById("container").appendChild(li);

        console.log(Blocked_websites);
        
    }
}




document.getElementById("remove-website-button").addEventListener("click", function(){RemoveWebsite("kkkkkkkkkkkkkkkkkkkkkkkkk")}); //To-do: add the website url of the current remove button instead of the temp "kkkkkkkkkkkkkkkkkkkkkkkkkkkk"


function RemoveWebsite(website_url_to_be_removed) {
    let the_website_url = document.getElementById("remove-website-button").value;
    Blocked_websites.indexOf(the_website_url) !== -1 && Blocked_websites.splice(Blocked_websites.indexOf(the_website_url), 1); //to make sure that the block list contains only unique values
    Blocked_websites = Blocked_websites.filter(arrayItem => arrayItem !== website_url_to_be_removed); // Remove the website from the block list
    
    if(Blocked_websites.length > 0){
        console.log("The Website Is Removed!, and the new list is : \n" + Blocked_websites);
    }else{
        console.log("All The Website Are Removed!");
    }

    // document.getElementById("remove-website-button").remove();
}