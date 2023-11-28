/* 
Given an array of objects / dictionaries to represent new inventory,
and an array of objects / dictionaries to represent current inventory,
update the quantities of the current inventory

if the item doesn't exist in current inventory, add it to the inventory
return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

// take 5-8 mins to write the pseudocode here:

function updateInv(currInv, newInv) {
    for (var i = 0; i < newInv.length; i++) {
        var found = false;
        for (var j = 0; j < currInv.length; j++) {
            if (currInv[j].name === newInv[i].name) {
                currInv[j].quantity += newInv[i].quantity;
                found = true;
                break;
            }
        }
        if (!found) {
            currInv.push(newInv[i]);
        }
    }
    return currInv;
}


const updatedInv1 = updateInv(currInv1, newInv1);
const updatedInv2 = updateInv(currInv2, newInv2);
const updatedInv3 = updateInv(currInv3, newInv3);
console.log(updatedInv1);
console.log(updatedInv2);
console.log(updatedInv3);

