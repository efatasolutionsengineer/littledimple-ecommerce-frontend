export const calculatePriceAfterDiscount = (price: string, discountPercentage: string) => {
    const priceNumber = Number(price);
    const discountPercentageNumber = Number(discountPercentage);
    return priceNumber - (priceNumber * discountPercentageNumber / 100);
}

export const isDiscountNotExpired = (discountExpiresAt: string) => {
    const discountExpiresAtDate = new Date(discountExpiresAt);
    const currentDate = new Date();
    return discountExpiresAtDate > currentDate;
}