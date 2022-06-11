import React, { useState, useEffect } from 'react'
import DrugAPI from '../api/DrugAPI';
import Modal from 'react-modal';
import Navbar from '../components/Navbar';
import { BestellungenWrap } from '../Styles/BestellungenStyles';

const Bestellungen = () => {

  const [orders, setOrders] = useState([]);
  const [modalid, setModalid] = useState(0);
  const [modalbool, setModalbool] = useState(false);
  const [orderlist, setOrderlist] = useState([]);
  const [modalperson, setModalperson] = useState({});

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
      setOrderlist(orderlist.filter(order => order.oid !== oid));
      await DrugAPI.delete(`/orders/${oid}`);
    } catch (error) {
      console.error(error)
    }
  }

  const handleModal = (oid) => {
    setModalid(oid);
    setModalperson(orders.find(x => x.oid === oid))
    setModalbool(true);
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div>
      <Navbar route="/" title="Bestellungen" />
      <BestellungenWrap>
        <Modal isOpen={modalbool} onRequestClose={() => setModalbool(false)}>
          <button onClick={() => setModalbool(false)}>X</button> <br></br>
          <h1>{modalperson.nachname} {modalperson.vorname}</h1>
          <h2>{modalperson.vpin} {modalperson.vbday}</h2>
          <ul>
            {orders.filter((x) => x.oid === modalid).map((x) => {
              return (<div>
                <li>{x.name} {x.mengenart} OP{x.bestellung_anzahl}</li>
              </div>
              )
            })}
            <p>{modalperson.anmerkung}</p>
          </ul>
        </Modal>
        <table>
          <thead>
            <tr>
              <th scope='col'>Nachname</th>
              <th scope='col'>Vorname</th>
              <th scope='col'>Datum</th>
              <th scope='col'>Info</th>
              <th scope='col'></th>

            </tr>
          </thead>
          <tbody>
            {orderlist.map((x) => {
              console.log(x)
              return (
                <tr key={x.oid} className="drug-row" >
                  <td className={x.name}>{x.nachname.toUpperCase()}</td>
                  <td>{x.vorname.toUpperCase()}</td>
                  <td>{x.odate.slice(0, 10)}</td>
                  <td><button onClick={() => handleModal(x.oid)}>?</button></td>
                  <td><button onClick={() => handleDelete(x.oid)}>Done</button></td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </BestellungenWrap>
    </div>
  )
}

export default Bestellungen