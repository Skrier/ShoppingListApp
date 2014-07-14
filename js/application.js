$(document).ready(function (){

        $("button").mousedown(function () {
        additem();
        });

        $("#Product").keydown(function (pressenter){
        if(pressenter.keyCode == 13) {
        additem();
        }
        });
        
        $('#list6').mousedown( function() {
           checkitem();

        });
        $('#list1').mousedown( function() {
           deleteitem();

        });
});



function additem () {
var name = $('#Product').val();
var quant = +$('#Quant').val();
var price = +$('#Price').val();
var total = price*quant;
var listitem = $('<div class="list0">'+'<div id="list1">'+'</div>'
	+'<div id="list2">'+name+'</div>'+'<div id="list3">'+quant+
	'</div>'+'<div id="list4">'+'£'+price+'</div>'+'<div id="list5">'+'£'+total+'</div>'
     +'<div id="list6">'+'</div>'+'</div>');
$("#list0").append(listitem).animate({'bottom': '10px'},'slow');

}

function checkitem () {
     $(this).closest('div').toggleClass('checked');
}

function deleteitem () {
     $(this).closest('div').remove();
}



