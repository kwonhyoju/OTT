import React, { Component } from "react";
import axios from "axios";

const withBoxoffice = (url) => (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
            };
        }
        async req() {
            try {
                const response = await axios.get(url);
                this.setState({
                    data: response,
                });
            } catch (e) {
                console.log(":::error:::", e);
            }
        }

        componentDidMount() {
            this.req();
        }

        render() {
            return <WrappedComponent {...this.props} data={this.state.data} />;
        }
    };
};

export default withBoxoffice;
