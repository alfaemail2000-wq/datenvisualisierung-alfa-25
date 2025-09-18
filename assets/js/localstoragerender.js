const localstoragerender = {
    renderSavedData(containerSelector, storageKey = "HRFormData") {
      const savedData = window.localStorage.getItem(storageKey);
      if (!savedData) return;
  
      const dataObj = JSON.parse(savedData);
      const container = document.querySelector(containerSelector);
      if (!container) return;
  
      // Clear previous content
      container.innerHTML = "";
  
      for (const [key, value] of Object.entries(dataObj)) {
        const labelDiv = document.createElement("div");
        labelDiv.style.fontWeight = "bold";
        labelDiv.style.marginTop = "10px";
        labelDiv.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ":";
  
        const valueH1 = document.createElement("h1");
        valueH1.textContent = value;
        valueH1.style.color = "#1e90ff";
        valueH1.style.fontSize = "24px";
  
        container.appendChild(labelDiv);
        container.appendChild(valueH1);
      }
    }
  };
  