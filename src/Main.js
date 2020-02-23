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

import { useSelector, useDispatch } from 'react-redux';

function Item({titleItem, descriptionItem}){
  const dispatch = useDispatch();
  function deleteTodo(todoId){
      dispatch({type: 'REMOVE_TODO', todoId})
  }
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
      <DeleteButtonList
        onPress={()=>deleteTodo(titleItem)}
      >
          <Icon name="trash" color="#fff" size={20} />
        </DeleteButtonList>
    </ItemList>
    </View>
  );
}

export default  function Main(){
  const todos = useSelector(state=>state.TodoReducer.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  function handleAddTodo(){
    let todo = {id: title, title, description};
    setTitle('');
    setDescription('');
    dispatch({type: "ADD_TODO", todo})
  }

    return(
        <>
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
              defaultValue={title}
            />
            <DescriptionInput 
              onChangeText={(text)=>setDescription(text)}
              placeholder="Description:"
              numberOfLines={3}
              multiline={true}
              defaultValue={description}
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
    )
}