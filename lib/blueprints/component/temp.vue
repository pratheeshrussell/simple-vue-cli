<template src="./{{name | fileNameCase}}.{{ filesType.html }}"></template>
<script src="./{{name | fileNameCase}}.{{ filesType.script }}"{% if filesType.script !="js" %} lang="{{ filesType.script }}"{% endif %}></script>
<style src="./{{name | fileNameCase}}.{{ filesType.style }}" scoped lang="{{ filesType.style }}"></style>

