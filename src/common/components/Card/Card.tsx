import React, {useEffect, useState} from 'react';
import s from "../../../features/interface/Interface.module.scss";

type CardPropsType = {
    branches: any[] | undefined
    party: any
}

export const Card: React.FC<CardPropsType> = ({branches, party}) => {
    debugger
    const [partyInfo, setPartyInfo] = useState<any>()
    const setPartyInfoHandler = (b: any) => setPartyInfo(b.data)
    const backHandler = () => setPartyInfo(party.data)

    useEffect(()=>{
        setPartyInfo(party.data)
    },[party.value])
console.log(partyInfo)
    return (
        <>
            {partyInfo?.branch_type === 'BRANCH' && party?.data.branch_type === 'MAIN' && <button onClick={backHandler}>
                Back
            </button>}
            <p className={s.title}>{partyInfo?.name.short_with_opf || partyInfo?.name.full_with_opf}</p>
            <div className={s.information}>
                <ul>
                    <li><b>Name: </b>{partyInfo?.name.full_with_opf}</li>
                    <li><b>Address: </b>{partyInfo?.address.value}</li>
                    <li><b>Status: </b>{partyInfo?.state.status}</li>
                    <li><b>Management: </b>{party?.data.management?.name}, {party?.data.management?.post}</li>
                    <li><b>Opf: </b>{partyInfo?.opf.full}</li>
                    <li><b>Inn: </b>{partyInfo?.inn}</li>
                    <li><b>Registration date: </b>{partyInfo?.state.registration_date || "-/-"}</li>
                    <li><b>Liquidation date: </b>{partyInfo?.state.liquidation_date || "-/-"}</li>
                </ul>
            </div>
            {partyInfo?.branch_type === "MAIN" && <div className={s.meta}>
                <div><b>Branches: </b></div>
                {!branches?.length ? (
                    <span>There is no branches</span>
                ) : (
                    <div className={s.group}>
                        {branches?.map((b: any, i: number) => (
                            <span key={i} onClick={() => setPartyInfoHandler(b)}>
                                           {b.value}
                                        </span>
                        ))}
                    </div>
                )}
            </div>}
        </>

    );
};

