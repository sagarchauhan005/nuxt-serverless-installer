// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

'use strict'

const gentlyCopy = require('gently-copy');

const filesToCopy = ['src/serverless.yml','src/secrets.json','src/Makefile','src/binaryMimeTypes.js','src/index.js','src/nuxt.js'];

//  local directory
const copyPath = '../../../';


// Moving files to user's local directory
gentlyCopy(filesToCopy, copyPath, {overwrite: false})
