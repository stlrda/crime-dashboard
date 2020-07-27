import React, { useState, useContext } from 'react'

import { InputPicker, DateRangePicker, Divider, Button } from 'rsuite';
import { getDefaultNormalizer } from '@testing-library/react';
import GeoJSON from 'geojson'

import crimesData from '../data/crimes.json'
import { GlobalContext } from '../context/GlobalState'

const style = {
    height: '1100px',
    width: '317px',
    backgroundColor: '#eae9e9',
    justifyContent: 'center',
    padding: '6px',
}

const Sidebar = () => {
    
    const [crime, setCrime] = useState(null)
    const [date, setDateRange] = useState(null)

    const { addData } = useContext(GlobalContext)

    const getData = () => {
        const startDate = date[0].toISOString().substr(0,10)
        const endDate = date[1].toISOString().substr(0,10)

        
        let url='http://api.stldata.org/crime/detailed?start='+startDate+'&end='+endDate+'&category='+crime
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            GeoJSON.parse(data, {Point: ['lat', 'lon']}, function(geojson) {
                console.log(geojson)
                addData(geojson)
            
            })
        })
    }


    return (
        <div className='sidebar' style={style}>
            <div className='siderbar-header'>
                <h4>Select Data</h4><br/>
            </div>
            <div className='form'>
                <h6>Crime Type</h6> <br/>
                <InputPicker data={crimesData} style={{ width: 300 }} onChange={(value) =>{setCrime(value)}}  /><br/><br/>
                <h6>Time period</h6><br/>
                <DateRangePicker onChange={(value) => { setDateRange(value)}} isoWeek={true} /><br/><br/>
                <Button appearance='default' block onClick={getData}>Retrieve Data</Button>

            </div>
        </div>
    )
}

export default Sidebar;