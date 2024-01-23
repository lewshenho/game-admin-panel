// ResponsiveTable.js
import React from 'react';
import './ResponsiveTable.css'; // Import your CSS file for styling
import { generateUniqueLink } from './App';

const ResponsiveTable = ({ data,handleLinkClick,updatePending }) => {
  const generateUniqueLink = (user) => {
    if (user.clicked) {
      return `Link Disabled`;
    } else {
      return user.uniqueLink;
    }
  };

  const getLinkStatus = (user) => {
    // Assuming there is a property in the user object indicating whether the game has been played
    return user.gamePlayed ? 'Live' : 'Expired';
  };

  return (
    <div className="responsive-table-container">
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Username</th>
            <th>Pending Deposit Credits</th> {/* New column for Pending Deposit Credits */}
            <th>Pending</th>
            <th>Unique Link</th>
            <th>Link Status</th> {/* New column for Link Status */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
            <td data-label="UserID">{index + 1}</td>
            <td data-label="Username">{item.username}</td>
            <td data-label="Pending Deposit Credits">{/* Add pending deposit credits data here */}</td>
            <td data-label="Pending">
              {!item.disabled ? (
                <select
                  value={item.pending}
                  onChange={(e) => updatePending(item, e.target.value)}
                >
                      <option value="Pending Gameplay">Pending Gameplay</option>
                      <option value="Pending Deposit">Pending Deposit</option>
                      <option value="Credits Claimed">Credits Claimed</option>
                  </select>
              ) : (
                  <span>{item.pending}</span>
              )}
              </td>
              <td data-label="Unique Link">
                {item.clicked ? (
                  <span>{generateUniqueLink(item)}</span>
                ) : (
                  <a
                    href={item.uniqueLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLinkClick(item)}
                  >
                    {generateUniqueLink(item)}
                  </a>
                )}
              </td>
              <td data-label="Link Status">{getLinkStatus(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
