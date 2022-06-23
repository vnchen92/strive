export const fetchAllFollows = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/follows'
    })
}