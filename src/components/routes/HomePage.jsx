import React from "react";
import InformationSection from "../common/InformationSection";
import jobsData from "../utils/jobsData";


class HomePage extends React.Component {
    state = {
        index: 0
    }
    render() { 
        return (  
            <React.Fragment>
            <Selection onOptionChange={this.onOptionChange}/>
            <InformationSection text={jobsData[this.state.index].text}/>
            </React.Fragment>
        );
    }
    onOptionChange = (index)=>{
        this.setState({index})
    }
}
 
export default HomePage;

class Selection extends React.Component {
    render() { 
        return ( <div className="selection">
            <select onChange={this.handleChange}>
                {
                    jobsData.map((data,index)=>{
                        return <option value={index}>{data.option}</option>
                    })
                }
            </select>
        </div>);
    }

    handleChange = (e) =>{
        this.props.onOptionChange(e.target.value)
    }
}
 
