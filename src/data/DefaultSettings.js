export const initLogicSettings = {
    // PROPERTIES -- primitive data type options
    numMines: 5, //total number of mines & anti-mines
    rows: 10,
    columns: 10,
    kernelWeight: 1,
    seed: Math.floor(Math.random() * 133742069),
    haveAntiMines:  true,

    //DATA PROPERTIES -- properties that are data objects
    kernel: [[1]],
    presetBoard: false,//[[]], // OPTIONAL

}

export const initGenSettings = {
    themeId: 0,
    raster: [],
    level: 0,
    kernelTypeId: 1, //0: taxi, 1: king
    kernelCenter: 3,
    showTileValues: true,
    bgScroll: true,
    tileSizeId: 0,
    difficultyId: 0, 

}

export const kernelTypes = ['taxi','king'];


export const multiplierRange = [1.0, 7.0];
export const cutoffRange = [0.1, 3]