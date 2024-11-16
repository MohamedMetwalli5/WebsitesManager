document.addEventListener('DOMContentLoaded', () => {
    const websiteInput = document.getElementById('websiteInput');
    const blockButton = document.getElementById('blockButton');
    const blockedList = document.getElementById('blockedList');
  
    // Updating the blocked list display
    const updateBlockedList = () => {
      chrome.storage.local.get(['blockedSites'], (result) => {
        blockedList.innerHTML = '';
        const sites = result.blockedSites || [];
        sites.forEach((site, index) => {
          // Creating a list item for each blocked site
          const listItem = document.createElement('li');
          listItem.textContent = site;
  
          // Adding a remove button
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.style.marginLeft = '10px';
          removeButton.style.backgroundColor = '#ff6666';
          removeButton.style.color = 'black';
          removeButton.style.border = 'none';
          removeButton.style.padding = '5px';
          removeButton.style.cursor = 'pointer';
          removeButton.style.borderRadius = '5px';
  
          // Updating the storage
          removeButton.onclick = () => {
            sites.splice(index, 1);
            chrome.storage.local.set({ blockedSites: sites }, updateBlockedList);
          };
  
          listItem.appendChild(removeButton);
          blockedList.appendChild(listItem);
        });
      });
    };
  
    // Adding a website to the block list
    blockButton.addEventListener('click', () => {
      const site = websiteInput.value.trim();
      if (site) {
        chrome.storage.local.get(['blockedSites'], (result) => {
          const sites = result.blockedSites || [];
          if (!sites.includes(site)) {
            sites.push(site);
            chrome.storage.local.set({ blockedSites: sites }, updateBlockedList);
          }
          websiteInput.value = '';
        });
      }
    });
  
    // Initializing the blocked list display
    updateBlockedList();
  });
  