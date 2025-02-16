import axios from 'axios';

async function getData(userID) {
  try {
    const isEmty = userID;
    if(typeof userID === 'undefined' || String(isEmty).trim() == '') throw 'Please enter a User ID';
    if(isNaN(userID)) throw 'Please enter a User ID that is a number';
    if(userID < 1) throw 'Please enter a User ID that is high from 0';
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
    const userInfo = userResponse.data;
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
    const userPosts = postsResponse.data;
    const userData = {
      id: userInfo.id,
      name: userInfo.name,
      username: userInfo.username,
      email: userInfo.email,
      address: userInfo.address,
      phone: userInfo.phone,
      website: userInfo.website,
      company: userInfo.company,
      posts: userPosts
    }
    return userData;
  } catch (error) {console.error(error)};
}

export default getData;
