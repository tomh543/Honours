const { init } = require('express/lib/application');
const res = require('express/lib/response');

exports.landing_page=function(req,res){
res.render("home",{
        'title': 'Security App',
        'WebAppLinks': 'Options',
        'the-description': 'The below links will be used to run the app or view previous results. When running tests it will automatically show results when complete',
        'button1': 'Run Test Suite',
        'button2': 'Show Previous Results'

})
}