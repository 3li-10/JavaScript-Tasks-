    let inheritance = window.prompt("Enter The Inheritance Value")

    let wife = window.prompt("does he have wife")
    
    let children = window.prompt("does he have children")
if (wife == "yes" , children == "yes") {
        let numWife = window.prompt("how many wifes does he have")
        let wifeInheritance = ( (1/8) * inheritance) / numWife
        console.log(`Wife Inheritance ${wifeInheritance}`)
        let boys = window.prompt("how many boys he have ")
        let girls = window.prompt("how many girls he have ")
        let sections = (inheritance - (wifeInheritance * numWife)) / (boys * 2) + (girls * 1)
        let boyInheritance =  sections * 2
        let girlInheritance = sections * 1
        console.log(`the boy Inheritance ${boyInheritance} the girl Inheritance ${girlInheritance} `)
    }   else {
        let numWife = 0
        let wifeInheritance = 0
        console.log(`Wife Inheritance ${wifeInheritance}`)
        let boys = 0
        let girls = 0
        let sections = (inheritance - (wifeInheritance * numWife)) / (boys * 2) + (girls * 1)
        let boyInheritance =  sections * 2
        let girlInheritance = sections * 1
        console.log(`the boy Inheritance ${boyInheritance} the girl Inheritance ${girlInheritance} `)
    }
    
   
// if (children == "yes") {
//         let boys = window.prompt("how many boys he have ")
//         let girls = window.prompt("how many girls he have ")
//         let sections = (inheritance - (wifeInheritance * numWife)) / (boys * 2) + (girls * 1)
//         let boyInheritance =  sections * 2
//         let girlInheritance = sections * 1
//         console.log(`the boy Inheritance ${boyInheritance} the girl Inheritance ${girlInheritance} `)
//     } else {
//         let boys = 0
//         let girls = 0
//         let sections = (inheritance - (wifeInheritance * numWife)) / (boys * 2) + (girls * 1)
//         let boyInheritance =  sections * 2
//         let girlInheritance = sections * 1
//         console.log(`the boy Inheritance ${boyInheritance} the girl Inheritance ${girlInheritance} `)
//     }
    
// let wifeInheritance = (1/8) * nheritance
