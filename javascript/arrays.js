// create an array
var colorList = ["Red", "Black", "White", "Blue", "Purple", "Orange", "Yellow"];

var imageListA = new Array();
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";
imageListA[17] = "images/drawing/thumbs/artwork_18.jpg";
imageListA[18] = "images/drawing/thumbs/artwork_19.jpg";
imageListA[19] = "images/drawing/thumbs/artwork_20.jpg";
imageListA[20] = "images/drawing/thumbs/artwork_21.jpg";
imageListA[21] = "images/drawing/thumbs/artwork_22.jpg";
imageListA[22] = "images/drawing/thumbs/artwork_23.jpg";
imageListA[23] = "images/drawing/thumbs/artwork_24.jpg";
imageListA[24] = "images/drawing/thumbs/artwork_25.jpg";

var imageListB = new Array();
imageListB[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListB[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListB[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListB[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListB[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListB[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListB[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListB[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListB[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListB[9] = "images/watercolor/thumbs/artwork_10.jpg";

var imageListC = new Array();
imageListC[0] = "images/oil/thumbs/artwork_1.jpg";
imageListC[1] = "images/oil/thumbs/artwork_2.jpg";
imageListC[2] = "images/oil/thumbs/artwork_3.jpg";
imageListC[3] = "images/oil/thumbs/artwork_4.jpg";
imageListC[4] = "images/oil/thumbs/artwork_5.jpg";
imageListC[5] = "images/oil/thumbs/artwork_6.jpg";
imageListC[6] = "images/oil/thumbs/artwork_7.jpg";
imageListC[7] = "images/oil/thumbs/artwork_8.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the three thumbs div
  var thumbsDiv1 = document.getElementById("drawing-thumbs");
  var thumbsDiv2 = document.getElementById("watercolor-thumbs");
  var thumbsDiv3 = document.getElementById("oil-thumbs");
  
  //create thee output variables
  var outputA = "";
  var outputB = "";
  var outputC = "";
  //first part: counter. we set up 0 to start counting the loop
  //second part: condition. the loop will keep looping as long as the condition is true
  //third part: incrementor. the incrementor adds one to the counter AFTER the code is executed in the brackets
  for (var i=0; i < imageListA.length; i++)
  {
    outputA += '<img src="' + imageListA[i] + '">';
  }
  thumbsDiv1.innerHTML = outputA;
  //thumbsDiv.innerHTML = '<img src="' + imageList[0] + '">';  
  
  for (var j=0; j < imageListB.length; j++)
  {
    outputB += '<img src="' + imageListB[j] + '">';
  }
  thumbsDiv2.innerHTML = outputB;
  
  for (var k=0; k < imageListC.length; k++)
  {
    outputC += '<img src="' + imageListC[k] + '">';
  }
  thumbsDiv3.innerHTML = outputC;
}

window.onload = function()
{
  buildThumbnails(); // use this function
};