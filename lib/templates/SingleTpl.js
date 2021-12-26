/**
 * SingleTpl
 */
class SingleTpl {
  /**
   *
   * @param name - the single name
   */
  constructor( name, isDir, postfix="component"  ) {
    this.type = 'single';
    this.name = postfix ? `${name} ${postfix}` : name;
    this.filename = postfix ? `${name}.${postfix}` : name;
    this.isDir = isDir;
  }
}

export default SingleTpl