# Colton Brown Portfolio

Spimple Jekyll site for GitGub Pages deploing

## Folders structure

`_data` - site data folder

`collections.yml` - list of site collections

```
- name:  projects 
  title:  Self Directed Projects
- name: writing
  title:  Writing
- name: programs
  title:  Programs
- name: experience
  title:  Work experience
- name: music
  title:  Music
- name: other
  title:  Other attempts at synthesizing this information
```
For each collection, a corresponding folder should be created, with a name starting with an underscore:

**_projects, _writing, _programs, _experience, _music, _other**

and in `_config.yml`:

```
collections:
  projects:
    output: true
  writing:
    output: true
  programs:
    output: true
  experience:
    output: true
  music:
    output: true
  other:
    output: true
```

collections contain Markdown files with frontmatters

```
---
layout: post
title: "XYZ.church  (February 11th)"
description: A collaboratively-funded, tokenized arts community
role: Founder / Designer / Developer
image: /assets/images/XYZ-mock.webp
---
### Concept

XYZ was a platform designed to facilitate the coordination and production of music. It utilized web3 technologies in order to enable community ownership, transparency, and incentive. It was announced on October 28th 2021, launched on February 11th, and wound-down on April 1, 2021.
```

`_includes` - repetative code parts

`_layouts` - pages layouts

`_sass` - scss styles files

`assets` - fonts, images, main css

`_posts`  - blog posts files

## How to add a new collection

- create folder `_collection-name`
- describe the collection in the `_config.yml` and `/data/collections.yml`
- add Markdown files in `/_collection-name/`

and the corresponding pages of the collection will be automatically generated and added to the menu.

**Important!**

change `baseurl: "/colt83"` in `_config.yml` to your real baseurl or delete it if your site will be in root 
