import React, { useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { Table, Row, Rows} from 'react-native-table-component';
const ConditionItem = (props) => {
  const [tableState, setTableState] = useState({tableHead:[`Covid-19 Total Cases (${props.datas.day})`], 
    tableTitle:["Active Patients","Critical","New Patient","Recovered","Total"], tableData: [
    [props.datas.cases.active, props.datas.cases.critical, props.datas.cases.new, props.datas.cases.recovered, props.datas.cases.total],
  ]})

  return (
    <View style={styles.container}>
      <View style = {styles.sub}>
       <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff', flex:1}}>
         <Row data={tableState.tableHead} style={styles.head} textStyle={styles.text}/>
         <Row data={tableState.tableTitle} style={styles.head} textStyle={styles.text}/>
         <Rows data={tableState.tableData} textStyle={styles.text}/>
       </Table>
    </View>
    <View>
        <Text style = {styles.texter}> There have been more than <Text style = {styles.span}>{props.datas.cases.total}</Text> confirmed cases of 
          coronavirus in the {props.info} and almost <Text style = {styles.span}>{props.datas.deaths.total}</Text> people have died, government figures show.
        </Text>
    </View>
  </View>
  )
}
export { ConditionItem };
const styles = StyleSheet.create({
  container: {padding: 16, paddingTop: 30, backgroundColor: '#fff',},
  sub: {marginBottom: 20 },
  head: { height: 65, backgroundColor: '#f1f8ff',alignSelf:'center'},
  text: { margin: 3, textAlign:'center'},
  texter: {
      fontSize: 15,
      fontWeight: '400',
      letterSpacing: 0.5
  },
  span : {
      fontWeight: 'bold',
      color: 'red',
      fontSize: 20
  }
});