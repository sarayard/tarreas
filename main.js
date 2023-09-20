menu_list_array = [ "Veg Margarita Pizza",                  
                    "Pollo Tandoori Pizza",
                    "Veg Suprema Pizza",
                    "Paneer Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza"]; //Nombres de pizzas


function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Da el nombre de identificación apropiado como ver_menú
    document.getElementById("display_menu").innerHTML = htmldata;
}


function add_suggestion(){
    var item = document.getElementById("add_item").value;
    //Utiliza la función push() para empujar el elemento en menu_list_array
    menu_list_array.push(item);
}

pizza_list_array = [];


function getmenu()
        {    
        // Da un nombre apropiado de identificación como nombre_pizza
        var item = document.getElementById("nombre_pizza").value;
        //Agrega la función push() para introducir un elemento al array
        pizza_list_array.push(item);
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("mostrar_menú").innerHTML =  "# " + remove_commas;
        }

        menu_list_array = [ "Veg Margarita Pizza",                  
        "Pollo Tandoori Pizza",
        "Veg Suprema Pizza",
        "Paneer Tikka Pizza",
        "Deluxe Veggie Pizza",
        "Veg Extravaganza Pizza"]; //Nombres de pizzas


function getmenu()
{
var htmldata="";
for(var i=0; i<menu_list_array.length; i++)
{
htmldata=htmldata+ menu_list_array[i] + '<br>'
}
//Da el nombre de identificación apropiado como ver_menú
document.getElementById("display_menu").innerHTML = htmldata;
}


function add_suggestion(){
var item = document.getElementById("add_item").value;
//Utiliza la función push() para empujar el elemento en menu_list_array
menu_list_array.push(item);
}


