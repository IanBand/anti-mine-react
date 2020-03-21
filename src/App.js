// REACT //
import React, { PureComponent } from 'react';

// REDUX //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import AntiMine from './components/AntiMine.js';
import Settings from './components/SettingsMenu.js';
import LevelSelect from './components/LevelSelect.js';
import Title from './components/TitleScreen.js';

// CSS //
import './assets/background.css';

class App extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        let view;
        switch(this.props.view){
            case 'play':
                view = <AntiMine/>;
                break;
            case 'settings':
                view =  <Settings/>;
                break;
            case 'select':
                view =  <LevelSelect/>;
                break;
            case 'title':
            default:
                view =  <Title/>;
                break;
        }
        return(
            <>{/* fragemnt syntax */}
                
                <div id={'background-checkers'}/>
                <div id={'background-cross'}/>
                {view}
                
            </>
        )
    }
}


const mapStateToProps = state => ({
    view: state.view
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);