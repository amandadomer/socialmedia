// import React from 'react'
// import './FriendsList.css'

// function FriendsList(props) {
//     const [friends, setFriends] = useState([]);
//     useEffect(() => {
//         const getFriends = async () => {
//           try {
//             const friendList = await axios.get("/users/friends/" + user._id);
//             setFriends(friendList.data);
//           } catch (err) {
//             console.log(err);
//           }
//         };
//         getFriends();
//       }, [user]);

//     return (
//         <div className="friends">
//             Your Friends<br></br>
//             {props.friends.map((friend))}
//         </div>
//     )
// }

// export default FriendsList;
