import React, {useEffect, useState} from 'react';
import {GeolocationDataType} from "../../common/types/types";
import s from './Geolocation.module.scss'
import {GeolacationAPI} from "../../app/main-api";

export const Geolocation = () => {
    const [position, setPosition] = useState<GeolocationDataType>({})
    const [error, setError] = useState('');
    const [city, setCity] = useState('')

    const onChange = (position: GeolocationPosition) => {
        setPosition({lat: position.coords.latitude, lon: position.coords.longitude});
    };
    const onError = (error: GeolocationPositionError) => {
        setError(error.message)
    };
    const getCity = async () => {
        try {
            const result = await GeolacationAPI.getCity(position)
            setCity(result.data.suggestions[0].data.city_with_type)
        } catch (e) {
            //@ts-ignore
            setError(e.message)
        }

    }

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            return;
        }
        const watcher = geo.watchPosition(onChange, onError);
        position.lat !== undefined && getCity()

        return () => geo.clearWatch(watcher);
    }, [position.lat, position.lon]);

    return (
        <div className={s.geolocationBlock}>
            <div className={s.container}>
                {error ? error : <>
                    <div>
                        <h2>Сoordinates</h2>
                        <p><b>Latitude:</b> {position.lat}</p>
                        <p><b>Longitude:</b> {position.lon}</p>
                    </div>
                    <div>
                        <h2>City</h2>
                        {city}
                    </div>
                </>}
            </div>
        </div>
    );
};

