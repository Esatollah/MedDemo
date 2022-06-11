import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';
import Modal from 'react-modal';

const Bestellungen = () => {

    const [orders, setOrders] = useState([]);
    const [modalid, setModalid] = useState(0);
    const [modalbool, setModalbool] = useState(false);
    const [orderlist, setOrderlist] = useState([]);

    const getOrders = async () => {
        try {
            const result = await DrugAPI.get("/orders/");
            setOrders(result.data.orders);
            const arrayUniqueByKey = [...new Map(result.data.orders.map(item =>
                [item["oid"], item])).values()];
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
        <table>
          <thead>
            <tr>
              <th scope='col'>Nachname</th>
              <th scope='col'>Vorname</th>
              <th scope='col'>Datum</th>
              <th scope='col'>Modal Button</th>
              <th scope='col'>Delete</th>

            </tr>
          </thead>
          <tbody>
            {orders && [...new Map(orders.map(item =>
  [item["id"], item])).values()].map((x) => {
              return (
                <tr key={x.oid} className="drug-row" >
                <td className={x.name}>{x.nachname}</td>
                <td>{x.vorname}</td>
                <td>{x.odate}</td>
                </tr>
              )
            })}
          </tbody>

        </table>
    </div>
  )
}

export default Bestellungen