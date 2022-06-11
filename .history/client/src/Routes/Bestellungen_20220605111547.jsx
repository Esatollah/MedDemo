import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';


const Bestellungen = () => {

    const getOrders = async () => {
        try {
            const result = await DrugAPI.get("/orders/");
            console.log(result.data.orders)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getOrders()
    }, [])
  return (
    <div>

    </div>
  )
}

export default Bestellungen