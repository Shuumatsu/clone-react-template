#!/usr/bin/env node
const { exec } = require('child_process')
const fs = require('fs-extra')

let dirname = process.argv[2]
if (!dirname) throw new Error('path required')
let currentFolder = false
if (dirname === '.') {
  currentFolder = true
  dirname = '@clone_react_template_temp'
}

exec(`git clone https://github.com/VanishingDante/react-start-template.git ${dirname}`, (error, stdout, stderr) => {
  if (error) {
    throw error
  }

  try {
    fs.removeSync(`./${dirname}/.git`)
  } catch (err) {
    console.error(err)
  }

  if (currentFolder) {
    try {
      fs.copySync(dirname, '.')
      fs.removeSync(dirname)
    } catch (err) {
      console.error(err)
    }
  }
})