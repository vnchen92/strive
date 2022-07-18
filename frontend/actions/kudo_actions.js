import * as KudoApiUtil from '../util/kudo_api_util';

export const RECEIVE_ALL_KUDOS = 'RECEIVE_ALL_KUDOS';
export const RECEIVE_KUDO = 'RECEIVE_KUDO';
export const REMOVE_KUDO = 'REMOVE_KUDO';

const receiveAllKudos = kudos => {
    return {
        type: RECEIVE_ALL_KUDOS,
        kudos
    }
}

const receiveKudo = kudo => {
    debugger
    return {
        type: RECEIVE_KUDO,
        kudo
    }
}

const removeKudo = kudo => {
    return {
        type: REMOVE_KUDO,
        kudo
    }
}

export const fetchAllKudos = () => dispatch => {
    return (
        KudoApiUtil.fetchAllKudos()
            .then(res => dispatch(receiveAllKudos(res)))
    )
}

export const createKudo = kudo => dispatch => {
    return (
        KudoApiUtil.createKudo(kudo)
            .then(res => dispatch(receiveKudo(res)))
    )
}

export const deleteKudo = kudoId => dispatch => {
    return (
        KudoApiUtil.deleteKudo(kudoId)
            .then(res => dispatch(removeKudo(res)))
    )
}