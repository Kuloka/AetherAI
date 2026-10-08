const path=require('node:path');
const {pathToFileURL}=require('node:url');
function trustedSender(event,contents,entry){return contents.has(event.sender?.id)&&event.senderFrame===event.sender.mainFrame&&event.senderFrame.url===pathToFileURL(entry).href;}
function externalUrl(value){if(typeof value!=='string'||value.length>4096)throw Error('Invalid external URL');const url=new URL(value);if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw Error('Only HTTP(S) links can be opened');return url.href;}
function projectBoundary(root,target){const resolvedRoot=path.resolve(root),resolvedTarget=path.resolve(target);const relative=path.relative(resolvedRoot,resolvedTarget);if(relative==='..'||relative.startsWith('..'+path.sep)||path.isAbsolute(relative))throw Error('Path must stay inside the projects folder');const fs=require('node:fs');let current=resolvedRoot;for(const part of relative.split(path.sep).filter(Boolean)){current=path.join(current,part);if(fs.existsSync(current)&&fs.lstatSync(current).isSymbolicLink())throw Error('Project paths must not contain symbolic links or junctions');}return resolvedTarget;}
function secureStorageAvailable(storage){return storage.isEncryptionAvailable()&&storage.getSelectedStorageBackend?.()!=='basic_text';}
module.exports={trustedSender,externalUrl,projectBoundary,secureStorageAvailable};
