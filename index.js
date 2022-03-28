

function convertAndWriteBtnFunc() {
//get input data
 var valueAll=document.getElementById('inpt').value;

//check if there are commas
    var includeOrNot= valueAll.includes(',');


  //if includes seperate by commas and keep in array
  if(includeOrNot===true) {
  var splitted=valueAll.split(',');
    var splittedCount=splitted;   store_Values();
  }
  else {
    bootbox.alert('wrong format detected. Try again.');

  }
//check if there are at least 3 elements in array and they cointain at least 2-3 characters in each
  if(splitted[0].length<1 || splitted[1].length<2 || splittedCount.length<3 ||
     splitted[2].length<2 || splitted[2]=="" || typeof splitted[0]==='undefined'||
     typeof splitted[1]==='undefined'|| typeof splitted[2]==='undefined'
     || typeof splitted==='undefined'
     || splitted.length<3 || splitted[0].length>20 ||splitted[1].length>20||splitted[2].length>21 || splitted.length>22 || splitted[3].length>20
     ||splitted[4].length>20 ||splitted[5].length>20 ||splitted[6].length>20 ||splitted[7].length>20 ||
     splitted[8].length>20 ||splitted[9].length>20 ||splitted[10].length>20 ||splitted[11].length>20 ||splitted[12].length>20 ||
    splitted[13].length>20 ||splitted[14].length>20 ||splitted[15].length>20 ||splitted[16].length>20 ||
    splitted[17].length>20 ||splitted[18].length>20 ||splitted[19].length>20 ||splitted[20].length>20) { bootbox.alert('wrong format detected. Try again!');
                                                                                                        errorFound_erase_Values(); }






  function store_Values() {

     splittedData_no_0  = splitted[0];
     splittedData_no_1  = splitted[1];
    splittedData_no_2  =  splitted[2];
     splittedData_no_3  = splitted[3];
     splittedData_no_4 = splitted[4];
    splittedData_no_5  =  splitted[5];
    splittedData_no_6  = splitted[6];
     splittedData_no_7  = splitted[7];
     splittedData_no_8  = splitted[8];
    splittedData_no_9  =  splitted[9];
     splittedData_no_10  = splitted[10];
    splittedData_no_11  =  splitted[11];
  splittedData_no_12  =  splitted[12];
   splittedData_no_13  =  splitted[13];
    splittedData_no_14  =  splitted[14];
   splittedData_no_15  =   splitted[15];
   splittedData_no_16  =   splitted[16];
    splittedData_no_17  =  splitted[17];
   splittedData_no_18  =   splitted[18];
    splittedData_no_19  =  splitted[19];
    splittedData_no_20  =  splitted[20];
    splittedData_no_21  =  splitted[21];
console.log('current stored values for the column respectively (stored in JS variables): '+ splittedData_no_0+','+splittedData_no_1 +','+
            splittedData_no_2+','+splittedData_no_3   +','+ splittedData_no_4  +','+ splittedData_no_5  +','+
            splittedData_no_6  +','+
           splittedData_no_7  +','+ splittedData_no_8  +','+ splittedData_no_9  +','+ splittedData_no_10  +','+
            splittedData_no_11  +','+ splittedData_no_12  +','+ splittedData_no_13
             +','+  splittedData_no_14  +','+ splittedData_no_15  +','+ splittedData_no_16
           +','+  splittedData_no_17  +','+ splittedData_no_18  +','+ splittedData_no_19  +','+ splittedData_no_20  +','+
            splittedData_no_21);


//convert splittedData_no_2 (third element) and ascending into ASCII/UTF-8 binary and store in new variables
for(i=0;i<splittedData_no_2.length;i++)  {
var binaryArray_2= splittedData_no_2.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_3.length;i++)  {
var binaryArray_3= splittedData_no_3.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_4.length;i++)  {
var binaryArray_4= splittedData_no_4.charCodeAt(i).toString(2)+" ";
  }
  for(i=0;i<splittedData_no_5.length;i++)  {
var binaryArray_5= splittedData_no_5.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_6.length;i++)  {
var binaryArray_6= splittedData_no_6.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_7.length;i++)  {
var binaryArray_7= splittedData_no_7.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_8.length;i++)  {
var binaryArray_8= splittedData_no_8.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_9.length;i++)  {
var binaryArray_9= splittedData_no_9.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_10.length;i++)  {
var binaryArray_10= splittedData_no_10.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_11.length;i++)  {
var binaryArray_11= splittedData_no_11.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_12.length;i++)  {
var binaryArray_12= splittedData_no_12.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_13.length;i++)  {
var binaryArray_13= splittedData_no_13.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_14.length;i++)  {
var binaryArray_14= splittedData_no_14.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_15.length;i++)  {
var binaryArray_15= splittedData_no_15.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_16.length;i++)  {
var binaryArray_16= splittedData_no_16.charCodeAt(i).toString(2)+" ";
  }
   for(i=0;i<splittedData_no_17.length;i++)  {
var binaryArray_17= splittedData_no_17.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_18.length;i++)  {
var binaryArray_18= splittedData_no_18.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_19.length;i++)  {
var binaryArray_19= splittedData_no_19.charCodeAt(i).toString(2)+" ";
  }

    for(i=0;i<splittedData_no_20.length;i++)  {
var binaryArray_20= splittedData_no_20.charCodeAt(i).toString(2)+" ";
  }
    for(i=0;i<splittedData_no_21.length;i++)  {
var binaryArray_21= splittedData_no_21.charCodeAt(i).toString(2)+" ";
  }



  function errorFound_erase_Values() {

splittedData_no_0  = 'NaN';
 splittedData_no_1  = 'NaN';
  splittedData_no_2  = 'NaN';
    splittedData_no_3  = 'NaN';
    splittedData_no_4 = 'NaN';
  splittedData_no_5  = 'NaN';
    splittedData_no_6  = 'NaN';
   splittedData_no_7  = 'NaN';
   splittedData_no_8  = 'NaN';
  splittedData_no_9  =  'NaN';
     splittedData_no_10  = 'NaN';
    splittedData_no_11  = 'NaN';
   splittedData_no_12  = 'NaN';
   splittedData_no_13  = 'NaN';
    splittedData_no_14  = 'NaN';
  splittedData_no_15  = 'NaN';
 splittedData_no_16  =   'NaN';
  splittedData_no_17  =  'NaN';
  splittedData_no_18  =   'NaN';
  splittedData_no_19  =  'NaN';
  splittedData_no_20  =  'NaN';
  splittedData_no_21  =  'NaN';
console.log('data stored in variables splittedData_no_0 to no_21 has ben erased due to format incompatibility.');

  }







   }


}





function resetDatabase() {

if(confirm("following the upcoming steps will permanently DELETE ALL your data inside the SQL file. Click 'OK' to continue.", )) {

 deleteAllData();


    }



}

function  deleteAllData() {


document.write('<img style="width:80%" src="images/reset.png"/>');


}

 /*
let alertOfPreviewBtn;


if(splitted[0].length>2 && splitted[1].length>2 && splitted[2].length>2) {

 alertOfPreviewBtn = 'your preview is being generated!';

  }

else { alertOfPreviewBtn = 'you can not create a preview yet. Please create a table with a column and values first.';
     }

*/
function createPreview() {

bootbox.alert(alertOfPreviewBtn);

}

function download() {

  bootbox.alert('you can not download the SQL file yet. Please create a preview first. ');
  bootbox.alert('when you download your SQL file, please place it inside the folder named SQL_File ');


}












