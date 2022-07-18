export const fetchAllKudos = () => {
    return $.ajax({
        url: 'api/kudos',
        method: 'GET'
    })
}

export const createKudo = kudo => {
    return $.ajax({
        url: 'api/kudos',
        method: 'POST',
        data: {kudo}
    })
}

export const deleteKudo = kudoId => {
    return $.ajax({
        url: `api/kudos/${kudoId}`,
        method: 'DELETE',
        data: {kudoId}
    })
}