import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {m_no: '', m_name: '', m_course: ''};
  }

  Register = () => {
    let m_no = this.state.m_no;
    let m_name = this.state.m_name;
    let m_course = this.state.m_course;

    if (m_no.length === 0 || m_name.length ===0 || m_course.length === 0) {
      alert("Required Field is Missing");
    } else {
      let InsertAPIURL = "http://localhost/RN_UserRegistrationDemo/api/insert.php";

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      let Data = {
        m_no: m_no,
        m_name: m_name,
        m_course: m_course
      };

      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((response) =>response.json())
      .then((response)=>{
        alert(response[0].Message);
      })
      .catch((error) => {
        alert("Error"+error);
      })
    }
  }

  render() {
    return(
      <View style={styles.ViewStyle}>
        <TextInput 
          placeholder={"Member No"}
          placeholderTextColor={"tomato"}
          keyboardType={"numeric"}
          style={styles.txtStyle}
          onChangeText={m_no => this.setState({m_no})}
        />
        <TextInput 
          placeholder={"Member Name"}
          placeholderTextColor={"tomato"}
          style={styles.txtStyle}
          onChangeText={m_name => this.setState({m_name})}
        />
        <TextInput 
          placeholder={"Member Course"}
          placeholderTextColor={"tomato"}
          style={styles.txtStyle}
          onChangeText={m_course => this.setState({m_course})}
        />
        <Button
          title={"Register"}
          onPress={this.Register}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   ViewStyle: {
     flex: 1,
     padding: 60,
     marginTop: 20
   },
   txtStyle: {
     borderBottomWidth: 1,
     borderBottomColor: 'tomato',
     marginBottom: 30
   }
});