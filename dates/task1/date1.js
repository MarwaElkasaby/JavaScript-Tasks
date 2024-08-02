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

var enDate=prompt("Please enter your birthdate in the following format (DD – MM – YYYY)");

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

function stringDate(date)
{
    if(totalValidDate(date))
    {
        var arrDate =enDate.split('-');
        
        var newDate=new Date(arrDate[2],arrDate[1]-1,arrDate[0]);
        console.log(newDate);
        var strDate=newDate.toDateString();
        alert(strDate);
    }
    else 
    {
        alert("Wrong Date Format");
    }
}

stringDate(enDate);
    



