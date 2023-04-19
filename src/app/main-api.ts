import axios from "axios";
import {BranchDataType, GeolocationDataType, GeolocationResponseType} from "../common/types/types";

export const token  = "e75bd6dd0f40d1c13d9259ff324adf591eb26c86"

export const instance = axios.create({
    baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/",
    headers: {
        Authorization: "Token " + token
    }
})

export const GeolacationAPI = {
    getCity(data: GeolocationDataType) {
        return instance.post<GeolocationResponseType>('geolocate/address', data)
    },
}

export const PartyAPI = {
    getParty(data: BranchDataType) {
        return instance.post<GeolocationResponseType>('findById/party', data)
    },

}