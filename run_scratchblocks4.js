$.when(
	mw.loader.load('https://scratchblocks.github.io/js/scratchblocks-v4-min.js'),
	mw.loader.load('https://scratchblocks.github.io/js/translations-all-v4-min.js')
);
window.addEventListener('load', function(){
	scratchblocks.renderMatching('pre.blocks', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3'});
	scratchblocks.renderMatching('code.blocks', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3', inline: true});
});
