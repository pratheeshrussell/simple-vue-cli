import _ from 'lodash';

export default ( swig ) => {
  /* ===============
   Swig filters
   =============== */
  swig.setFilter('kebabCase', function( input ) {
    return _.kebabCase(input);
  });

  swig.setFilter('fileNameCase', function( input ) {
    return input.replace(/ /g, '.');
  });


  swig.setFilter('camelCase', function( input ) {
    return _.capitalize(_.camelCase(input));
  });

  swig.setFilter('camelCaseOnly', function( input ) {
    return _.camelCase(input);
  });

  swig.setFilter('startCase', function( input ) {
    return _.startCase(input);
  });


  swig.setFilter('upperCase', function( input ) {
    return input.toUpperCase();
  });

  swig.setFilter('PascalCase', function( input ) {
    return _.startCase(input).split(' ').join('');
  });

}
