import React, {Component} from 'react';
import './App.css';
//import hard coded data from locations.json
import locations from './data/locations.json';
//import MapDisplay to show the map
import MapDisplay from './components/MapDisplay';
import ListDrawer from './components/ListDrawer';

//keep the state and functions above the level of componets that will need them
class App extends Component {
  state = {
    //define latitude,longitude, zoom of where you want the map to display, and pull in the locations.
    lat: 31.0783698,
    lon: -97.7570987,
    zoom: 13,
    all: locations,
    filtered: null,
    open: false
  }

  //hamburger button
  styles = {
    menuButton: {
      margin: 70,
      position: "absolute",
      left: 10,
      top: 20,
      background: "lightgray",
      padding: 10,
      width:50,
     height:50,
    },
    hide: {
      display: 'none'
    },
    header: {
      marginTop: "0px"
    }
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      filtered: this.filterLocations(this.state.all, "")
    });
  }

  toggleDrawer = () => {
    // Toggle the value controlling whether the drawer is displayed
    this.setState({
      open: !this.state.open
    });
  }

  updateQuery = (query) => {
    // Update the query value and filter the list of locations accordingly
    this.setState({
      ...this.state,
      selectedIndex: null,
      filtered: this.filterLocations(this.state.all, query)
    });
  }

  filterLocations = (locations, query) => {
    // Filter locations to match query string
    return locations.filter(location => location.name.toLowerCase().includes(query.toLowerCase()));
  }

  clickListItem = (index) => {
    // Set the state to reflect the selected location array index
    this.setState({ selectedIndex: index, open: !this.state.open })
  }

  render = () => {
    return (
      <div className="App">
        <div>
          <button onClick={this.toggleDrawer} style={this.styles.menuButton}>
            <i className="fa fa-bars"></i>
          </button>
          <header> <h1>Local Fast Food Locations </h1>
         <h1>Killeen, TX</h1>
         </header>
        </div>
        <MapDisplay
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
          locations={this.state.filtered}
          selectedIndex={this.state.selectedIndex}
          clickListItem={this.clickListItem}/>
        <ListDrawer
          locations={this.state.filtered}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}
          filterLocations={this.updateQuery}
          clickListItem={this.clickListItem}/>
      </div>
    );
  }
}

export default App;
