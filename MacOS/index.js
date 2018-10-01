const fs = require('fs')
const path = require('path')
const cp = require('child_process')
const tools = require('./tools.js')

const appPath = path.join(__dirname, 'wechatdevtools')
const packResource = path.join(__dirname, '../Resources/package.nw')
const localCodePath = `${process.env.HOME}/Library/Application Support/微信web开发者工具/WeappCode/`
const localPluginPath = `${process.env.HOME}/Library/Application Support/微信web开发者工具/WeappPlugin/`


const localResourcePath = path.join(localCodePath, 'package.nw')
const newLocalResourcePath = path.join(localCodePath, 'new_package.nw')

const localResourcePackageJSON = path.join(localResourcePath, 'package.json')


function initLocalPlugin(cwd) {
  const resourcePluginPath = path.join(cwd, './js/ideplugin')
  try {
    if (!fs.existsSync(localPluginPath)) {
      tools.mkdirSync(localPluginPath)
    }

    const distManifestPath = path.join(localPluginPath, './manifest.json')

    let manifest = {}
    if (fs.existsSync(path.join(resourcePluginPath, './manifest.json'))) {
      tools.cpSync(path.join(resourcePluginPath, './manifest.json'), distManifestPath)
      manifest = JSON.parse(fs.readFileSync(distManifestPath, 'utf8'))
    }

    if (fs.existsSync(path.join(resourcePluginPath, 'devtools'))) {
      tools.cpSync(path.join(resourcePluginPath, 'devtools'), path.join(localPluginPath, 'devtools'))
    }

    if (manifest.devtools_page
      && fs.existsSync(distManifestPath)
      && fs.existsSync(path.join(localPluginPath, manifest.devtools_page)))
    {
      return localPluginPath
    }
  } catch(e) {}

  return resourcePluginPath
}


function init () {
  if (fs.existsSync(newLocalResourcePath)) {
    // 存在的 new_package 则表示，之前的代码包已经完整解压了，可以拷贝
    if (fs.existsSync(path.join(newLocalResourcePath, 'new_package'))
      || fs.existsSync(path.join(localResourcePath, 'new_package'))) {
      tools.mvSync(newLocalResourcePath, localResourcePath)
    }
  }

  let cwd = localResourcePath
  if (!fs.existsSync(cwd) || !fs.existsSync(localResourcePackageJSON)) {
    cwd = packResource
  } else {
    let localResourceStat = fs.statSync(localResourcePackageJSON)
    let packResourceStat = fs.statSync(path.join(packResource, 'package.json'))
    if (localResourceStat.ctimeMs < packResourceStat.ctimeMs) {
      cwd = packResource
    }
  }

  const extensionPath = initLocalPlugin(cwd)

  const args = ['.', `-load-extension=${extensionPath}` ]
  const child = cp.spawn(appPath, args, {
    cwd: cwd,
    detach: true
  });
  child.ref()

  process.exit(0)
}

init()