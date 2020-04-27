import React, { useState } from 'react';

import MapCont from './Map/MapCont';
import UserDataAddress from '../UserDataAddress/UserDataAddress';
import {  makeStyles } from "@material-ui/styles";
import {  Button } from "@material-ui/core";
const useStyle = makeStyles ({
    button: {
		position: 'fixed',
		bottom: "10%",
		backgroundColor: '#2C7BE5',
		color: 'white',
		borderRadius: 15,
		width: '40%',
		fontFamily: 'IranSans',
		right: '30%'
	},
})
const CreateAddress = () => {
    const classes = useStyle();
    const [data, showData] = useState(false);
    return(
        <React.Fragment>
            {
                !data ?
                <MapCont show={data} showData={(show) => showData(show)}/>

                :
                <div>
                    <UserDataAddress/>
                <Button className={classes.button}>تایید</Button>
                </div>
            }
            
        </React.Fragment>
    )
}
export default CreateAddress;