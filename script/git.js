const exec = require("child_process").exec;
const simpleGit = require("simple-git");

(async () => {
    const git = simpleGit();
    let comment = '';
    if (process.argv.length >= 3) {
        comment = process.argv[2];
    } else {
        let date = new Date();
        comment = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    await git.add('.');
    await git.commit(comment);
    console.log(`Executed git commands.`);
})();