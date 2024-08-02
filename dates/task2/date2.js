function count(str,s)
{
    var count = 0;
for (var i = 0; i < str.length; i++)
     {
    if (str[i] == s) 
        count++;
    }
    return count;
}

function validDate(day, month, year) {
    
    if (year < 1900 || year > 2024 ||isNaN(day)) {
        return false;
    }
    
    if (month < 1 || month > 12 ||isNaN(month)) {
        return false;
    }
    
    
    //date underflow takes last day of prev. month
    var lastDay = new Date(year, month, 0).getDate();
    
    if (day < 1 || day > lastDay ||isNaN(day)) {
        return false;
    }

    return true;
}

function totalValidDate(enDate){

    var valD=false;
    
    if( (count(enDate,'-')==2))
        {
          var arrDate=enDate.split('-');  
          if(arrDate.length ==3)
        {
            
        valD=validDate(arrDate[0],arrDate[1],arrDate[2]);
        
        }
        }
        return valD;
    }
    

function dateDay(s){

    if(totalValidDate(s))
    {    
    
     var arrDate=s.split('-');
    var date=new Date(arrDate[2],arrDate[1]-1,arrDate[0]);
    var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayName=week[date.getDay()];
    return dayName;
    }
     
    alert("Wrong Date Format");
    throw "error:wrong date format try format:dd-mm-yyyy";
    
    
}
var day=dateDay("24-12-2024");
console.log(day);