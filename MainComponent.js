import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// export default한다 MainComponent클래스를 
export default class MainComponent extends Component{
    // render(){
    //     return(
    //         <View style={styles.root}>
    //             {/* Direction 방향에 따라서 나머지 방향은 스트레치 모드가 적용된다. */}
    //             {/* 부모의 사이즈를 지정하지 않으면 표시되지 않는다. */}
    //             {/* <View style={{width:50, height:50, backgroundColor:'red'}}></View> */}
    //             <View style={{flex:1,backgroundColor:'green'}}>
    //             </View>
    //             <View style={{flex:1,backgroundColor:'blue'}}>
    //                 <View></View>
    //             </View>
    //         </View>
    //     );
    // }

    // 2번
    render(){
        return(
            <View style={styles.root}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <View style={{flex:1, backgroundColor:'red'}}>
                        {/* 절대 위치 : 뷰를 겹쳐서 배치할 수도 있음 */}
                        <View style={{width:50, height:50, backgroundColor:'white', position:"absolute", left:10, top:10}}></View>
                        <View style={{width:50, height:50, backgroundColor:'#44552266', position:"absolute", left:20, top:20}}></View>
                    </View>
                    <View style={{flex:2, backgroundColor:'green'}}></View>
                </View>
                <View style={{flex:2, flexDirection:"row"}}>
                    <View style={{flex:2, backgroundColor:'yellow'}}></View>
                    {/* flex를 사용하면 position은 static이 아니다 */}
                    <View style={{flex:1, backgroundColor:'blue'}}>
                        {/* absolute를 사용하면 부모를 기준으로 위치를 지정할 수 있다. */}
                        <View style={{width:50, height:50, backgroundColor:'white', position:"absolute", left:10, top:10}}></View>
                        <View style={{width:50, height:50, backgroundColor:'#44552266', position:"absolute", right:20, bottom:20}}></View>
                    </View>
                </View>
                <View style={{width:50, height:50, backgroundColor:'orange', position:"absolute", bottom:50, right:50, borderRadius:25}}></View>
                
            </View>
        );
    }

}

const styles=StyleSheet.create({
    root:{
        padding:16,
        backgroundColor:'#00225544',
        flex:1,
        flexDirection:"column",
        // justifyContent:"space-evenly",// Direction과 같은 방향의 정렬
        // space-around : 아이탬간의 간격을 동일하게, space-between : 양끝을 붙이고 나머지 하나를 가운대로, space-evenly : 아이템들의 간격을 동일하게 배치
        // alignItems:"center"// Direction과 교차되는 방향의 정렬
    }
});

