import React , {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./NavBar.css";

class NavBar extends Component {
    state = {
        value: 0,
    }

    handleChange = (event, newValue) => {
        this.setState({value:newValue});
    }

    render() {
        return (
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            className="navbar"
            indicatorColor="secondary"
            textColor="primary"
            centered
            >
                <Tab label="About Me" />
                <Tab label="Experience" />
                <Tab label="Portfolio" />
                <Tab label="Skill" />
                <Tab label="Contact Me" />
            </Tabs>
        )
    }
}

export default NavBar;