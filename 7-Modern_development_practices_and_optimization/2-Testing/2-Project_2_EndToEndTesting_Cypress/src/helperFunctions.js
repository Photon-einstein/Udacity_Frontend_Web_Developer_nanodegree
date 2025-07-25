export const clearMain = () => {
    let main = document.querySelector("main")
    console.log(main)
    main.innerHTML = ""
}
//Takes an array of photo order objects
export const calculatePackagePrice = (packageSelections) => {
    let subtotal = packageSelections.reduce((accumulator, item) => {
        const itemTotal = item.copies * item.basePricePerCopy

        return accumulator + itemTotal
    }, 0)
    //returns a subtotal price
    return subtotal
}
