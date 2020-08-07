import React, { Component } from "react";
import {Card , Form} from "antd"
import {Navbar  } from "react-bootstrap";
const list = [
    // { name: 'Iphone X' , img : ""},
    // { name: 'Iphone XR' , img :""},
    // { name: 'Iphone 8 plus' , img : ""},
    // { name: 'Iphone 8' , img :""},
    { name: 'Iphone 7' , img : "https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"},
    { name: 'Iphone 7 plus' , img :"https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb"},
    // { name: 'Iphone X pro' , img : ""},
    { name: 'Iphone 6s' , img :"https://www.91-img.com/gallery_images_uploads/a/c/ac20d863ce7e94112f16c4122c32cd83d725dde8.jpg?w=0&h=901&q=80&c=1"},
    // { name: 'Iphone 6' , img : ""},
  ];
  

  
class AllMobiles extends Component{
constructor(props){
    super(props);
    this.state={
    }

}
render(){
    const child = { width: `300em`, height: `100%`}

    return(
        <Navbar className="justify-content-between" style ={{  overflow: "auto" , background:"#FFFFFF" }}>
<div>
<img style ={{height:"180px"}} src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
<br/>
Iphone 7
</div>
          
        </Navbar>
        // <Form         layout="inline"        >
            // <div style={{scroll:"x-axis"}}>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
            // <img src ="https://daisycon.io/images/mobile-device/?width=250&height=250&mobile_device_brand=apple&mobile_device_model=iphone+7+128gb"></img>
        // </div>
        // </Form>
        
        
    )
}

}

export default AllMobiles;