/**
 * ComponentTpl
 */
class ComponentTpl {
  /**
   *
   * @param name - the component name
   */
  constructor( name, postfix="component" ) {
    this.type = 'component';
    this.isDir = true;
    this.name = postfix ? `${name} ${postfix}` : name;
    this.filename = postfix ? `${name}.${postfix}` : name;
  }
}

export default ComponentTpl