import ComponentTpl from './templates/ComponentTpl';
import DirectiveTpl from './templates/DirectiveTpl';
import SingleTpl from './templates/SingleTpl';
import TemplateGenerator from './TemplateGenerator';
import SupportFunctions from './support/SupportFunctions';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli options
   */
  static createTemplateFor( cli ) {

    /**
     * Generate Vue 3 component
     */
    if( cli.component ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.component);
      return new TemplateGenerator(new ComponentTpl(seperatePath.name, cli.postfix),cli,seperatePath.path);
    }

    /**
     * Generate Vue 3 directive
     */
    if( cli.directive ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.directive);
      return new TemplateGenerator(new DirectiveTpl(seperatePath.name, cli.postfix),cli,seperatePath.path);
    }

    /**
     * Generate Vue 3 single file component
     */
    if( cli.merged ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.merged);
      return new TemplateGenerator(new SingleTpl(seperatePath.name, cli.folder, cli.postfix),cli,seperatePath.path);
    }

  }

}

export default TemplateFactory
