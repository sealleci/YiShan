import { fork } from "child_process"

function forkSync(file_dir, file_name) {
    return new Promise((resolve, reject) => {
        const process = fork(`${file_dir}/${file_name}.js`, ["--experimental-modules"]);
        let is_invoked = false;

        process.on("error", (error) => {
            if (is_invoked) {
                return;
            }
            is_invoked = true;

            reject(error);
        });

        process.on("exit", (code) => {
            if (is_invoked) {
                return;
            }
            is_invoked = true;

            let error = null;
            if (code !== 0) {
                error = new Error(`@test.${file_name} exits with code ${code === null ? "unkown" : code}`);
            }
            if (error !== null) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

(async () => {
    let file_name = "unit"
    if (process.argv.length >= 3) {
        switch (process.argv[2]) {
            case "i":
            case "I":
                file_name = "integration";
                break;
            case "s":
            case "S":
                file_name = "system";
                break;
            case "u":
            case "U":
            default:
                break;
        }
    }

    console.log(`@script.test: Start ${file_name} test.`);
    try {
        await forkSync("./test", file_name);
    } catch (error) {
        console.log(`@script.test: ${error.message}.`);
    }
    console.log(`@script.test: Complete ${file_name} test.`);
})();