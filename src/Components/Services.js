import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard, faFingerprint, faMoneyBill, faQrcode, faUsersViewfinder} from '@fortawesome/free-solid-svg-icons';

function Services(){
    return(
        <>
            <div className="flex flex-col h-30 bg-white mx-20 rounded-xl my-2">
                <h2 className="self-start m-4 text-lg">|| Banking Service ||</h2>
                <ul className="flex mx-auto ">
                <li className="m-5"><FontAwesomeIcon className="text-4xl rounded-full bg-white p-2 shadow-md text-gray-800" icon={faMoneyBill} /></li>
                    <li className="m-5"><FontAwesomeIcon className="text-4xl rounded-full bg-white p-2 shadow-md text-gray-800" icon={faFingerprint} /></li>
                    <li className="m-5"><FontAwesomeIcon className="text-4xl rounded-full bg-white p-2 shadow-md text-gray-800" icon={faUsersViewfinder} /></li>
                    <li className="m-5"><FontAwesomeIcon className="text-4xl rounded-full bg-white p-2 shadow-md text-gray-800" icon={faQrcode} /></li>
                    <li className="m-5"><FontAwesomeIcon className="text-4xl rounded-full bg-white p-2 shadow-md text-gray-800" icon={faCreditCard} /></li>
                </ul>
                
            </div>
        </>
    );
}

export default Services;