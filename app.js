import axios from 'axios';

async function getData(userId) {
  try {
    const isEmty = userId;
    if(typeof userId === 'undefined' || String(isEmty).trim() == '') throw 'Please enter a User ID';
    if(isNaN(userId)) throw 'Please enter a User ID that is a number';
    if(userId < 1) throw 'Please enter a User ID that is high from 0';
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postsResponse.data;
    const userInformations = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      website: userData.website,
      company: userData.company,
      posts: userPosts
    }
    return userInformations;
  } catch (error) {
    console.error(error);
  }
}

export default getData;