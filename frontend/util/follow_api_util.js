export const fetchAllFollows = () => {
    $.ajax({
        method: 'GET',
        url: 'api/follows'
    })
}