---
title: 'Tests with pandoc and revealjs'
author: 'Johan Planchon'
date: '10 Nov. 2016'
lang: 'fr'
parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
revealOptions:
	theme: 'moon'
    transition: 'slide'
---

### main

[Kuro's website](http://blackksoulls.github.io/ "C'est mon site web èwé")

---

### Summary
1. Slide example
	* Only text
	* Custom background
#. Content example
	* Quote
	* Block of code
	* Sheet

# Slide example

## Only text
This slide has no background image.

## Custom background {data-background="#4300A7"}
This one does!

# Content example

## Quote
> Ow god this is fucking cool!

## Block of code
incredible!
<div style="background-color: rgba(255,255,255,0.3); border-radius: 0.5em;">
```html
<<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

</body>
</html>
```
</div>
<div class="notes"> Test de ce truc </div>

## Sheet
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
<!--pandoc slides.md -o slides.html -s -t revealjs \-\-slide-level=2-->