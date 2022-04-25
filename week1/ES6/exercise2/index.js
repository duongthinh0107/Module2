let inventory = [

    {
        type: "machine",
        value: 5000
    },


    {
        type: "machine",
        value: 650
    },


    {
        type: "duck",
        value: 10
    },


    {
        type: "furniture",
        value: 1200
    },


    {
        type: "machine",
        value: 77
    }

]
let totalMachineValue = inventory.filter(obj=>obj.type === "machine").map(obj=> obj.value).reduce((a,b)=>a+b)


console.log(totalMachineValue)

