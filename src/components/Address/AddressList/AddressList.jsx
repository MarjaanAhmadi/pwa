import React from 'react';
import SingleAddress from '../SingleAddress/SingleAddress';
import CreateAddress from '../CrudAddress/CreateAddress/CreateAddress';
import { Button } from '@material-ui/core';
const AddressList = () => {
    return(
        <React.Fragment>
            <SingleAddress/>
            <SingleAddress/>
        </React.Fragment>
    )
}
export default AddressList;