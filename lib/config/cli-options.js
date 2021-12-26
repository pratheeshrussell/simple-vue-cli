export const mainList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "options",
    description: 'Displays this help message'
  }, {
    name: 'conf',
    alias: 'c',
    type: Boolean,
    group: "options",
    description: 'Set Configuration Options'
  }, {
    name: 'generate',
    alias: 'g',
    type: Boolean,
    group: "options",
    description: 'Generate components,directives'
  }, {
    name: 'serve',
    alias: 's',
    type: Boolean,
    group: "options",
    description: 'Run development server'
  }, {
    name: 'build',
    alias: 'b',
    type: Boolean,
    group: "options",
    description: 'Build project'
  }
];

export const configList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "Configurations",
    description: 'Displays this help message'
  },
  {
    name: 'template',
    type: String,
    group: "Configurations",
    description: 'set the default template[html,jade,pug]'
  },{
    name: 'script',
    type: String,
    group: "Configurations",
    description: 'set the default script language[js,ts]'
  },{
    name: 'style',
    type: String,
    group: "Configurations",
    description: 'set the default style file[css,scss]'
  },{
    name: 'show',
    type: String,
    group: "Configurations",
    description: 'view set values'
  }
];

export const generateList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "Generate",
    description: 'Displays this help message'
  },
  {
        name: 'component',
        alias: 'c',
        type: String,
        group: "Generate",
        description: 'generate Vue component',
    },{
          name: 'directive',
          alias: 'd',
          type: String,
          group: "Generate",
          description: 'generate Vue directive'
      },{
          name: 'merged',
          alias: 'm',
          type: String,
          group: "Generate",
          description: 'generate Vue component - single file'
        },
          {
          name: 'folder',
          alias: 'f',
          type: Boolean,
          group: "Generate",
          description: 'generate Vue js merged component inside new folder'
        },
        {
          name: 'postfix',
          type: String,
          group: "Generate",
          description: 'override the default postfix in file name'
        }
];


export const serveList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "Serve",
    description: 'Displays this help message'
  },{
        name: 'port',
        alias: 'p',
        type: String,
        group: "Serve",
        description: 'Set Port',

    }, {
    name: 'open',
    alias: 'o',
    type: Boolean,
    group: "Serve",
    description: 'Open browser'
  }
];