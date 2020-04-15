import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import SectionWrap from "../section/SectionWrap";
import Loading from "../Loading";
import Error from "../Error";

@inject("apiStore")
@observer
class SectionContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            error:null
        }
    }

    async componentDidMount() {
        try{
            this.props.apiStore.popularData();
            this.props.apiStore.nowpalyData();
            this.props.apiStore.upcomingData();
            this.props.apiStore.getGenre();
        }catch(error){
            this.setState({
                error
            })
        }
    }

    render() {
        const loading = this.props.apiStore.isLoading;
        if(this.state.error === null){
            return  (
                <Fragment>
                    {loading ? (
                        <SectionWrap
                            popData={this.props.apiStore.popData}
                            nowData={this.props.apiStore.nowData}
                            upcomeData={this.props.apiStore.upcomeData}
                            genreData={this.props.apiStore.genreData}
                        />
                    ) : (
                        <Loading />
                    )} 
            </Fragment>
            );
        }else{
           return <Error/>
        }
    }
}

export default SectionContainer;
