function updateBrowser(){

        var eventDate = document.getElementById("eventDate").value;
        
        if(eventDate == ""){
                document.getElementById('result').innerHTML ="Please pick a date to calculate"
        }else{
                var todayDate = new Date();
               
                var today = todayDate.getTime();

                eventDate = new Date(eventDate);
                
                var eventDate = eventDate.getTime(eventDate);

                var difference = today - eventDate;

                var minutes = Math.floor(difference/60000);
                
                var hours = Math.floor(difference/3600000);

                var days = Math.floor(difference/86400000);

                var weeks = Math.floor(difference/604800000);

                var years = Math.floor(difference/(365 * 86400000));

                document.getElementById('result').innerHTML = "Displaying Years, Weeks, Days, hours, Minutes from picked date to today :" + "<br>" 
                                                                + "<br>" + "years = " + years  + "<br>" + "Weeks = " + weeks  + "<br>" + "Days = "
                                                                + days  + "<br>" + "Hours = " + hours  + "<br>" + "Minutes = " + minutes; 
        
        }

}       




