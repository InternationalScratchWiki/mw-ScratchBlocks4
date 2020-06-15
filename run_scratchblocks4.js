function run_scratchblocks() {
	scratchblocks.renderMatching('pre.blocks, pre[class^=blocks-3]', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3'});
	scratchblocks.renderMatching('code.blocks, code[class^=blocks-3]', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3', inline: true});
	scratchblocks.renderMatching('pre[class^=blocks-2]', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch2'});
	scratchblocks.renderMatching('code[class^=blocks-2]', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch2', inline: true});
	var items = document.querySelectorAll('.blocks .scratchblocks svg, [class^=blocks-3] .scratchblocks svg');
	var item;
	for (var i = items.length; i--;) {
		item = items[i];
		item.setAttribute('viewBox', '0 0 ' + item.width.baseVal.value + ' ' + item.children[1].getBoundingClientRect().height);
		item.width.baseVal.value *= 0.675;
		item.height.baseVal.value = item.viewBox.baseVal.height * 0.675;
	}
}
$.getScript('https://scratchblocks.github.io/js/scratchblocks-v3.4-min.js').done(function(){
	$.getScript('https://scratchblocks.github.io/js/translations-all-v3.4.js').done(function(){
		mw.hook('wikipage.content').add(run_scratchblocks);
	});
});
