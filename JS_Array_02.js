/* Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer. */
let items_Price = [250, 645, 300, 900, 50];
console.log("Before Applying 10% Off on them");
console.log(items_Price);
for(let i=0; i< items_Price.length; i++){
    items_Price[i]=items_Price[i]-items_Price[i]*0.1;
}
console.log("Afetr Applying 10% Off on them");
console.log(items_Price);