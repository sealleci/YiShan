const exec = require("child_process").exec;
const simpleGit = require("simple-git");

(async () => {
    const git = simpleGit();
    let comment = '';
    if (process.argv.length >= 3) {
        comment = process.argv[2];
    } else {
        const date = new Date();
        function pad(number) {
            return (number < 10 ? '0' : '') + number
        }
        comment = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    }
    await git.add('.');
    await git.commit(comment);
    console.log(`Executed git commands with comment "${comment}".`);
})();