import React, {Component} from "react";
import firebase from "./firebase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData:""
    };
  }

  // saveData = (data) => {
  //   const db = firebase.firestore().collection("User");
  //   db.add(data)
  //     .then(() => {
  //       firebase
  //         .firestore()
  //         .collection("formData")
  //         .doc("Count")
  //         .set({
  //          
  //         });
  //       console.log("data submit successfully");
  //     })
  //     .catch((err) => console.log(err));
  // };

  fetchData = () => {
    const db = firebase.firestore();
    db.collection("formData")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          this.setState({
            formData: data
           
          });
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {formData} = this.state;
    console.log("state", formData);
    return (
<div
className="container page landscape"
style={{ marginTop: '100px', fontSize: '10px' }}
>
<p
  style={{
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}
>
  
  <span>Customer Email:</span>
</p>


    <div className="card mb-3 page landscape">
      <div className="row">
        <div className="col-sm-4">
          <table className="table name" style={{ borderBottom: '0px' }}>
            <tbody>
              
                    <tr>
                      <th scope="col" style={{ fontSize: '20px' }}>
                       
                      </th>
                    </tr>
         
            </tbody>
          </table>
        </div>
        <div className="col-sm-8">
          <table className="table">
            <tbody>
              <tr>
                <th scope="col">
                  <strong>Likely Current Address: </strong>
                </th>
             
                  <td className="address">
                  {formData.CAddress}
                 
                </td>
                      
               
              </tr>
              <tr>
                <th scope="col">
                  <strong>Likely Current Email:</strong>
                </th>
                
                      <td className="address">
                      {formData.CEmail}
                       
                      </td>
            
              </tr>
              <tr>
                <th scope="col">
                  <strong>Likely Current Phone Number:</strong>
                </th>
                
                      <td className="address">
                       {formData.CPhone} 
                       
                      </td>
               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="row">
                  <strong>
                    Address (County/Parish/Borough) History:{' '}
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
             
                <>
                  <tr>
<td scope="row">{formData.LAddress}</td>
                  </tr>
                  <tr>
                    <td>
                      <span></span>{' '}
                      <span className="address-flex">
                       
                      </span>
                    </td>
                  </tr>
                </>
           
            </tbody>
          </table>
        </div>
        <div className="col-sm-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="row">
                  <strong>Phone (Last Seen)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              
                <>
                  <tr>
                    <td>
                     {formData.LPhone}
                     
                    </td>
                  </tr>
                </>
            
            </tbody>
          </table>
        </div>
        <div
          className="col-sm-4"
          style={{ position: 'absolute', left: '700px' }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="row">
                  <strong>Possible Email Addresses: (Last Seen)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
            
                <tr>
                  <td scope="row">
                  {formData.LEmail}
                  </td>
                </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
 
 
</div>
    );
  }
}

export default App;
