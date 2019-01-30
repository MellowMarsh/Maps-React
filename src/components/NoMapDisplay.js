import React, {Component} from 'react';

class NoMapDisplay extends Component {
    state = {
        show: false,
        timeout: null
    }

    componentDidMount = () => {
        //time to know if google maps has loaded to the internet and downloaded the libray ect...
        let timeout = window.setTimeout(this.showMessage, 1000);
        this.setState({timeout});
    }

    componentWillUnmount = () => {
        //this will clear timeout if it is still running to prevent resource leak.
        window.clearTimeout(this.state.timeout);
    }
   //display error
    showMessage = () => {
        this.setState({show: true});
    }

    render = () => {
        return (
           <div>
                {this.state.show
                    ? (
                        <div>
                            <h1>Error loading map</h1>
                            < p >
                            Network error. Could not load map content.  Try back later or refresh the browser.</p>
                        </div>
                    )
                    : (<div><h1>Loading</h1></div>)
            } </div>
        )
    }
}

export default NoMapDisplay;