var categories = {
 aspects: "", 
 basic: "thaumcraft",
 thaumaturgy: "thaumcraft", 
 alchemy: "thaumcraft",
 artifice: "thaumcraft",
 golemancy: "thaumcraft", 
 enchanting: "thaumic_tinkerer", 
 extras: "thaumcraft_extras", 
 apimancy: "magic_bees", 
 traheremagy: "railcraft"
};

var mods = {
 thaumcraft: true,
 thaumic_tinkerer: true,
 advanced_thaumaturgy: true,
 thaumcraft_extras: true,
 magic_bees: true, 
 electric_magic_tools: true, 
 thaumcraft_gates: true, 
 player_beacons: true, 
 railcraft: true, 
 better_storage: true
};

var modShortTerms = {
 thaumcraft: "",
 thaumic_tinkerer: "[TT]",
 advanced_thaumaturgy: "[AT]",
 thaumcraft_extras: "[TE]",
 magic_bees: "[MB]", 
 electric_magic_tools: "[EM]", 
 thaumcraft_gates: "[TG]", 
 player_beacons: "[PB]", 
 railcraft: "[RC]", 
 better_storage: "[BS]"
};

var modResearchTooltips = {
 thaumcraft: "",
 thaumic_tinkerer: "This research entry comes from the Thaumic Tinkerer addon",
 advanced_thaumaturgy: "This research entry comes from the Advanced Thaumaturgy addon",
 thaumcraft_extras: "This research entry comes from the Thaumcraft Extras addon",
 magic_bees: "This research entry comes from the Magic Bees addon", 
 electric_magic_tools: "This research entry comes from the Electric Magic Tools addon", 
 thaumcraft_gates: "This research entry comes from the ThaumcraftGates addon", 
 player_beacons: "This research entry comes from the Player Beacons addon", 
 railcraft: "This research entry comes from the Railcraft addon", 
 better_storage: "This research entry comes from the Better Storage addon"
};

var aspectsShown = [];
var researchData = { };
var aspectsForResearch = { };

var currentCategory;
var currentAspect;
var aspectsTabText;
var filter = "";
var firstResearch = false;

String.prototype.contains = function(str) {
	return this.indexOf(str) != -1; 
};

String.prototype.containsIgnoreCase = function(str) {
	return this.toLowerCase().contains(str.toLowerCase()); 
};

String.prototype.replaceAll = function(original, source) {
	return this.split(original).join(source);
};

function setCategory(category) {
	var hash = category;
	var aspect = "";
	var research = "";
	var skipHash = false;
	
	if(category.substring(0, 8) == "aspects_") {
		aspect = category.substring("aspects_".length);
		category = "aspects";
		skipHash =  true;
	}

	if(!(category in categories)) {
		if(category.contains(":")) {
			category = category.substring(0, category.indexOf(":"));
			research = hash.substring(hash.indexOf(":") + 1, hash.length);
			skipHash = true;
		} else category = "basic";
	}
	
	currentCategory = category;
	
	for(cat in categories)
		$("#category_" + cat).attr("src", "images/categories/category_" + cat + (cat === category ? "_selected" : "_deselected") + ".png");
	
	if(!skipHash)
		document.location.hash = category;
	
	if(category === "aspects") {
		$("#text").html(aspectsTabText);
		$("#input").text("");

		if(aspect.length != 0) {
			setAspect(aspect, false);
		}
	} else {
		$("#text").html(generateResearchForText());
		$("#input").html("<input type = 'text' id = 'searchBar' size = '100'></input><button id = 'clear'>Clear</button><hr>");
		$("#searchBar").watermark("Look up a research (Tip: press ESC to clear this text)");
		$("#searchBar").val(filter);
		
		if(research.length != 0)
			setSearchText(research.replaceAll("_", " "));
	}
		
	for(cat in categories)
		$("#category_" + cat).attr("width", categories[cat].length == 0 || mods[categories[cat]] || categories[cat] === "thaumcraft" ? 48 : 0);
}

function generateResearchForText() {
	var text = "";
	if(!(currentCategory in researchData))
		text = "That category doesn't exist.";
	else {
		firstResearch = true;
		for(research in researchData[currentCategory])
			text = appendResearchToText(research, text);
	}
	
	if(text.length == 0)
		text = "No research was found for that search.";
	
	return text;
}

function appendResearchToText(research, text) {
	var researchObj = researchData[currentCategory][research];
	if(!mods[researchObj.mod] || (filter.legth != 0 && !researchObj.name.containsIgnoreCase(filter)))
		return text;

	if(!firstResearch)
		text += "<hr>";
	text += "<div class = 'left'><font size = '5'><b>" + researchObj.name + "</font></b></div>";
	text += "<div id = '" + currentCategory + ":" + researchObj.name.toLowerCase().replaceAll(" ", "_") + "'></div>";
	
	var aspects = researchObj.aspects;
	var sideText = "<i><b>(Starts off unlocked) </i></b>";
	if(aspects.length != 0) {
		sideText = "";
		var aspectText = "";
		for(aspect in aspects)
			aspectText += aspectImg(aspects[aspect], 32, 32) + " ";
		aspectsForResearch[researchObj.name] = aspectText;
		sideText += "<div class = 'spoiler' id = 'spoiler_" + researchObj.name + "'>" + (aspectsShown.indexOf(researchObj.name) > -1 ? aspectText : "<u>(Click to show research aspects)</u>") + "</div>";
	}
	text += "<div class = 'right'>" + sideText + "</div><br>";
	
	text += "<abbr title = '" + modResearchTooltips[researchObj.mod] + "'>";
	text += "<br><b><u>" + modShortTerms[researchObj.mod] + "</abbr></b></u><i> " + researchObj.lore + "</i><br>";
	text += "<b>Nature</b>: " + researchObj.nature + "<br>";
	
	var recipes = researchObj.recipes;
	var hasRecipes = false;
	
	for(recipe in recipes) {
		if(!hasRecipes)
			text += "<b>Recipes</b>: ";
		
		var url = recipes[recipe];
		text += "[<a class = 'recipe_img' href = '" + url + "'>" + recipe.replaceAll("_", " ") + "</a>] ";
		hasRecipes = true;
	}
	
	if(hasRecipes)
		text += "<br>";
		
	text += "<br>" + researchObj.description.replaceAll("<hr>", "<p align='center'>-----</p>") + "<br><br>";
	
	var requirements = researchObj.requirements;
	if(requirements.length != 0) {
		text += "<b>Requirements: ";
		
		var first = true;
		for(req in requirements) {
			if(!first)
				text += ", ";
			text += "<a class = 'req' href = '#" + getResearchHash(requirements[req]) + "'>" + requirements[req].substring(requirements[req].indexOf(":") + 1, requirements[req].length) + "</a>";
			
			first = false;
		}
		text += "</b><br><br>";
	}
	text += "<font size = '2'><a class = 'permalink' href='" + document.location.href.split("#")[0] + "#" + currentCategory + ":" + researchObj.name.toLowerCase().replaceAll(" ", "_") + "'>(permalink)</a>";
	text += " - <a href='#top'>(back to top)</a></font>";
	
	
	firstResearch = false;
	return text;
}

function getResearchHash(name) {
	return name.toLowerCase().replaceAll(" ", "_");
}

function setAspect(aspect, setHash) {
	currentAspect = aspect;
	
	if(aspect.length == 0) {
		$("#aspect_box").html("<br><p align='center'>(Click an aspect in the index to see it's components)</p><br>");
		return;
	}

	var text = "<p align='center'>" + aspectImg(aspect, 64, 64) + "<br><font size = '7'>" + aspect + "<br></font><i>" + aspects[aspect].desc + "</i><br><br>";
	
	if(aspects[aspect].type === "primal")
		text += "<b>(Primal Aspect)</b>";
	else { 
		text += aspectImg(aspects[aspect].component1, 32, 32) + "   " + aspectImg(aspects[aspect].component2, 32, 32) + "<br>";
		text += aspects[aspect].component1 + " + " + aspects[aspect].component2;
	}
	
	text += "</p>";
	
	if(setHash)
		document.location.hash = "aspects_" + aspect;
	
	$("#aspect_box").html(text);
}

function setSearchText(text) {
	filter = text;
	$("#searchBar").val(text);
	$("#text").html(generateResearchForText());
}

function clearSearch() {
	filter = "";
	$("#searchBar").val("");
	$("#text").html(generateResearchForText());
}

$(function() {	
	loadAspects(); // from aspects.js
	
	for(mod in mods) {
		var cookie = $.cookie(mod);
		
		mods[mod] = (cookie === "true" ? true : (mod == "thaumcraft"));
		$("#cb_" + mod).prop("checked",  mods[mod]);
	}
	
	researchData["basic"] = research_basic; // from basic.js
	researchData["thaumaturgy"] = research_thaumaturgy; // from thaumaturgy.js
	researchData["alchemy"] = research_alchemy; // from alchemy.js
	researchData["artifice"] = research_artifice; // from artifice.js
	researchData["golemancy"] = research_golemancy; // from golemancy.js
	researchData["enchanting"] = research_enchanting; // from enchanting.js
	researchData["extras"] = research_extras; // from extras.js
	researchData["apimancy"] = research_apimancy; // from apimancy.js
	researchData["traheremagy"] = research_traheremagy; // from traheremagy.js 
	
	setAspectText();
	
	var hash = document.location.hash.substring("1");
	setCategory(hash);
	
	$(document).tooltip({
		items: "a",
		content: function() {
			if($(this).attr("class") === "recipe_img")
				return "<img src = '" + $(this).attr("href") + "'></img>";
		}
	});
});

function setAspectText() {
	var text = "<font size = '13'><div align = 'center'><b>All Aspects</b></font><br>Index:<br>";
	var i = 0;
	for(aspect in aspects) {
		var mod = aspects[aspect].mod;
		if(!mods[mod])
			continue;
	
		text += aspectImg(aspects[aspect].name, 32, 32);
		if(i == 5 || (i - 6) % 9 == 8) {
			text += "<br>";
		if(i == 5 && mods["thaumcraft"]) 
				text += "<br>";
		}
		++i;
	}
		
	text += "</div><br><hr><div id='aspect_box'><br><p align='center'>(Click an aspect in the index to see it's components)</p><br></div>";
	aspectsTabText = text;
}

function aspectImg(name, width, height) {
	return "<img width = '" + width + "' height = '" + height + "' id = 'aspect_" + name + "' class = 'aspect' src = 'images/aspects/" + name + ".png' title = '" + name + "'></img>";
}

$(document).on("click", ".req", function() {
	var href = $(this).attr("href");
	var category = href.substring(1, href.indexOf(":"));
	var research = href.substring(href.indexOf(":") + 1, href.length).replaceAll("_", " ");
	
	setCategory(category);
	setSearchText(research);
});

$(document).on("click", ".aspect", function() {
	var aspect = $(this).attr("id").substring("aspect_".length);
	if(currentCategory !== "aspects")
		setCategory("aspects");
	
	setAspect(aspect, true);
});

$(document).on("keyup", "#searchBar", function(event) {
	filter = $(this).val();
	$("#text").html(generateResearchForText());
});

$(document).on("click", "#clear", function() {
	clearSearch();
});

$(document).keyup(function(event) {
	if(event.keyCode == 27)
		clearSearch();
});

$(document).on("click", ".spoiler", function() {
	var research = $(this).attr("id").substring("spoiler_".length);
	$(this).html(aspectsForResearch[research]);
	aspectsShown.push(research);
});

$(document).on("click", ".permalink", function() {
	document.location = $(this).attr("href");
	document.location.reload();
});

$(".mod_cb").click(function() {
	var mod = $(this).attr("value");
	mods[mod] = !mods[mod];
	$.cookie(mod, mods[mod], { expires: 30 });
	
	setAspectText();
	setCategory(currentCategory);
	if(currentCategory != "aspects")
		$("#text").html(generateResearchForText());
	
	setAspect(currentAspect.length == 0 || !mods[aspects[currentAspect].mod] ? "" : currentAspect, false);
});

$(".category").click(function() {
	var category = $(this).attr("id").substring("category_".length);
	setCategory(category);
});