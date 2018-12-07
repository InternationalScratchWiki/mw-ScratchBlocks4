
A simple MediaWiki extension for rendering Scratch Blocks used on Scratch 3.0.

Transforms `<scratchblocks4>` tags inside wiki articles into `<pre class="blocks">`
in the HTML, which are then rendered to scratch blocks using CSS and JS
included in the page. Inline blocks are rendered with `<sb4>` tags, and become
`<code class="blocks">` tags.

- Maintained by apple502j.
- Original by tjvr and ErnieParke


# Installation

This repository no longer uses Git submodules. You do **not** need to include the `--recursive` option.

    $ cd extensions
    $ git clone http://github.com/apple502j/mw-ScratchBlocks4 ScratchBlocks4

If you want to use the latest translations and renderer, do this (you have Python 3.x, don't you?):

    $ cd ScratchBlocks4
    $ python3 update_js.py

Note that this step is not always necessary.

Just drop this folder into MediaWiki's "extensions/" folder, and add

    wfLoadExtension( "ScratchBlocks4" );

If you want to use a language other than English, add this on LocalSettings.php:

    $wgScratchBlocks4Lang = "ja";

You can refer this variable via `mw.config.get("wgScratchBlocks4Lang")`.

# Known Bugs
* Inline blocks have too much height
* Cannot set two languages at $wgScratchBlocks4Lang
