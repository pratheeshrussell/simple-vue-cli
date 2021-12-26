/**
 * DirectiveTpl
 */
class DirectiveTpl {
  /**
   *
   * @param name - the directive name
   */
  constructor( name, postfix="directive" ) {
    this.type = 'directive';
    this.name = postfix ? `${name} ${postfix}` : name;
    this.filename = postfix ? `${name}.${postfix}` : name;
  }
}

export default DirectiveTpl