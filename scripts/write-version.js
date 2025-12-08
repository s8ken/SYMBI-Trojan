const fs = require('fs')
const path = require('path')

const sha = process.env.VERCEL_GIT_COMMIT_SHA || process.env.COMMIT_SHA || 'local'
const short = typeof sha === 'string' ? sha.slice(0, 7) : 'local'
const ts = new Date().toISOString()

const content = `export const BUILD_SHA = "${short}"\nexport const BUILD_TIME = "${ts}"\n`

const outPath = path.join(__dirname, '..', 'src', 'build-info.ts')
fs.writeFileSync(outPath, content)