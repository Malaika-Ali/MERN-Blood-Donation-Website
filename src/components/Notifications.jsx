// import React, {useState, useEffect} from 'react'
// import { io } from 'socket.io-client';


// const Notifications = () => {

//   useEffect(() => {
//     // const socket = io('/socket.io'); 
//     const socket = io( 'http://localhost:8000', {
//       transports: ['websocket'],
//   });

//     // Listen for new blood request notifications
//     socket.on('newBloodRequest', (data) => {
//         console.log('New Blood Request Notification:', data);
//         // Update the notifications state with the new notification
//         setNotifications(prevNotifications => [
//             ...prevNotifications,
//             {
//                 id: data.bloodRequestId, // Use the blood request ID as the unique identifier
//                 message: data.message,
//                 time: new Date().toLocaleTimeString() // Format the time as needed
//             }
//         ]);
//     });

//     // Clean up the socket connection on component unmount
//     return () => {
//         socket.disconnect();
//     };
// }, []);




//     const [notifications, setNotifications] = useState(
//         [
//             {id: 1, message: "One new Request", time:2}
//         ]
//     )
//   return (
//     <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-20">
//     <div className="p-4 border-b border-gray-200">
//       <h3 className="text-sm font-medium text-gray-800">Notifications</h3>
//     </div>
//     <ul className="max-h-60 overflow-y-auto">
//       {notifications.length > 0 ? (
//         notifications.map((notification, index) => (
//           <li
//             key={notification.id}
//             className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
//           >
//             <p className="text-sm text-gray-700">{notification.message}</p>
//             <span className="text-xs text-gray-500">
//               {notification.time}
//             </span>
//           </li>
//         ))
//       ) : (
//         <li className="px-4 py-2 text-sm text-gray-500">
//           No new notifications.
//         </li>
//       )}
//     </ul>
//   </div>
//   )
// }

// export default Notifications






import React, { useState, useEffect, useCallback } from 'react'
import { io } from 'socket.io-client';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);

  const addNotification = useCallback((notification) => {
    setNotifications(prev => [...prev, notification]);
  }, []);

  useEffect(() => {
    // const newSocket = io('/', {
    //   path: '/socket.io',
    //   transports: ['websocket', 'polling'],
    // });
    const newSocket = io('http://localhost:8000', {
      transports: [ 'polling'],
  });

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket');
      // Authenticate the user here if needed
      // newSocket.emit('authenticate', 'user-token-here');
    });

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    newSocket.on('newBloodRequest', (data) => {
      console.log('New Blood Request Notification:', data);
      addNotification({
        id: data.bloodRequestId,
        message: data.message,
        time: new Date().toLocaleTimeString()
      });
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [addNotification]);

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










