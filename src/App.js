import React, { Component } from 'react';
import './App.css';
import {TextField,Button,Badge,List,Subheader,ListItem,FontIcon,DialogContainer} from 'react-md';
import DialogueBox from './DialogueBox'
const StarIcon = () => <FontIcon>star</FontIcon>;


class App extends Component {
      constructor(Props){
        super(Props);
        this.state ={
          visible: false,
          title:"",
          primaryText:"",
            noOfNotficaions:"",
            notification:[{title :"Return Initiatted -C5826A47",read:false,text:"Delivered on 24Jan - Return Initiatted on 26Jan - C5826A47"},{title :"Return Completed -AS5826A47",read:false,text:"Return Completed on 25Jan - AS5826A47"},{title :"Refund Failure -D146A47",read:false,text:"Refund Failed on 24Jan -D146A47"},{title :"Return Initiatted -C5826A47",read:false}]
          };  
          this.hide=this.hide.bind(this);
       }

     componentDidMount() {
        let i=0;
        this.state.notification.map((notification)=>{if(notification.read===false){++i}});
        this.setState({
        noOfNotficaions:i
      });   
     }
hide(){
  this.setState({visible:false})
}
     render() {
        return (
          <div className="App" >
            <h1>Hello World</h1>
            <List className="md-cell md-paper md-paper--1">
               <div className="md-grid">
                 <DialogContainer
                    id="simple-list-dialog"
                    visible={this.state.visible}
                    title={this.state.title}
                    onHide={this.hide}>
                    <List onClick={this.hide} onKeyDown={this.handleKeyDown}>
                      <ListItem primaryText={this.state.primaryText} />            
                    </List>
                  </DialogContainer>
                    {/*<Button onClick={()=>this.setState({noOfNotficaions:2})}>test</Button>*/}
                   <Subheader className="App-header" primaryText="Notifications" primary />
                   <Badge badgeContent={this.state.noOfNotficaions} primary badgeId="notifications-1">
                      {/*<Button icon>notifications</Button>*/}
                   </Badge>
               </div>
               
               {this.state.notification.map((course,index)=>{ return (<div className="app-record">
                <Button className={course.read? "read" : "notRead" } key={index} 
                onClick={()=> { if(course.read===false)
                        { var stateCopy = Object.assign({}, this.state);
                             stateCopy.notification[index].read = true;
						                	 stateCopy.title=course.title;
                               stateCopy.primaryText=course.text;
                              stateCopy.visible=true;
                             stateCopy.noOfNotficaions--;  
                            this.setState(stateCopy);
                        }
                     else{
                           var stateCopy = Object.assign({}, this.state);
                          stateCopy.notification[index].read = false;
                          stateCopy.noOfNotficaions++;  
                         this.setState(stateCopy);
                        }
                        }
                      }
                 
              primaryText={course.title}
              secondaryText={course.text} />
            
           </div>)})}
        </List>
      </div>
    );
  }
}

export default App;
