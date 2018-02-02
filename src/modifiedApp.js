import React, { Component } from 'react';
import './App.css';
import {TextField,Button,Badge,List,Subheader,ListItem,FontIcon,DialogContainer} from 'react-md';
import DialogueBox from './DialogueBox'
const StarIcon = () => <FontIcon>star</FontIcon>;


class App extends Component {
      constructor(Props){
        super(Props);
        this.state ={
          decider:false,
          visible: false,
          title:"",
          primaryText:"",
            noOfNotficaions:'',
            notificaton:[{title :"Return Initiatted -C5826A47",read:false,text:"Delivered on 24Jan - Return Initiatted on 26Jan" },{title :"Return Completed -AS5826A47",read:false,text:"Return Completed on 25Jan - AS5826A47"},{title :"Refund Failure -D146A47",read:false,text:"Refund Failed on 24Jan -D146A47"},{title :"Return Initiatted -C5826A47",read:false,text:"Delivered on 24Jan - Return Initiatted on 26Jan"}]
          };  
          this.hide=this.hide.bind(this);
       }

     componentDidMount() {
        let i=0;
        this.state.notificaton.map((notificaton)=>{if(notificaton.read===false){++i}});
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
            
            <List className="md-cell md-paper md-paper--6">
               <div className="md-grid">
                 
                  
                   <Badge  onClick={()=>this.setState({decider:(!this.state.decider)})}badgeContent={this.state.noOfNotficaions} primary badgeId="notifications-1">
                      <Button icon>notifications</Button>
                   </Badge>
               </div>
              
                  {/*this.state.noOfNotficaions!=0*/}
              {this.state.decider?
                <div className="md-paper md-paper--1">
                 <Subheader className="App-header" primaryText="Notifications" primary />
               {this.state.notificaton.map((course,index)=>{ return (<div className="app-record">
                <ListItem className={course.read? "read" : "notRead" } key={index} 
                onClick={()=> { if(course.read===false)
                        { var stateCopy = Object.assign({}, this.state);
                             stateCopy.notificaton[index].read = true;
						                	 stateCopy.title=course.title;
                               stateCopy.primaryText=course.text;
                              stateCopy.visible=true;
                             stateCopy.noOfNotficaions--;  
                            this.setState(stateCopy);
                        }
                     else{
                           var stateCopy = Object.assign({}, this.state);
                          stateCopy.notificaton[index].read = false;
                          stateCopy.noOfNotficaions++;  
                         this.setState(stateCopy);
                        }
                        }
                      }
                 
              primaryText={course.title}
                  secondaryText=  {course.read ?(course.text):null}
              />
            
           </div>)})}
           </div> : null}
               
        </List>
      </div>
    );
  }
}

export default App;
