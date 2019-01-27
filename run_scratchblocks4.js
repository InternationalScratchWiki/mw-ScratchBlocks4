function run_scratchblocks() {
	scratchblocks.renderMatching('pre.blocks', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3'});
	scratchblocks.renderMatching('code.blocks', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3', inline: true});
	var items = document.querySelectorAll('.scratchblocks svg');
	var item;
	for (var i = items.length; i--;) {
		item = items[i];
		item.viewBox.baseVal.width = item.width.baseVal.value;
		item.viewBox.baseVal.height = item.children[1].getBoundingClientRect().height;
		item.width.baseVal.value *= 0.675;
		item.height.baseVal.value = item.viewBox.baseVal.height * 0.675;
	}
}
$.getScript('https://scratchblocks.github.io/js/scratchblocks-v3.3-min.js').done(function(){
	$.getScript('https://scratchblocks.github.io/js/translations-all-v3.3.js').done(run_scratchblocks);
});
