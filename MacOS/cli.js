const fs = require('fs')
const path = require('path')
const cp = require('child_process')

const packResource = path.join(__dirname, '../Resources/package.nw')
const localResource = `${process.env.HOME}/Library/Application Support/微信开发者工具/WeappCode/package.nw`

let cwd = localResource
if (!fs.existsSync(cwd)) {
  cwd = packResource
} else {
  let localResourceStat = fs.statSync(cwd)
  let packResourceStat = fs.statSync(packResource)
  if (localResourceStat.mtimeMs < packResourceStat.mtimeMs) {
    cwd = packResource
  }
}

const CLI_JS_PATH = path.join(cwd, 'js/common/cli/index.js')

const child = cp.spawnSync(process.execPath, [CLI_JS_PATH].concat(process.argv.slice(1)), {
  cwd: cwd,
  stdio: [
    process.stdin,
    process.stdout,
    process.stderr,
  ]
})

process.exit(0)
