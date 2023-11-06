import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMoon, faEnvelope, faBell, faExpand} from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
        <>
            <nav className="flex  justify-between h-14 bg-black text-white">
                <div className="flex my-auto justify-end text-lg">
                    <ul className="flex mx-3">
                        <li className="mx-4">
                            <img className="h-10 w-14" src="https://sunpay.co.in/images/Company/cdea4e22-259e-4648-a51a-6a42e20e0a1f.png" />
                        </li>
                        <li className="mx-4">
                        <FontAwesomeIcon icon={faBars} />
                        </li>
                        <li className="mx-4">Serviec</li>
                        <li className="mx-4">My Service</li>
                    </ul>
                </div>
                <div className="my-auto justify-end">
                    <ul className="flex ">
                        <li className="mx-3 rounded"><FontAwesomeIcon icon={faUser} /></li>
                        <li className="mx-3 rounded"><FontAwesomeIcon icon={faMoon} /></li>
                        <li className="mx-3 rounded"><FontAwesomeIcon icon={faEnvelope} /></li>
                        <li className="mx-3 rounded"><FontAwesomeIcon icon={faBell} /></li>
                        <li className="mx-3 rounded"><FontAwesomeIcon icon={faExpand} /></li>
                        <li className="mx-3 rounded"><FontAwesomeIcon icon={faBars} /></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;