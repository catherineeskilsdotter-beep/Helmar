import { createServer } from "node:http";
import { readFile } from "node:fs";
import { extname, resolve, sep } from "node:path";

const root = process.cwd();
const contentTypes = {
  ".glb": "model/gltf-binary",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
  const file = resolve(root, relativePath);
  if (file !== root && !file.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  readFile(file, (error, contents) => {
    if (error) {
      response.writeHead(404).end("Not found");
      return;
    }
    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": contentTypes[extname(file)] || "application/octet-stream"
    }).end(contents);
  });
}).listen(4173, "127.0.0.1", () => {
  console.log("Helmar dev server listening at http://localhost:4173");
});
