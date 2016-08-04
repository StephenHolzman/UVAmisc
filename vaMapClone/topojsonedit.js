var fs = require('file-system');

var usjson = JSON.parse(fs.readFileSync('countytopo.json','utf8'));

fs.writeFile('/Users/Stephen Holzman/Github/UVAmisc/vaMapClone/test.json',JSON.stringify(usjson,null,'\t'))
//var columns = ['state','statefp','countyfp','countyname','classfp']


//countykey = NULL
/*
require('csv-to-array')({
	file: '/Users/Stephen Holzman/Github/UVAmisc/countycodes.csv',
	columns: columns
}, function(err, array){
	countykey = array
	usjson.objects.counties.geometries.forEach(function(obj){
		countykey.forEach(function(key){
			if(String(obj.id) === key.statefp.concat(key.countyfp)){
				obj.countyname = key.countyname
			}
		})
	})
	usjson.objects.states.geometries.forEach(function(obj){
		countykey.forEach(function(key){
			if(+obj.id === +key.statefp){
				obj.state = key.state
			}
		})
	})
	fs.writeFile('/Users/Stephen Holzman/Github/USAmapdev/test.json',JSON.stringify(usjson,null,'\t'))

})
*/

