import React, {Component} from "react";
import {inject,observer} from "mobx-react";
import SectionWrap from "../section/SectionWrap";

@inject("apiStore")
@observer
class SectionContainer extends Component{

    componentDidMount(){
        this.props.apiStore.getData();
    }

    render(){
        return <SectionWrap viewData={this.props.apiStore.data}/>;
    }
}

export default SectionContainer;