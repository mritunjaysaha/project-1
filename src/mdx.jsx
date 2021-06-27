import matter from "gray-matter";
import path from "path";
import fs from "fs";

const root = process.cwd();

export async function getFiles(type) {
    return fs.readdirSync(path.join(root, "data", type));
}
