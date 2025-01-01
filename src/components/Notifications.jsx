import React, { useState } from 'react'

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="absolute top-12 right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-20">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-800">Notifications</h3>
      </div>
      <ul className="max-h-60 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li
              key={notification.id}
              className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
            >
              <p className="text-sm text-gray-700">{notification.message}</p>
              <span className="text-xs text-gray-500">
                {notification.time}
              </span>
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-sm text-gray-500">
            No new notifications.
          </li>
        )}
      </ul>
    </div>
  )
}

export default Notifications










