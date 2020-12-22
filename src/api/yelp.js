import axios from 'axios'

export default axios.create({
    baseURL:  'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer CrJgZmADia5a336Rc6aaml7h89IbX1cpP2hN6inidh3mejlV4KKz6H7qQ_d75VTikODRTfSGd0bKUMN4jJ-WAm9-tmJNgT3FqEPGuYGCKotklQzcHq5E4XAIYDjOX3Yx'
    }
});


