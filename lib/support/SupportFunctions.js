import * as fs from 'fs';
import path from 'path';

/**
 * SupportFunctions
 */
 class SupportFunctions {
    static pathSeperator(fullpath){
        let pathx ='';
        let tempName = fullpath;
        //nested folder
        if(tempName.includes("/")){
          let loc_array = tempName.split("/");
          tempName = loc_array[loc_array.length - 1];
          loc_array.pop(); //Remove last
          pathx = path.join(...loc_array);
        }
        if (fs.existsSync(path.join(process.cwd(), "src"))) {
          pathx = path.join("src",pathx); 
        }
        return {
          name:tempName, path:pathx
        }
    }

 }

 export default SupportFunctions