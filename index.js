
const express = require('express')
const { watch } = require('node:fs');
const fs = require('node:fs');
//import { execFile } from "child_process";
const execFile = require ("child_process");
const { spawn } = require('node:child_process');
const { exec } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

exec('bash scripts/test.sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`${error}`);
    return;
  }
  console.log(`${stdout}`);
  //console.log(JSON.parse(data));

  console.error(`${stderr}`);
}); 

