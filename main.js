menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Panner Tikka Pizza",
    "Margherita Pizza",
    "Pepperoni Pizza"
];

function getmenu() {
    var display_array = [];
    for (i=0;i<menu_list_array.length;i++) {
        display_array.push("<h4> "+menu_list_array[i]+"<h4>")
    }
    var sorted=display_array.sort();
    var remove_commas = sorted.join(" ");
    document.getElementById("display_menu").innerHTML=remove_commas;
}

function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"

    for(var i=0;i<menu_list_array.length;i++) {
        htmldata=htmldata+'<div class="card">' + '<img src="images/pizzaImg.png"/>' +menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addmenu").innerHTML=htmldata;
}