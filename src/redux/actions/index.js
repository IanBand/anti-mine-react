import {rasterizeGradient} from '../../js/ColorMap.js';
import {generateKernel} from '../../js/KernelGenerator.js';
import themes from '../../data/ColorSchemes.js'


export const updateLogicSettings = (newSetting) => ({ type: 'CHANGE_LOGIC_SETTINGS', setting: newSetting});

export const updateGenSettings = (newSetting) => ({ type: 'CHANGE_GENERAL_SETTINGS', setting: newSetting});

export const changeToView = (view) => ({ type: 'CHANGE_VIEW', view: view});

export const updateCutoff = (cutoff) => ({ type: 'UPDATE_CUTOFF', cutoff: cutoff});

export const updateMultiplier = (multiplier) => ({ type: 'UPDATE_MULTIPLIER', multiplier: multiplier});



export const setBoardRender = (board) => ({ type: 'UPDATE_BOARD', board: board});
export const setHP = (hp) => ({ type: 'UPDATE_HP', hp:hp});
export const setRemainingMines = (mines) => ({ type: 'UPDATE_REMAINING_MINES', mines:mines});


//derives datasets needed for gameplay based on settings
export const deriveData = () => {
    console.log('-=-=-=deriving data=-=-=-');
    return (dispatch, getState)=> {

        //raster the current theme
        let raster = rasterizeGradient(themes[getState().generalSettings.themeId].data);
        dispatch({type: 'SET_RASTER', raster: raster});

        //generate kernel
        let k = generateKernel(getState().generalSettings.kernelCenter, getState().generalSettings.kernelTypeId);
        dispatch({type: 'CHANGE_LOGIC_SETTINGS', setting: k}); // I think I need a real kweight here?
        console.log(k)
        //set random seed
        dispatch({type: 'CHANGE_LOGIC_SETTINGS', setting: {seed: Math.floor(Math.random() * 420691337)}}); // I dont think this does anything
    
        // not hooked up yet
        dispatch({type: 'SET_DATA_DERIVED', value: true});
    }
}



// this may need to be called mid game
export const loadRaster = () => {
    return (dispatch, getState)=> {
        
        if(!getState().generalSettings.gradient) return;

        let raster = rasterizeGradient(getState().generalSettings.gradient);
        dispatch({type: 'SET_RASTER', raster: raster});
    }
}

/*

export const loadKernel = () => {
    return (dispatch, getState)=> {
        let kernel = generateKernel(getState().generalSettings.kernelCenter, getState().generalSettings.kernelType);
        dispatch({type: 'CHANGE_LOGIC_SETTINGS', setting: {kernel: kernel, kernelWeight: 1}});
    }
}
*/
