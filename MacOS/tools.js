const fs = require('fs')
const path = require('path')

function mkdirSync(dist) {
  dist = path.resolve(dist);
  if (fs.existsSync(dist)) {
    let stat = fs.statSync(dist);
    if (stat.isDirectory()) {
      return;
    }
    // 不是目录，则删掉再建目录
    fs.unlinkSync(dist);
  }
  // 需要把父级建立起来
  mkdirSync(path.dirname(dist));
  fs.mkdirSync(dist);
}


function rmSync(filePath) {
  try {
    filePath = path.resolve(filePath)
    if (!fs.existsSync(filePath)) {
      return
    }

    let stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      let files = fs.readdirSync(filePath)
      if (files.length > 0) {
        for (let i = 0, len = files.length; i < len; i++) {
          rmSync(path.join(filePath, files[i]))
        }
      }
      fs.rmdirSync(filePath)
    } else {
      fs.unlinkSync(filePath)
    }

  } catch(e) {}
}

function cpSync(src, dist) {
  try {
    src = path.resolve(src);
    dist = path.resolve(dist);
    if (!fs.existsSync(src)) {
      // 源不存在，直接return
      return;
    }

    let srcStat = fs.statSync(src);
    if (srcStat.isDirectory()) {
      // 如果源是目录，先创建目录，再拷贝目录中的各项
      mkdirSync(dist);
      let srcFiles = fs.readdirSync(src);
      for (let i = 0, len = srcFiles.length; i < len; i++) {
        cpSync(path.join(src, srcFiles[i]), path.join(dist, srcFiles[i]));
      }
    } else {
      if (fs.existsSync(dist)) {
        let distStat = fs.statSync(dist);
        if (distStat.isDirectory()) {
          // 源是文件，而目标的目录，把目标重命名掉
          let dirname = path.dirname(dist);
          let tempName = path.join(dirname, '' + Math.random());

          // 已存在或者等于目标，则换个名字
          while (fs.existsSync(tempName) || tempName == dist) {
            tempName = path.join(dirname, '' + Math.random());
          }
          fs.renameSync(dist, tempName);
        }
      }
      // 拷贝源到目标去
      mkdirSync(path.dirname(dist))
      fs.writeFileSync(dist, fs.readFileSync(src));
    }
  } catch (e) {}
}


function mvSync (src, dist) {
  try {
    src = path.resolve(src)
    dist = path.resolve(dist)
    if (!fs.existsSync(src)) {
      // 源不存在，直接return
      return
    }

    if (fs.existsSync(dist)) {
      // 目标存在
      let distStat = fs.statSync(dist)
      let srcStat = fs.statSync(src)
      if (srcStat.isDirectory() && distStat.isDirectory()) {
        // 都是目录，则看目录内的文件
        let srcFiles = fs.readdirSync(src)
        for (let i = 0, len = srcFiles.length; i < len; i++) {
          mvSync(path.join(src, srcFiles[i]), path.join(dist, srcFiles[i]))
        }
        fs.rmdirSync(src)
        return
      }

      // src 是文件而 dist 是目录
      if (distStat.isDirectory()) {
        rmSync(dist)
      }
    }

    fs.renameSync(src, dist)
  } catch(e) {}
}


module.exports = {
  mkdirSync,
  mvSync,
  cpSync,
  rmSync
}