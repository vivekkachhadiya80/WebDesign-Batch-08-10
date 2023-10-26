/* Javascript Map Methods */

/*

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map

*/

/* Methods */

{
    /* You can create a Map by passing an Array to the new Map() constructor */

    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , "vivek"],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    // document.getElementById("new").innerHTML = Data.get("option-4");

}

{
    /* The set() method can also be used to change existing Map values */

    // const newmap = new Map();

    // newmap.set("item-1" , "car");
    // newmap.set("item-2" , "bus");
    // newmap.set("item-3" , "truck");

    // document.getElementById("set1").innerHTML =newmap.get("item-3");
}

{
    /* The get() method gets the value of a key in a Map */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // newmap.set("item-1" , "truck");
    // document.getElementById("set2").innerHTML = newmap.get("item-1");

}

{
    /* The size property returns the number of elements in a Map */

    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    // const sizes = Data.size;
    // document.getElementById("size").innerHTML =sizes;
}  

{
    /* The delete() method removes a Map element */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // const deletes = newmap.delete("item-2");
    // document.getElementById("deletes").innerHTML =deletes;
    // document.getElementById("deletes1").innerHTML =newmap.size;
} 

{
    /* The has() method returns true if a key exists in a Map */
    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    // const hass = Data.has("option-5");
    // document.getElementById("size1").innerHTML =hass;

    // const hasss = Data.has("option-5");
    // document.getElementById("size2").innerHTML =hasss;
}

{
    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    
    // Data.delete("option-5");

    // const hasss = Data.has("option-5");
    // document.getElementById("has1").innerHTML =hasss;

    // document.getElementById("size3").innerHTML =Data.size;
}

/* Note : forEach() after function lecture */

{
    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // let mapitem = "";

    // for(const x of newmap.entries()){
    //     mapitem += x + "<br>" ;
    // }

    // document.getElementById("element").innerHTML = mapitem;
}

