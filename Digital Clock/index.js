let frhrs = document.getElementsByClassName('hour')[0]
let frmin = document.getElementsByClassName('min')[0]
let frsec = document.getElementsByClassName('sec')[0]
let frday = document.getElementsByClassName('dayname')[0]
let frdate = document.getElementsByClassName('date')[0]


function setTime() {
    
    setInterval(() => {
        var currentDate = new Date(); 
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        var day = currentDate.getDay()

        var date = currentDate.getDate()
        var month = currentDate.getMonth()
        var year = currentDate.getFullYear()


        // Update the displayed time
        if(seconds<10){
            frsec.innerText = '0'+seconds 
        }
        else{
            frsec.innerText = seconds 

        }
        
        if(hours<10){
            frhrs.innerText='0'+hours
            
        }
        else{
            frhrs.innerText = hours 
        }

        if(minutes<10){
            frmin.innerText='0'+minutes
            
        }
        else{
            frmin.innerText = minutes 
        }

        
        switch(day){
            case 0:
                frday.innerText  = 'Sunday'
            case 1:
                frday.innerText = 'Monday'
            case 2:
                frday.innerText = 'Tuesday'
            case 3:
                frday.innerText = 'Wednesday'
            case 4:
                frday.innerText = 'Thursday'
            case 5:
                frday.innerText = 'Friday'
            case 6:
                frday.innerText = 'Saturday'                        
        }

        frdate.innerText = `${date} / ${month+1} / ${year}`
        
    }, 1000);
}

setTime(); // Call setTime to start updating time immediately
