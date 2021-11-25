function createMatrix()
{
etf = window.prompt("input the number of rows", 1);
sys = window.prompt("input the number of columns",1);
  
 for(var i=0;i<parseInt(etf,10);i++)
  {
   var rts=document.getElementById('myTable').insertRow(i);
   for(var j=0;j<parseInt(sys,10);j++)  
    {
     var rowss=  rts.insertCell(j);
     rowss.innerHTML=i+j; 
    }
   }
}