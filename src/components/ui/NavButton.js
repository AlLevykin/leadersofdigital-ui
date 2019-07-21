import React from 'react';
import Button from 'react-bootstrap/Button'

class NavButton extends React.Component{
    constructor( props ){
      super( props );
      this.handleClick = this.handleClick.bind(this);
      this.caption = props.caption;
      this.className = props.className;
      this.type = props.type;
    }
   
    handleClick(event){
      alert(this.caption)
    }
   
    render(){
      return (
        <Button type="button" class="btn btn-link" onClick={this.handleClick}>
            <i className={this.className} ></i>
            {this.caption}
        </Button>
      );
    }
  }

  export default NavButton