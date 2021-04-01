var index=0;
    var imgs=["images/discount.jpg","images/discount2.jpg","images/discount3.jpg"]; //posters src
    function qiehuan(){
        document.getElementById("img").src=imgs[index];
        index++;
        if(index > 2){
            index=0;    
        }
    }
  setInterval("qiehuan()",1000);  //run qiehuan() every 3 seconds


