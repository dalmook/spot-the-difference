import fs from 'node:fs/promises';
await fs.mkdir('dist',{recursive:true});for(const file of ['index.html','app.js','core.js','style.css','favicon.svg','manifest.webmanifest','sw.js'])await fs.copyFile(file,'dist/'+file);await fs.cp('assets','dist/assets',{recursive:true});console.log('Static release built in dist/');
