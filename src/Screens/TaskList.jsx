import React from "react";
import { SafeAreaView, Text, View ,ImageBackground ,StyleSheet, FlatList } from "react-native";
import todayImage from '../../assets/imgs/today.jpg';
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from "../commonStyles";
import Task from "../components/Task";


export default props =>{

    const livros= [
        {id: 1, descricao:'tarefa realizada', dataEstimada:new Date(), concluidaEm: null,},
        {id: 2, descricao:'tarefa nao realizada', dataEstimada:new Date(), concluidaEm: null,},
        {id: 3, descricao:'comprar Livro', dataEstimada:new Date(), concluidaEm: null,},
        {id: 4, descricao:'Ler Livro', dataEstimada:new Date(), concluidaEm: null,},
        {id: 5, descricao:'Emprestar o livro', dataEstimada:new Date(), concluidaEm: false,},

        
    ];
    
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
    <SafeAreaView style ={style.container}>
        <ImageBackground source ={todayImage} style={style.ImageBackground}>  
        <View style ={ style.titleBar}>
            <Text style ={style.title}>Hoje</Text>
            <Text style ={style.subTitle}>{today}</Text>
            
        </View>    

        </ImageBackground>
        

        <View style ={ style.tasklist}>

            
            <FlatList
                    data={livros}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> (
                        <Task descricao={item.descricao}
                            dataEstimada={item.dataEstimada}
                            concluidaEm={item.concluidaEm}/>  
                    )}

            
                    />         

         
            
                         
            
        </View>

        
        
        
    </SafeAreaView>
    
    )
    
}

const style =StyleSheet.create(
    {
    container:{
    flex:1
    },

    ImageBackground:{
        flex:3
    },

    tasklist:{
        flex:7
    },

    titleBar:{
        flex:1,
        justifyContent:'flex-end'
    },

    title:{
            fontFamily: commonStyles.fontFamily,
            fontSize: 50,
            color: commonStyles.colors.secundary,
            marginLeft: 20,
            marginBottom: 20,

    },

    subTitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color:commonStyles.colors.secundary,
        marginLeft:20,
        marginBottom: 20,
    },

    }


)