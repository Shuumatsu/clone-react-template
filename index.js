const exec = require('child_process').exec;

const dirName = process.argv[2]

exec(`git clone https://github.com/VanishingDante/react-template.git ${dirName}`, (error, stdout, stderr) => {
  if (error) {
    throw error
  }

  exec(`rm -rf ./${dirName}/.git`, (error, stdout, stderr) => {
    if (error) {
      throw error
    }
  })
})