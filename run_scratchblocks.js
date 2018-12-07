for (const block of document.querySelectorAll("pre.sb4blocks, code.sb4blocks")) {
	const script = block.innerText;
	const doc = scratchblocks.parse(script, {languages:["en", mw.config.get("wgScratchBlocks4Lang")], dialect: "scratch3"});
	const docView = scratchblocks.newView(doc, {style: "scratch3"});
	const svg = docView.render();
	block.innerHTML = "";
	block.appendChild(svg);
}