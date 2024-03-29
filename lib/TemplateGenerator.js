import path from 'path';
import swig from 'swig';
import fs from 'fs-extra';
import config from './config/config';
import _ from 'lodash';
/**
 * TemplateGenerator
 */
class TemplateGenerator {

  /**
   * Todo: Inject swig, fs and config to mock them in the future tests
   * @param options
   */
  constructor( options,cliOps, path ) {
    this.TEMPLATES_DIR = `${__dirname}/blueprints`;
    this.cli = cliOps;
    this.path = path;
    this._create(options);
  }

  /**
   *
   * @param options
   * @private
   */
  _create( options = {} ) {
    const {name, type, actions, postfix} = options;
    const filesType = config.getConfigFile().filesType;
    if( options.isDir ) {
      this._createDirectory(this._getDirPath(type), { name, actions, filesType, postfix }, filesType);
    } else {
      const tpl = this._compileTpl(this._getSingleTpl(type), { name, actions, filesType });
      this._createFile(name, type, filesType.script, tpl);
    }
  }

  /**
   *
   * @param file
   * @param data
   * @returns {*}
   * @private
   */
  _compileTpl( file, { name, actions, filesType } ) {
    const compiled = swig.compileFile(file);
    const componentName = name.substring(name.lastIndexOf("/") + 1);
    return compiled({ name: componentName, actions, filesType });
  }

  /**
   *
   * @param name
   * @param fileType
   * @param type
   * @param tpl
   * @private
   */
  _createFile( name, type, fileType, tpl ) {
    fs.outputFile(this._createFilePath(name, type, fileType), tpl, function( err ) {
      if( err ) console.log(err);
    });
  }

  /**
   *
   * @param dirPath
   * @param fileType
   * @param data
   * @private
   */
  _createDirectory( dirPath, data, fileTypes ) {
    fs.readdir(dirPath, ( err, dir ) => {
      const name = data.name;
      const folder = path.join(process.cwd(),this.path, _.camelCase(name));
      let filePath;

      dir.forEach(tempFile => {
          // in case we add spec files, add another check if tests need to be generated
          // and add a condition here to skip
          const compiled = this._compileTpl(`${dirPath}/${tempFile}`, data);
          let fileName = this._createFileName(tempFile, name, fileTypes, data.postfix);

          filePath = path.join(folder, fileName);

          fs.outputFile(filePath, compiled, function( err ) {
            if( err ) console.log(err);
          });
        
      });
    });
  }

  /**
   *
   * @param tempFile
   * @param name
   * @param fileTypes
   * @returns {*}
   * @private
   */
  _createFileName( tempFile, name, fileTypes, postfix ) {
    // process the vue file first since its naming is different
    if(tempFile.indexOf('vue') > -1 ) {
      let compName = this._capitalizeFirstLetter(name.split(' ')[0]);
      name = compName + 'Component'
    }

    let newName = tempFile.replace(/temp/, name).replace(/ /g, '.');

    if( newName.indexOf('tpl') > -1 ) {
      newName = newName.replace(/tpl./, '')
      newName = newName.replace(/extension/, fileTypes.html);
    }

    if( newName.indexOf('sty') > -1 ) {
      newName = newName.replace(/sty./, '')
      newName = newName.replace(/extension/, fileTypes.style);
    }

    if( newName.indexOf('script') > -1 ) {
      newName = newName.replace(/script./, '')
      newName = newName.replace(/extension/, fileTypes.script);
    }

    // we are not using spec for now
    if( newName.indexOf('spec') > -1 ) {
      newName = newName.replace(/extension/, fileTypes.spec);
    }

    return newName;
  }

  /**
   *
   * @param type
   * @param extension
   * @returns {*}
   * @private
   */
  _getSingleTpl( type , extension = 'js') {
    if(type === 'single') {
      return `${this.TEMPLATES_DIR}/${type}/temp.vue`;
    }
    return `${this.TEMPLATES_DIR}/${type}/temp.${type}.${extension}`;
  }

  /**
   *
   * @param type
   * @returns {*}
   * @private
   */
  _getDirPath( type ) {
    return `${this.TEMPLATES_DIR}/${type}`;
  }

  /**
   *
   * @param name
   * @param type
   * @param fileType
   * @returns {*}
   * @private
   */
  _createFilePath( name, type, fileType ) {
    name = name.replace(/ /g, '.');
    if(type === 'single' ) {
      return path.join(process.cwd(),this.path, name +'.vue');
    } else if(type === 'directive'){
      let directiveFileName = `${name}.${fileType}`;
      return path.join(process.cwd(),this.path, directiveFileName );
    }
    return path.join(process.cwd(), `${name}.${type}.${fileType}`);
  }

  /**
   *
   * @param name
   * @returns {*}
   * @private
   */

  _capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

export default TemplateGenerator
