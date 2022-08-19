#! /usr/bin/env node
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import swig from 'swig';
import TemplateFactory from './TemplateFactory';
import RunCommand from './RunCommand';
import config from './config/config';
import {mainList,configList, generateList,serveList} from './config/cli-options'
import swigFilters from './config/swig-filters';


swigFilters(swig);
let mainCli = commandLineArgs(mainList, { stopAtFirstUnknown: true ,});
let mainOptions = mainCli.options;
let mainArgv = mainCli._unknown || [];

 // Generate commands
 if( mainOptions.generate ) {
    let generateCli = commandLineArgs(generateList, { argv:mainArgv, stopAtFirstUnknown: true });
    let generateOptions = generateCli.Generate;
    //let generateArgv = generateCli._unknown || [];
    if(generateOptions.hasOwnProperty('component')){
      TemplateFactory.createTemplateFor(generateOptions);
      console.log('Component Generated');
    }else if(generateOptions.hasOwnProperty('merged')){
      TemplateFactory.createTemplateFor(generateOptions);
      console.log('Component Generated');
    }else if(generateOptions.hasOwnProperty('directive')){
      TemplateFactory.createTemplateFor(generateOptions);
      console.log('Directive Generated');
    } else if(mainOptions.help || generateOptions.help){
      console.log(commandLineUsage({header: 'Generate Options',optionList: generateList})); 
    }else {
      console.log('Unknown Parameter');
      console.log(commandLineUsage({header: 'Generate Options',optionList: generateList}));
    }
  
  }  // Serve commands
  else if( mainOptions.serve ) {
    let serveCli = commandLineArgs(serveList, { argv:mainArgv, stopAtFirstUnknown: true });
    let serveOptions = serveCli.Serve;
    if(mainOptions.help || serveOptions.help){
      console.log(commandLineUsage({header: 'Serve Options',optionList: serveList})); 
    }else {
      RunCommand.serveCommand(serveOptions);
    }
  } // Build commands
  else if( mainOptions.build ) {
      RunCommand.buildCommand();   
  }  // Configurations command
  else if( mainOptions.conf ) {
    let configCli = commandLineArgs(configList, {argv:mainArgv, stopAtFirstUnknown: true });
    let configOptions = configCli.Configurations;
    //let configArgv = configCli._unknown || [];
     if(configOptions.hasOwnProperty('template')){
      let configData = config.getConfigFile();
      //internally we have set as html and not template, what a pity
      configData.filesType.html = configOptions.template ? configOptions.template : configData.filesType.html;
      console.log("Template set to " + configOptions.template);
     }else if(configOptions.hasOwnProperty('script')){
      let configData = config.getConfigFile();
      configData.filesType.script = configOptions.script ? configOptions.script : configData.filesType.script;
      console.log("script set to " + configOptions.script);
     }else if(configOptions.hasOwnProperty('style')){
      let configData = config.getConfigFile();
      configData.filesType.style = configOptions.style ? configOptions.style : configData.filesType.style;
      console.log("style set to " + configOptions.style);
     }else if(configOptions.hasOwnProperty('show')){
      let configData = config.getConfigFile();
      console.log("Template :" + configData.filesType.html);
      console.log("Script   :" + configData.filesType.script);
      console.log("Style    :" + configData.filesType.style);
     }
     else if(mainOptions.help || configOptions.help){
        console.log(commandLineUsage({header: 'Config Options',optionList: configList}));
     }else {
          console.log('Unknown Parameter');
          console.log(commandLineUsage({header: 'Config Options',optionList: configList}));
      }
   } // Main help
   else if( mainOptions.help ) {
     console.log(commandLineUsage({header: 'Main Options',optionList: mainList})); 
   } else {
    console.log('Unknown Parameter');
    console.log(commandLineUsage({header: 'Main Options',optionList: mainList}));
  } 