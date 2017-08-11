import React from 'react';

var Variable = React.createClass({
    getInitialState: function(){
        return {selected: false};
    },
    select:function(event){
        if(event.target.textContent === this.state.selected){
            this.setState({selected: false});
        }else{
            this.setState({selected: event.target.textContent});
        }
    },
    render: function(){
        var mySelectStyle = {
            border: '1px solid #999',
            display: 'inline-block',
            padding: '5px'
        };
        return (
            <div style={mySelectStyle}>
                <MyOption state={this.state.selected} select={this.select} value="Volvo"></MyOption>
                <MyOption state={this.state.selected} select={this.select} value="Saab"></MyOption>
                <MyOption state={this.state.selected} select={this.select} value="Mercedes"></MyOption>
                <MyOption state={this.state.selected} select={this.select} value="Audi"></MyOption>
            </div>
        );
    }
});

var MyOption = React.createClass({
    render: function(){
        var selectedStyle = {backgroundColor:'red', color:'#fff',cursor:'pointer'};
        var unSelectedStyle = {cursor:'pointer'};
        if(this.props.value === this.props.state){
            return <div style={selectedStyle} onClick={this.props.select}>{this.props.value}</div>;
        }else{
            return <div style={unSelectedStyle} onClick={this.props.select}>{this.props.value}</div>;
        }
    }
});

export default Variable;
