import { readdirSync, statSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    let raw_dir = "../less/";
    let raw_out = "../css/";
    let dir_path = path.join(__dirname, raw_dir);
    let files = readdirSync(dir_path, { encoding: "utf-8", withFileTypes: true });

    for (let file of files) {
        let file_path = path.join(__dirname, `${raw_dir}${file.name}`);
        if (statSync(file_path).isFile() && path.extname(file_path).includes("less")) {
            execSync(`lessc ${dir_path}${file.name} ${path.join(__dirname, raw_out)}${file.name.match(/^([^\.]+)\.[^\.]+$/)[1]}.css --source-map`);
        }
    }

    console.log(`@script.less: Compiled ${files.length} less file${files.length > 1 ? "s" : ""}.`);
})();