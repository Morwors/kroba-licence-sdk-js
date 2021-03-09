const axios = require('axios');
const { getHWID } = require('hwid')


async function activateLicence(licence_id){
    try{
        const hwid = await getHWID();
        const res = await axios.post('https://licence.krobacorp.studio/api/licence/activate', {
            licence_id,
            token: hwid
        })
        return res.data;
    }catch (e) {
        // console.log('Error: ',e)
        return e.response;
    }
}

module.exports = activateLicence;
