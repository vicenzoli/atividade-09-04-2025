function ligarFogao (fogaoestado,callback){
    console.log(`o fogão está ${fogaoestado}`)
    setTimeout(
        callback, 1000, fogaoestado
    )
}

function ferverAgua(ferver,callback){
    console.log(`A agua está`)
    setTimeout(
        callback, 3000
    )
}

function colocarMacarrao(callback){
    console.log(`colocando o macarrão na água fervente...`)
    setTimeout(
        callback, 2000
    )
}

function escorrerMacarrao(callback){
    console.log(`escorrendo macarrão...`)
    setTimeout(
        callback, 4000
    )
}

function servirMacarrao(callback){
    console.log(`o macarrão está servido`)
    setTimeout(
        callback, 5000
    )

}
ligarFogao(() => {
    ferverAgua(() => {
        colocarMacarrao(() => {
            escorrerMacarrao(() => {
                servir(() => {
                    console.log("Prato servido! Bom apetite!");
                });
            });
        });
    });
});