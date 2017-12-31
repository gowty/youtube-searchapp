import React,{Component} from 'react';
// import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import Detail from './components/detail';
import Videolist from './components/videolist';
import registerServiceWorker from "./registerServiceWorker";

const API_KEY = 'AIzaSyDlBuzea6KojRNnXPchLlRvDnCdSrMTO-w';

class App extends Component {

constructor(props){
  super(props);
  this.state={videos:[],selectedVideo:null};
  this.videoSearch('eminem')
}

videoSearch(term){
  YTSearch({key:API_KEY,term:term},(videos)=>{
  this.setState({videos:videos,selectedVideo:videos[0]});
  });
}

  render(){
    // const videoSearch=_.debounce((term)=>{this.videoSearch(term),800})
    return(
      <div>
      <SearchBar onsearchtermchange={term=>{this.videoSearch(term)}} />
      <Detail video={this.state.selectedVideo}/>
      <Videolist
      onvideoselect={selectedVideo=>this.setState({selectedVideo})}
      videos={this.state.videos}/>
      </div>
    );
  }
}
registerServiceWorker();
ReactDOM.render(<App />, document.querySelector('.container'));
