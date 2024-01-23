import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
// import MainContent from './MainContent';
import ResponsiveTable from './ResponsiveTable'; // Adjust the path based on your project structure
import './App.css'; // Import your CSS file for styling

export const generateUniqueLink = (user) => {
  // Use a timestamp or a random string to create a unique link
  const timestamp = Date.now();
  return `https://example.com/user/${user.userID}-${timestamp}`;
};



const App = () => {
  
  // Example state using useState

  const [users, setUsers] = useState([
    // Existing users
  ]);

  const updatePending = (user, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((prevUser) =>
        prevUser === user ? { ...prevUser, pending: value } : prevUser
      )
    );
  };
  
  // const [userData, setUserData] = useState(null);
  // const sampleData = [
  //   { name: '1001', email: 'win99', phone: '8000' },
  //   { name: '1002', email: 'betbet88', phone: '888' },
  //   { name: '1003', email: 'casino998', phone: '7000' },
  //   { name: '1004', email: 'alicewong99', phone: '788' },
  //   { name: '1005', email: 'adrianlee', phone: '9888' },
  //   { name: '1006', email: 'janejane', phone: '988' },
  //   // Add more data as needed
  // ];

  // Example effect using useEffect
  useEffect(() => {
    // Fetch user data or perform any other side effect
    // Update the state with the fetched data
    // Example: 
    // fetchUserData()
    //   .then(data => setUserData(data))
    //   .catch(error => console.error('Error fetching user data:', error));
  }, []); // Empty dependency array means this effect runs once on component mount



  const addUser = (newUser) => {
    const uniqueLink = generateUniqueLink(newUser);
    setUsers((prevUsers) => [...prevUsers, { ...newUser, uniqueLink, disabled: false }]);
    // closeAddUserModal();
    // const userWithLink = { ...newUser, uniqueLink,disabled: false };
    // setUsers((prevUsers) => [...prevUsers, userWithLink]);
  };


  

  const handleLinkClick = (clickedUser) => {
    console.log('Clicked user:', clickedUser);
  
    let newPendingValue;
  
    switch (clickedUser.pending) {
      case 'Pending Gameplay':
        newPendingValue = 'Pending Gameplay';
        break;
      case 'Pending Deposit':
        newPendingValue = 'Pending Deposit';
        break;
      case 'Credits Claimed':
        newPendingValue = 'Credits Claimed';
        break;
      default:
        newPendingValue = clickedUser.pending;
    }
  
    const updatedUsers = users.map((user) =>
      user === clickedUser ? { ...user, pending: newPendingValue } : user
  );
  
    setUsers(updatedUsers);
  };



  return (
    <div className="app-container">
      <Sidebar setUsers={setUsers} />
      <div className="main-container">
        <h1>All Users</h1>
        <ResponsiveTable data={users} handleLinkClick={handleLinkClick} updatePending={updatePending} />
        {/* Example of using components */}
        {/* <Header /> */}
        {/* <MainContent userData={userData} /> */}
      </div>
    </div>
  );
};



export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
