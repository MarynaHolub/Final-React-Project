
export function calculateDiscount(price, discontPrice){
    if(!discontPrice){
        return
    }
    return Math.round(((price - discontPrice) / price) * 100);
}

