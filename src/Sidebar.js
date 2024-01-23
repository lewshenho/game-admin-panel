import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling
import { generateUniqueLink } from './App';

const Sidebar = ({ setUsers }) => {
  const [nextUserID, setNextUserID] = useState(1);
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', selectedPending: 'Pending Gameplay', clicked: false });
  const [userIDCounter, setUserIDCounter] = useState(1);

  const openAddUserModal = () => setAddUserModalOpen(true);
  const closeAddUserModal = () => {
    setAddUserModalOpen(false);
    setNewUser({ username: '', selectedPending: 'newPendingValue' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // const updatePending = (user, value) => {
  //   // Update the 'pending' value for the specific user
  //   setUsers((prevUsers) =>
  //     prevUsers.map((prevUser) =>
  //       prevUser === user ? { ...prevUser, pending: value } : prevUser
  //     )
  //   );
  // };


  const handleAddUser = () => {
    const userWithLink = {
      ...newUser,
      userID: `UserID${nextUserID}`, // Generate unique UserID
      uniqueLink: generateUniqueLink(newUser),
      clicked: false,
      pending: newUser.selectedPending,
    };
  
    setUsers((prevUsers) => [...prevUsers, userWithLink]);
    closeAddUserModal();
    // Increment the counter for the next unique UserID
    setNextUserID((prevUserID) => prevUserID + 1);

    // Reset the selectedPending value to its default after adding the user
    setNewUser((prevUser) => ({ ...prevUser, selectedPending: 'Pending Gameplay' }));
    setNewUser((prevUser) => ({ ...prevUser, selectedPending: 'Pending Gameplay' }));
    setUserIDCounter(userIDCounter + 1); // Increment the user ID counter
  };
  
  return (
    <div className="sidebar-container">
       <p align="center">
        <img src={process.env.PUBLIC_URL + '/sample_logo.png'} alt="Logo" className="logo" />
       </p> 
        
      <ul>
        <div className="welcome-message">
          <h4>Welcome <strong>Master Admin!</strong></h4>
          <p>Email:  masteradmin@gmail.com</p>
          <p>Role: Master Admin</p>
        </div>
        <li>Dashboard</li>
        <li>Master(Admin)</li>
        <li>Games</li>
        <li>All Users</li>
        <li>Add User</li>
        <li>Settings</li>
        <li>
          <button onClick={openAddUserModal}>Add User</button>
        </li>
        {/* Add other sidebar items as needed */}
      </ul>

      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <div className="add-user-modal">
          <div className="modal-content">
            <span className="close" onClick={closeAddUserModal}>&times;</span>
            <h2>Add User</h2>
            <form>
              <label>Username:</label>
              <input type="text" name="username" value={newUser.username} onChange={handleInputChange} />

              <label>Pending:</label>
              <select
                name="selectedPending"
                value={newUser.selectedPending}
                onChange={(e) => handleInputChange(e)}
              >
                <option value="Pending Gameplay">Pending Gameplay</option>
                <option value="Pending Deposit">Pending Deposit</option>
                <option value="Credits Claimed">Credits Claimed</option>
              </select>

              <button type="button" onClick={handleAddUser}>Add User</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;