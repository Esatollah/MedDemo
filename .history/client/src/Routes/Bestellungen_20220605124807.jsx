import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';


const Bestellungen = () => {

    const [orders, setOrders] = useState([]);
    const [modalid, setModalid] = useState(0);

    const getOrders = async () => {
        try {
            const result = await DrugAPI.get("/orders/");
            setOrders(result.data.orders);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

  return (
    <div>
        <h1>Offene Bestellungen</h1>

    </div>
  )
}

export default Bestellungen