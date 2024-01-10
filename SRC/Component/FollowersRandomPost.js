import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Post_big_cart from '../Carts/Post_big_cart';

const FollowersRandomPost = () => {
  const [users, setUsers] = useState([]);

  const loadData = () => {
    // Fetch data from the API endpoint
    fetch('http://192.168.43.24:3000/getMainPost')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Initial load of data
    loadData();

    // Set up an interval to reload data every 5 minutes (adjust as needed)
    const intervalId = setInterval(loadData, 2 * 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <ScrollView style={styles.container}>
      {users.map((item) => (
        <Post_big_cart
          key={item.id}
          username={item.username}
          profile_image={item.profilepic}
          posts={item.posts}
        />
      ))}
    </ScrollView>
  );
};

export default FollowersRandomPost;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
});
