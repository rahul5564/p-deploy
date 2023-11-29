import React, { useState } from 'react';
import "./adress.css"


const AddressManager = () => {
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: '', address: '', number: '', pin: '' });
  const [editIndex, setEditIndex] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
  };

  const saveAddress = () => {
    if (!newAddress.name || !newAddress.address || !newAddress.number || !newAddress.pin) {
      return;
    }

    if (editIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editIndex] = newAddress;
      setAddresses(updatedAddresses);
    } else {
      setAddresses([...addresses, newAddress]);
    }

    setNewAddress({ name: '', address: '', number: '', pin: '' });
    closeModal();
  };

  const removeAddress = (index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setAddresses(updatedAddresses);
  };

  const editAddress = (index) => {
    setEditIndex(index);
    setNewAddress(addresses[index]);
    openModal();
  };

  const fillWithDummyValues = () => {
    const dummyAddress = {
      name: 'Admin',
      address: 'Hyderabad Main St',
      number: '222-333-444',
      pin: '12345'
    };
    setAddresses([...addresses, dummyAddress]);
    closeModal();
  };

  return (
    <div>
      <div className='btn-add'>
        <button onClick={openModal} className="btn-address">+ Add Address</button>
      </div>

      <div>
        {addresses.map((address, index) => (
          <div key={index} className="address">
            <div><b>Address: </b>
             {`${address.name},
             ${address.address},
              ${address.number},
               ${address.pin}`}</div>
            <span className="edit-btn" onClick={() => editAddress(index)}>Edit</span>
            <span className="remove-btn" onClick={() => removeAddress(index)}>Remove</span>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span onClick={closeModal} className="close">&times;</span>
            <label>Name:</label>
            <input type="text" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} /> <br/>
            <label>Address:</label>
            <input type="text" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} /><br/>
            <label>Number:</label>
            <input type="text" value={newAddress.number} onChange={(e) => setNewAddress({ ...newAddress, number: e.target.value })} /><br/>
            <label>Pin:</label>
            <input type="text" value={newAddress.pin} onChange={(e) => setNewAddress({ ...newAddress, pin: e.target.value })} /><br/>
            <button className="modal-btns" onClick={saveAddress}>Save</button>
            <button className="modal-btns" onClick={closeModal}>Cancel</button>
            <button className="modal-btns" onClick={fillWithDummyValues}>Fill with Dummy Values</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressManager;

