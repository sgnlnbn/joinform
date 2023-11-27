function getInput() {
  var identifier = $('#identifier').val();
  var freetext = $('#freetext').val();
  var orders = $('#orders').val();
  var output = $('#output');

  var lines = orders.split('\n');
  var toAppend = identifier;
  var result = "";

  if(freetext === "") {
    toAppend = identifier;
  } else {
    toAppend = freetext;
  }

  if (toAppend === "[WO_OrderRequest_Identifier]") {
    for (var i = 0; i < lines.length; i++) {
      if (i === lines.length - 1) {
        result += "[WO_OrderRequest_Identifier] = '" + lines[i] + "'";
      } else {
        result += "[WO_OrderRequest_Identifier] = '" + lines[i] + "' OR ";
      }
    }
  } else if (toAppend === "[WO_Service_Reference]") {
    for (var i = 0; i < lines.length; i++) {
      if (i === lines.length - 1) {
        result += "[WO_Service_Reference] = '" + lines[i] + "'";
      } else {
        result += "[WO_Service_Reference] = '" + lines[i] + "' OR ";
      }
    }
  } else if (toAppend === "[ORD_OI_Order_Request_Identifier]") {
    for (var i = 0; i < lines.length; i++) {
      if (i === lines.length - 1) {
        result += "[ORD_OI_Order_Request_Identifier] = '" + lines[i] + "'";
      } else {
        result += "[ORD_OI_Order_Request_Identifier] = '" + lines[i] + "' OR ";
      }
    }
  } else if (toAppend === "Port_ref") {
    for (var i = 0; i < lines.length; i++) {
      if (i === lines.length - 1) {
        result += "Port_Ref = '" + lines[i] + "'";
      } else {
        result += "Port_Ref = '" + lines[i] + "' OR ";
      }
    }
  } else {
    for (var i = 0; i < lines.length; i++) {
      if (i === lines.length - 1) {
        result += "'" + toAppend + "' = \"" + lines[i] + "\"";
      } else {
        result += "'" + toAppend + "' = \"" + lines[i] + "\" OR ";
      }
    }
  }

  output.text(result);

  $('#freetext').val("");
}

function clear() {
  $('#orders').val("");
}

var button = $('#button');
button.on("click", getInput);

var clearButton = $('#clearButton');
clearButton.on("click", clear);

function checkvalue(val) {
  if (val === "others") {
    $("#freetext").css("display", "block");
  } else {
    $("#freetext").css("display", "none");
  }
}

var copyTextareaBtn = $(".textareacopybtn");

copyTextareaBtn.on("click", function () {
  var copyTextarea = $('#output');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});