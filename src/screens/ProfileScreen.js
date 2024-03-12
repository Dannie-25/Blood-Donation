import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StylesScreen from '../styles/StylesScreen';
import CustomTextInput from '../components/inputs/CustomTextInput';
import CustomButton from '../components/buttons/CustomButton';

const ProfileScreen = ({ route }) => {
  const { username } = route.params;

  const [posts, setPosts] = useState([]);
  const [donePosts, setDonePosts] = useState([]);
  const [postText, setPostText] = useState('');

  useEffect(() => {
    // Cargar los posts guardados al iniciar el componente
    loadPosts();
  }, []);

  useEffect(() => {
    // Guardar los posts cada vez que cambien
    savePosts();
  }, [posts, donePosts]);

  const savePosts = async () => {
    try {
      await AsyncStorage.setItem('posts', JSON.stringify(posts));
      await AsyncStorage.setItem('donePosts', JSON.stringify(donePosts));
    } catch (error) {
      console.error('Error saving posts:', error);
    }
  };

  const loadPosts = async () => {
    try {
      const savedPosts = await AsyncStorage.getItem('posts');
      const savedDonePosts = await AsyncStorage.getItem('donePosts');

      if (savedPosts !== null) {
        setPosts(JSON.parse(savedPosts));
      }
      if (savedDonePosts !== null) {
        setDonePosts(JSON.parse(savedDonePosts));
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  const handlePost = () => {
    setPosts(prevPosts => [
      ...prevPosts,
      { id: Date.now(), text: postText, username },
    ]);
    setPostText('');
  };

  const handleDone = (postId) => {
    const post = posts.find(post => post.id === postId);
    setDonePosts(prevDonePosts => [...prevDonePosts, post]);
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  const handleDelete = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  const renderItem = ({ item }) => (
    <View style={StylesScreen.postContainer}>
      <Text style={StylesScreen.postText}>{item.text}</Text>
      <Text style={StylesScreen.userType}>{item.username}</Text>
      <View style={StylesScreen.buttonContainer}>
        <TouchableOpacity
          style={[StylesScreen.postButton, { backgroundColor: '#4CAF50' }]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={StylesScreen.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StylesScreen.postButton}
          onPress={() => handleDone(item.id)}
        >
          <Text style={StylesScreen.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDoneItem = ({ item }) => (
    <View style={StylesScreen.postContainer}>
      <Text style={StylesScreen.postText}>{item.text}</Text>
      <Text style={StylesScreen.userType}>{item.username}</Text>
    </View>
  );

  return (
    <View style={StylesScreen.container}>
      <Text style={StylesScreen.title}>¡Welcome{username}!</Text>
      <CustomTextInput
        placeholder="Escribe tu publicación..."
        value={postText}
        onChangeText={text => setPostText(text)}
      />
      <CustomButton title="Publicar" onPress={handlePost} />
      <Text style={StylesScreen.sectionTitle}>Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={StylesScreen.sectionTitle}>Done Posts</Text>
      <FlatList
        data={donePosts}
        renderItem={renderDoneItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProfileScreen;
