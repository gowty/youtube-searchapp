import React,{Component} from 'react';

class SearchBar extends Component{

constructor(props){
  super(props);
  this.state = {term:''};
}

oninputchange(term){
this.setState({term});
this.props.onsearchtermchange(term);
}

  render(){
    return(
      <div className="search-bar">
      <div className="input-group">
        <span className="input-group-addon"><a href="http://gowty.herokuapp.com/" style={{textDecoration:"none"}}>Gowty-App</a></span>
      <input className="form-control" placeholder="Search videos"
      value={this.state.term}
      onChange={event => this.oninputchange(event.target.value)} />
      </div>
      </div>
    );
  }
}
export default SearchBar;
