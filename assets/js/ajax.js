"use strict"

const ajax={
     loadJSON(url, callback){
        const xhr=new XMLHttpRequest();
        xhr.open("get",url);
       
        xhr.addEventListener('load', ()=>{
            if(xhr.status==200)
          {  let  payload=xhr.response;
            payload = JSON.parse(payload);
            callback(payload)
          
          }
            
            else {console.warn('404');
            }
       
        });
        
        xhr.send()
      console.log("return xhr",xhr);
      

        return xhr
     }






}