import {ActionTypes} from '../core/constant';

export function setTracks(tracks){
    return {
        type : ActionTypes.TRACK_SET,
        tracks
    }
}