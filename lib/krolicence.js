const axios = require('axios');
const { getHWID } = require('hwid')


async function activateLicence(licence_id, apikey){
    try{
        const config = {
            headers: { Authorization: `Bearer ${apikey}` }
        };
        const hwid = await getHWID();
        const res = await axios.post('https://licence.krobacorp.studio/api/licence/activate', {
            licence_id,
            token: hwid
        },config)
        return res.data;
    }catch (e) {
        // console.log('Error: ',e)
        return e.response;
    }
}

module.exports = activateLicence;
