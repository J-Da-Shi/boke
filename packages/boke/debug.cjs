// debug.cjs
const path = require('path');
const fs = require('fs');

// 手动解析 node_modules 中的路径
const pkgPath = path.resolve(__dirname, 'node_modules/@lib/components/package.json');

if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  console.log('✅ Found @lib/components/package.json');
  console.log('Name:', pkg.name);
  console.log('Main entry:', pkg.main);
  console.log('Module entry:', pkg.module);
  console.log('Full path:', pkgPath);
} else {
  console.error('❌ package.json not found at:', pkgPath);
}