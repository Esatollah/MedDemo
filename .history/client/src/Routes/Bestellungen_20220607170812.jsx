import React, { useState, useEffect } from 'react'
import DrugAPI from '../api/DrugAPI';
import Modal from 'react-modal';
import {useNavigate} from 'react-router-dom'

const Bestellungen = () => {
  let navigate = useNavigate();

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
      setOrderlist(arrayUniqueByKey);
    } catch (error) {
      console.error(error)
    }
  }


  const handleDelete = async (oid) => {
    try {
      console.log(orderlist)
      console.log(oid)
      setOrderlist(orderlist.filter(order => order.oid !== oid));
      await DrugAPI.delete(`/orders/${oid}`);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div>
      <h1>Offene Bestellungen <button onClick={() => navigate("/")}> Back</button></h1>
      <Modal isOpen={modalbool}>
        helpp
        <button onClick={()=> setModalbool(false)}>X</button>
      </Modal>
      <table>
        <thead>
          <tr>
            <th scope='col'>Nachname</th>
            <th scope='col'>Vorname</th>
            <th scope='col'>Datum</th>
            <th scope='col'>Modal</th>
            <th scope='col'>Delete</th>

          </tr>
        </thead>
        <tbody>
          {orderlist.map((x) => {
            return (
              <tr key={x.oid} className="drug-row" >
                <td className={x.name}>{x.nachname}</td>
                <td>{x.vorname}</td>
                <td>{x.odate.slice(0, 10)}</td>
                <td><button onClick={() => setModalbool(true)}></button></td>
                <td><button onClick={() => handleDelete(x.oid)}>Done</button></td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default Bestellungen