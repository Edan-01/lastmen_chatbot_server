let traits = require("./dict/traits");

module.exports = async (rWit, indexChat) => {
    let robotRes = "Disculpa no lo entendi.";
    let resJson = {};
    let localTraits = await traits();
    for(var i=0; rWit["traits"].length>i; i++) {
        let nameTrait = rWit["traits"][i];
        if ( localTraits[nameTrait] ) {
            let single = localTraits[nameTrait];
            for(let u=0; rWit["wit"]["traits"][nameTrait].length>u; u++) {
                resJson = localTraits[nameTrait]
                    [rWit["wit"]["traits"][nameTrait][u]["value"]];
            }
        }
    }

    if ( Object.keys(resJson).length !== 0 ) {
        if ( indexChat == 0 ) {
            robotRes = resJson["saludo"];
        } else {
            robotRes = resJson["despido"];
        }
    }

    return robotRes;
};