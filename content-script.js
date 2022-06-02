Blocked_websites = ["www.facebook.com"];

function IsCurrentTabBlocked(){ //to check to whether to block the current site or not
    if(Blocked_websites.includes(window.location.hostname)){
            console.log("The current page is blocked!");
            document.body.innerHTML = "The current page is blocked!";
    }
}

setInterval(IsCurrentTabBlocked, 2000);
