function callMe()
{
    let Passenger = {
        name:"Saddam",
        age:15,
        reservedStatus:true,
    }

    //document.write("Hello I am Called....")
    //console.log("I am called")
    //ducument.getElementId("name").getElementId("name_tag").innerHtml = `Name:${Passenger.name}`
    //ducument.getElementId("age").getElementId("age_tag").innerHtml = `Name:${Passenger.age}`
    //ducument.getElementId("status").getElementId("status_tag").innerHtml = `Name:${Passenger.reservedStatus}`

    
    ducument.getElementId('name').innerHtml = `<h1>Name:${Passenger.name}</h1>`;/*
   ducument.getElementId('age').innerHtml = `Age:${Passenger.age}`
   ducument.getElementId('status').innerHtml = `ReservedStatus:${Passenger.reservedStatus}`
   */
}

//document.write("Hello I am JavaScript")