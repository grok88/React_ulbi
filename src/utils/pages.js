export const getPages = (totalPages, limit) => {
    return Math.ceil(totalPages / limit);
}

export const pagesArray = (totalPages) => {
    const result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
}