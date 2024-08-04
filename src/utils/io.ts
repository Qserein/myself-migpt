import fs from "fs-extra";
import path from "path";

import { jsonDecode, jsonEncode } from "./parse";

export const kRoot = process.cwd();

export const exists = (filePath: string) => fs.existsSync(filePath);

export const getFullPath = (filePath: string) => path.resolve(filePath);

export const getFiles = (dir: string) => {
  return new Promise<string[]>((resolve) => {
    fs.readdir(dir, (err, files) => {
      resolve(err ? [] : files);
    });
  });
};

export const readFile = <T = any>(
  filePath: string,
  options?: fs.WriteFileOptions
) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    return undefined;
  }
  return new Promise<T | undefined>((resolve) => {
    fs.readFile(filePath, options, (err, data) => {
      resolve(err ? undefined : (data as any));
    });
  });
};

export const readFileSync = (
  filePath: string,
  options?: fs.WriteFileOptions
) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    return undefined;
  }
  return fs.readFileSync(filePath, options);
};

export const writeFile = (
  filePath: string,
  data: string | NodeJS.ArrayBufferView,
  options?: fs.WriteFileOptions
) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  return new Promise<boolean>((resolve) => {
    if (options) {
      fs.writeFile(filePath, data, options, (err) => {
        resolve(err ? false : true);
      });
    } else {
      fs.writeFile(filePath, data, (err) => {
        resolve(err ? false : true);
      });
    }
  });
};

export const readString = (filePath: string) =>
  readFile<string>(filePath, "utf8");

export const readStringSync = (filePath: string) =>
  readFileSync(filePath, "utf8")?.toString();

export const writeString = (filePath: string, content: string) =>
  writeFile(filePath, content, "utf8");

export const readJSON = async (filePath: string) =>
  jsonDecode(await readString(filePath));

export const readJSONSync = (filePath: string) =>
  jsonDecode(readStringSync(filePath));

export const writeJSON = (filePath: string, content: any) =>
  writeFile(filePath, jsonEncode(content) ?? "", "utf8");

export const deleteFile = (filePath: string) => {
  try {
    fs.rmSync(filePath);
    return true;
  } catch {
    return false;
  }
};

export const copyFile = (
  from: string,
  to: string,
  mode?: number | undefined
) => {
  if (!fs.existsSync(from)) {
    return false;
  }
  const dirname = path.dirname(to);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  return new Promise<boolean>((resolve) => {
    const callback = (err: any) => {
      resolve(err ? false : true);
    };
    if (mode) {
      fs.copyFile(from, to, mode, callback);
    } else {
      fs.copyFile(from, to, callback);
    }
  });
};

export const copyFileSync = (
  from: string,
  to: string,
  mode?: number | undefined
) => {
  if (!fs.existsSync(from)) {
    return false;
  }
  const dirname = path.dirname(to);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  try {
    fs.copyFileSync(from, to, mode);
    return true;
  } catch {
    return false;
  }
};

export const moveFile = (from: string, to: string) => {
  if (!fs.existsSync(from)) {
    return false;
  }
  const dirname = path.dirname(to);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  return new Promise<boolean>((resolve) => {
    fs.rename(from, to, (err) => {
      resolve(err ? false : true);
    });
  });
};

export const moveFileSync = (from: string, to: string) => {
  if (!fs.existsSync(from)) {
    return false;
  }
  const dirname = path.dirname(to);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  try {
    fs.renameSync(from, to);
    return true;
  } catch {
    return false;
  }
};
