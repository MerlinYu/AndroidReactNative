

import  React,{ Component }  from "react";
import { Enhance } from './Enhance';


const MyComponent = Enhance(class extends Component {
  render() {
    if (!this.data) return <div>Waiting...</div>;
    return <div>{this.data}</div>;
  }
});

export default MyComponent; // Enhanced component
