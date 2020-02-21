/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View
} from 'react-native';

import { Input, Button, Wrapper,  Title, ItemList, TitleList, DescriptionInput, Description, DeleteButtonList } from './styles';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


function Item({titleItem, descriptionItem}){
  return(
    <View
    style={{
      flexDirection: 'row',
    }
    }
    >
    <ItemList>
      <TitleList>{titleItem}</TitleList>
      <Description>{descriptionItem}</Description>
      <DeleteButtonList><Icon name="trash" color="#fff" size={20} /></DeleteButtonList>
    </ItemList>
    </View>
  );
}
export default function App(){
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  function handleAddTodo(){
    let todo = {id: title, title, description};
    setTodos([...todos, todo]);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={{flex: 1}}>
        <LinearGradient colors={["#2cd1a5", "#9a2cd1"]} 
        style={{flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 20,
        flexDirection: 'column'
        }}>
          <Title>Add new to do:</Title>
          <Wrapper>
            <Input 
              onChangeText={(text)=>setTitle(text)}
              placeholder="Title:"
            />
            <DescriptionInput 
              onChangeText={(text)=>setDescription(text)}
              placeholder="Description:"
              numberOfLines={3}
              multiline={true}
            />
            <Button onPress={handleAddTodo}><Icon name="plus" color="#fff" size={22} /></Button>
          </Wrapper>

            <FlatList
                data={todos}
                renderItem={({ item }) => <Item titleItem={item.title}  descriptionItem={item.description}/>}
                keyExtractor={item => item.id}
                style={{width: '90%', marginBottom: 30, marginTop: 10}}
            />

        </LinearGradient>
      </SafeAreaView>
    </>
  );
};
