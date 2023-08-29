import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import PreLoader from '../../User/components/PreLoader';

export default function Brand() {
    const [brands, setbrands] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/get-all-brands')
            .then(json => {
                setbrands(json.data.brands)
                setIsLoading(false)
            })
            .catch(err => alert(err.message))
    }, [])

    if (isLoading) {
        return <PreLoader />
    }

    return (
        <div className="container my-5 md-4 ">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brands?.map((val, key) => <GuestCards key={key} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}
