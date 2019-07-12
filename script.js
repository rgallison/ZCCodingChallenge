var size = '200px';
var container = document.getElementById("container");
var greeting = document.createTextNode('Awaiting Words of Wisdom...');
document.body.insertBefore(greeting, container);
//container.style.width = "1200px";
//container.style.height = size;
//container.style.margin = "0 auto";





for (i = 0; i < 5; i++) {
    
    var rankTextNode = document.createTextNode("Rank: ");
    //rankTextNode.className = 'rankTextNode';
    
    var statusTextNode = document.createTextNode('Status: Pending');
    //statusTextNode.className = 'statusTextNode';
    
    var div = document.createElement("div");
    div.appendChild(rankTextNode);
    div.appendChild(document.createElement('br'));
    div.appendChild(statusTextNode);
    div.appendChild(document.createElement('br'));
    div.className = 'box'
    

    //append styled div and its contents to container
    container.appendChild(div);
    
}

var arrayOfBoxes = document.getElementsByClassName("box");

let num = 0;

services.forEach(service => {
    service().then((value) => {
        
        var i = arrayOfBoxes[num];
        let rank = num + 1;
        
        i.childNodes[0].nodeValue = 'Rank: ' + rank;
        i.childNodes[2].nodeValue = 'Status: Resolved';

        
        var wordsOfWisdom = document.createTextNode(value);
        i.appendChild(wordsOfWisdom);
        
        num++;
    });
})

       
        

        
        
       
      
        
        
        
        
        
        
    
    


        


