const path = require('path');
const fs = require('fs');
const fsp = require('mz/fs')

const p = process.argv[2] || process.cwd();
const search = process.argv[3] || '';
const replace = process.argv[4] || '';
const logFileName = process.argv[5] || `${process.cwd()}/rename.log`;

console.log(p, process.argv);
console.log(`logs will be stored in ${logFileName}`);
let log = [];
let errors = [];

fs.readdir(p, (err, files) => {
	let promises = files.map(file => {
		let oldPath = `${p}/${file}`;
		let newPath = `${p}/${file.replace(search, replace)}`;
		// return fsp.stat(oldPath).then((e, status) => {
		return fsp.rename(oldPath, newPath).then((e) => {
			return {
				status: e ? 'failed' : 'success', 
				path: oldPath
			}
		});
	});
	Promise.all(promises).then((values) => {
		fs.writeFileSync(logFileName, JSON.stringify(values), 'utf8');
		console.log('Done');
	})
})

