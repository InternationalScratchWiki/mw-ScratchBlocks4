A simple MediaWiki extension for rendering Scratch Blocks used on Scratch 3.0. Supports MediaWiki 1.29+.

Transforms `<scratchblocks>` tags inside wiki articles into `<pre class="blocks">` in the HTML, which are then rendered to scratch blocks using CSS and JS included in the page. Inline blocks are rendered with `<sb>` tags, and become `<code class="blocks">` tags.

- Maintained by apple502j.
- Contributed to by Kenny2github
- Original by tjvr and ErnieParke

# Installation

This repository no longer uses Git submodules. You do **not** need to include the `--recursive` option.
```bash
$ cd extensions
$ git clone http://github.com/InternationalScratchWiki/mw-ScratchBlocks4
```
After cloning, add the line
```php
wfLoadExtension( "mw-ScratchBlocks4" );
```
to your LocalSettings.php file. If you need to use languages besides English, add the following line (Japanese and Traditional Chinese used as an example):
```php
$wgScratchBlocks4Langs = ['ja', 'zh_TW'];
```
Note that the TW is preceded by an underscore rather than a hyphen.

This variable is accessible through JavaScript via `mw.config.get("wgScratchBlocks4Lang")`.
