const dom = {
    mapping() {
        elements.main = document.querySelector('main')
    },

    create(
        content = false,
        tagName = "div",
        parent = false,
        className = false,
        imgSrc=false,
    ) {

            const el= document.createElement(tagName);
            if(content){el.innerHTML=content};
            if(className){el.className=className};
            if(parent){parent.append(el)};
            if(imgSrc){el.src=imgSrc}
            console.log("this isel",el);
            console.log("this is content", el.innerHTML,content);
            
            
            
            return el;

    },

    

   



}