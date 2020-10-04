window.run_scratchblocks = function() {
	scratchblocks.renderMatching('pre.blocks.needsRendering, pre[class*=blocks-3].needsRendering', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3'});
	scratchblocks.renderMatching('code.blocks.needsRendering, code[class*=blocks-3].needsRendering', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch3', inline: true});
	scratchblocks.renderMatching('pre[class*=blocks-2].needsRendering', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch2'});
	scratchblocks.renderMatching('code[class*=blocks-2].needsRendering', {languages: ['en'].concat(mw.config.get('wgScratchBlocks4Langs')), style: 'scratch2', inline: true});
	var items = document.querySelectorAll('.blocks.needsRendering .scratchblocks svg, [class^=blocks-3].needsRendering .scratchblocks svg');
	var item;
	for (var i = items.length; i--;) {
		item = items[i];
		item.setAttribute('viewBox', '0 0 ' + item.width.baseVal.value + ' ' + item.children[1].getBoundingClientRect().height);
		item.width.baseVal.value *= 0.675;
		item.height.baseVal.value = item.viewBox.baseVal.height * 0.675;
	}
	
	var renderedItems = document.querySelectorAll('pre.needsRendering, code.needsRendering');
	var renderedItem;
	for (var j = renderedItems.length; j--;) {
		renderedItem = renderedItems[j];
		renderedItem.classList.remove('needsRendering');
	}
}

$.getScript('https://scratchblocks.github.io/js/scratchblocks-v3.5-min.js').done(function(){
	$.getScript('https://scratchblocks.github.io/js/translations-all-v3.5.js').done(function(){
		mw.hook('wikipage.content').add(window.run_scratchblocks);
	});
});
