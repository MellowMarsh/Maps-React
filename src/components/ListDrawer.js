import React, { Component } from 'react';
//import drawer componet 
import Drawer from '@material-ui/core/Drawer';

class ListDrawer extends Component {
    state = {
        open: false,
        query: ""
    }
//css positioning and style for the list
    styles = {
        list: {
            width: "250px",
            padding: "0px 15px 0px"
        },
        noBullets: {
            listStyleType: "none",
            padding: 0
        },
        fullList: {
            width: 'auto'
        },
        listItem: {
            marginBottom: "15px"
        },
        listLink: {
            background: "transparent",
            border: "none",
            color: "black"
        },
        filterEntry: {
            border: "1px solid gray",
            padding: "3px",
            margin: "30px 0px 10px",
            width: "100%"
        }
    };
    //fires everytime there is typing in query box
    updateQuery = (newQuery) => {
        // Save the new query string in state and pass the string
        // up the call tree
        this.setState({ query: newQuery });
        this.props.filterLocations(newQuery);
    }

    render = () => {
        return (
            <div>
                <Drawer open={this.props.open} onClose={this.props.toggleDrawer}>
                    <div style={this.styles.list}>
                        <input
                            style={this.styles.filterEntry}
                            type="text"
                            placeholder="Filter list"
                            name="filter"
                            onChange={e => this
                                .updateQuery(e.target.value)}
                                //the initial value of the query
                            value={this.state.query} />
                        <ul style={this.styles.noBullets}>
                            {this.props.locations && this
                                .props
                                .locations
                                .map((location, index) => {
                                    return (
                                        <li style={this.styles.listItem} key={index}>
                                    {/*button adds tab and accessibility to the list and filter. onClick call the function in higher level component in App.js*/}                                            
                                    <button style={this.styles.listLink} key={index} onClick={e => this.props.clickListItem(index)}>{location.name}</button>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </Drawer>
            </div>
        )
    }
}
//Export to render Webpage
export default ListDrawer;