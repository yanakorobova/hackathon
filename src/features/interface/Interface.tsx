import React, {useEffect, useState} from 'react';
import s from './Interface.module.scss';
import {DaDataParty, DaDataSuggestion, PartySuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {PartyAPI, token} from "../../app/main-api";
import {Card} from "../../common/components/Card/Card";


export const Interface = () => {

    const [value, setValue] = useState<DaDataSuggestion<DaDataParty> | undefined>();
    const [branches, setBranches] = useState<any[]>()
    const [party, setParty] = useState<any>()
    const [error, setError] = useState('');

    const getBranches = async () => {
        try {
            const result = await PartyAPI.getParty({query: value?.data.inn})
            setParty(result.data.suggestions[0])
            setBranches(result.data.suggestions.slice(1))
            setValue(undefined)
        } catch (e) {
            //@ts-ignore
            setError(e.message)
        }
    }
    useEffect(() => {
        value !== undefined && getBranches()
    }, [value])

    return (
        <div className={s.partyBlock}>
            <div className={s.container}>
                <div className={s.combobox}>
                    <PartySuggestions token={token} value={value} onChange={setValue}
                                      inputProps={{placeholder: 'Search party by address, name or inn...'}} delay={500}
                    />
                </div>
                <div className={s.body}>
                    {party ? <Card party={party} branches={branches}/> : error ? error : <p>Change your search options to get information.</p>}
                </div>
            </div>

        </div>
    );
};

