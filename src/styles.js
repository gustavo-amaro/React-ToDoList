import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: 25px;
    color: #fff;
    margin-bottom: 20px;
`;
export const TitleList = styled.Text`
    font-size: 15px;
    color: #000;
    margin-bottom: 5px;
    font-weight: bold;
`;
export const Input = styled.TextInput`
    border-radius: 5px;
    background: #fff;
    margin-bottom: 5px;
`;
export const Description = styled.Text`
    font-size: 12px;
    color: #000;
`;
export const DescriptionInput = styled.TextInput`
    border-radius: 5px;
    background: #fff;
    margin-bottom: 10px;
`;
export const Button = styled.TouchableOpacity`
    border-radius: 5px;
    background: #2cd17c;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2px;
`;
export const Wrapper = styled.View`
    display: flex;
    width: 80%;
`;

export const List = styled.FlatList`
    background: #000;
    padding-bottom: 20px;
`;
export const ItemList = styled.View`
    background: #fff;
    borderRadius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
`;
export const ButtonText = styled.Text`
    font-size: 15px;
    color: #fff;
`;

export const DeleteButtonList = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
    background: #cf2323;
    padding: 5px;
    margin-left: 5px;
    align-items: center;
    justifyContent: center;
    border-radius: 5px;
`;