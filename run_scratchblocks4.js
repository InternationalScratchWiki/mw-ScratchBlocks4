$.when(
	mw.loader.load('https://scratchblocks.github.io/js/scratchblocks-v4-min.js'),
	mw.loader.load('https://scratchblocks.github.io/js/translations-all-v4-min.js')
);
window.addEventListener('load', function(){
	scratchblocks.renderMatching('pre.blocks', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3'});
	scratchblocks.renderMatching('code.blocks', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3', inline: true});
	var items = document.querySelectorAll('.scratchblocks svg');
	var item;
	for (var i = items.length; i--;) {
		item = items[i];
		item.viewBox.baseVal.width = item.width.baseVal.value;
		item.viewBox.baseVal.height = item.height.baseVal.value;
		item.style.width = item.width.baseVal.value * 0.675;
		item.style.height = item.height.baseVal.value * 0.675;
	}
});
