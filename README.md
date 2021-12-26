# Simple Vue Cli

Developed upon the work of [vue-generate-component](https://github.com/NetanelBasal/vue-generate-component). 

Developed within a couple of hours so expect bugs.

CLI util for generating Vue component structure.

## READ THIS FIRST
This is not a replacement for vue cli. You must have installed Vue cli separately

## Installation
```bash
npm install -g @pratheeshrussell/simple-vue-cli
```  

OR 

* Clone the repository
* Run 
```bash
npm install
```  
* Build the Files
```bash
npm run build
```   
*  Install from local folder
```bash
npm install -g PATH_TO_CLONED FOLDER
``` 

OR

```bash
npm install -g https://github.com/pratheeshrussell/simple-vue-cli
```

## Usage

### Create new component
```bash
svc -g -c Header
```
Will generate a folder called `headerComponent` inside src folder *If you are in project root folder* or *your current directory*  

```bash
svc -g -m Header
```
Will generate a file called `Headercomponent.vue` inside src folder *If you are in project root folder* or *your current directory*  

```bash
svc -g -m Header -f
```
Will generate a file called `Headercomponent.vue` inside src/headerComponent folder *If you are in project root folder* or *your current directory* 

check the options available by
```bash
svc -g -h
```

### Create new directive
```bash
svc -g -d something
```
Will get back to this once I learn about vue directives

### Serve
```bash
svc -s
```
check the options available by
```bash
svc -s -h
```

### Build
```bash
svc -b
```

## Disclaimer

This project tries to solve tedious copy&paste operations from **our** daily workflow.
Please notice that the generated files will require some external libraries such as
Vue, @vue/test-utils or Sass loader configuration. Make sure these libraries are available in your project.


## TODO

1. Do some manual testing atleast
2. ...
