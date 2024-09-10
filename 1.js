const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.
const fs = require('fs');


(async () => {
    const browser = await webkit.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    //   await page.screenshot({ path: 'screenshot.png' });
    let text = await page.locator("html").innerText()
    console.log(text);


    // 写入文件的路径和文件名
    const filePath = './1.txt';

    // 使用fs.writeFile方法写入文件
    fs.writeFile(filePath, text, (err) => {
        if (err) {
            console.error('写入文件时发生错误:', err);
        } else {
            console.log('文件写入成功！');
        }
    });


    await browser.close();
    console.log(111111111111111111);
})();





