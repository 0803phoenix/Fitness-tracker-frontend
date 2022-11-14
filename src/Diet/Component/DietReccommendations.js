import React from 'react';

import Footer from "../../Layout/Component/Footer";
import NavBarLogout from "../../Layout/Component/NavBarLogout";
import EndomorphReccomendation from "./EndomorphReccomendation";
import MesomorphReccomendation from "./MesomorphReccomendation";
import EctomorphReccommendation from './EctomorphReccomendation';


function DietReccommendation() {

    return (
        <div>
            <NavBarLogout />

            {JSON.parse(sessionStorage.getItem("customerDetails")).bodyType == "ENDOMORPH" ?

                <EndomorphReccomendation />
                :
                JSON.parse(sessionStorage.getItem("customerDetails")).bodyType == "MESOMORPH" ?

                    <MesomorphReccomendation />
                    :
                    <EctomorphReccommendation />

            }
            <Footer />
        </div >

    );
}

export default DietReccommendation;