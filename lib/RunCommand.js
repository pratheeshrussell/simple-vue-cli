import * as fs from 'fs';
import path from 'path';
import{ spawn } from "child_process";

class RunCommand {
    static serveCommand(options={}){
        if (fs.existsSync(path.join(process.cwd(), "package.json"))) {
            let cmdParams = ["run","serve"];
            let cmdPath = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';
            if(Object.keys(options).length != 0 && options.constructor === Object){
                cmdParams.push("--"); // pass through
                if(options.hasOwnProperty('port')){
                    cmdParams.push("--port");
                    cmdParams.push(options.port);
                }
                if(options.open){
                    cmdParams.push("--open");
                }   
            }
            
            const cmd = spawn(cmdPath, cmdParams);
            //spawn("npm", ["run","serve"]);
            
            cmd.stdout.on("data", data => {
                console.log(`${data}`);
            });
            
            cmd.stderr.on("data", data => {
                console.log(`${data}`);
            });
            
            cmd.on('error', (error) => {
                console.log(`error: ${error.message}`);
            });
            
            cmd.on("close", code => {
                console.log(`process exited with code ${code}`);
            });
        } else {
            console.log("Cannot serve from this location");
        }
    }

    static buildCommand(options={}){
        if (fs.existsSync(path.join(process.cwd(), "package.json"))) {
            let cmdParams = ["run","build"];
            let cmdPath = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';

            const cmd = spawn(cmdPath, cmdParams);
            
            cmd.stdout.on("data", data => {
                console.log(`${data}`);
            });
            
            cmd.stderr.on("data", data => {
                console.log(`${data}`);
            });
            
            cmd.on('error', (error) => {
                console.log(`error: ${error.message}`);
            });
            
            cmd.on("close", code => {
                console.log(`process exited with code ${code}`);
            });
        } else {
            console.log("Cannot build from this location");
        }
    }
}

export default RunCommand;