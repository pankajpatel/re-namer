const fs = require('fs');
const path = require('path');
var program = require('commander');
var glob = require("glob");

const pack = require('./package.json')

program
  .version(pack.version)
  .option('-d, --dir <dir>', 'Directory to work on')
  .option('-i, --input-pattern <files>', 'Directory to work on')
  .option('-s, --search <search>', 'Search for the pattern in file name')
  .option('-r, --replace <replace>', 'replace with')
  .option('-l, --log <log>', 'replace with')
  .option('-dr, --dry-run', 'replace with')
  .parse(process.argv);
 
console.log(`logs will be stored in ${program.log}`);

const renamer = (oldPath, newPath) => new Promise(
	(resolve, reject) => {
		const response = { oldPath, newPath, status: false };
		fs.rename(oldPath, newPath, (err) => {
			if (err) reject(response);
			else resolve(Object.assign({}, response, { status: true }));
		});
	});

const stringify = d => JSON.stringify(d, null, 2);

const writeLog = d => fs.writeFileSync(program.log, stringify(d), 'utf8');

const NewRename = (dir, files, search, replace) => {
	console.log('PARAMS:');
	console.log('Dir:', dir);
	console.log('Files:', files);
	console.log('Search:', search);
	console.log('Replace:', replace);
	console.log('-----------------------')
 
	// options is optional
	glob(files, { cwd: dir }, function (er, files) {
		if (er) {
			console.log(er);
			return;
		}
		const promises = files.map(file => {
			const filePath = file.split(path.sep);
			const fileName = filePath.pop().replace(new RegExp(search), replace);
			const newName = path.join(dir, filePath.join(path.sep), fileName);

			console.log(file , ' -> ', newName);

			return renamer(path.join(dir, file), newName);
		})

		Promise
			.all(promises)
			.then(writeLog)
			.then(() => console.log('Done'));
	})
}

const { dir, inputPattern, search, replace } = program;
NewRename(dir, inputPattern, search, replace);
