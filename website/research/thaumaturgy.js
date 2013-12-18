var research_thaumaturgy = [

	{
		name: "Basic Wandcraft",
		lore: "Your first tool",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: {
			Iron_Cap: "http://puu.sh/4JTkQ.jpg",
			Iron_Capped_Wood_Wand: "http://puu.sh/4JTlC.jpg"
		},
		nature: "Vis Wand",
		description: "The casting wand is your most basic but also your most important tool. It is what you use to craft objects, activate blocks like the crucible and countless other tasks.<br>The most basic wand stores a very limited amount of magical energy (called vis) that it uses to perform its tasks. The replenish the energy in a wand, you must right-click and hold to draw vis from an aura node.<br>While holding a wand you will see a indicator on the top left of the screen that shows how much vis is stored within the wand.<br>Holding shift will display exact numbers held by the wand and any possible discounts you have to performing magical tasks.<br>Wands are always contructed by the combination of a rod and two end caps. As you progress with your studies, you are sure you will discover different materials that you can use to craft rods and caps to make powerful wands. Only the basic wand can be put together in a normal crafting table. All other wands require the Arcane Workbench and will cost vis to construct.<br>The basic wand is constructed from mundane wood and iron, both of which make poor materials for working magic."
	},
	
	{
		name: "Wand Foci",
		lore: "Form meets Function",
		mod: "thaumcraft",
		aspects: [ "Ignis", "Praecantatio" ],
		requirements: [ "thaumaturgy:Basic Wandcraft" ],
		recipes: {
			Wand_Focus_Flame: "http://puu.sh/4Kh2I.jpg"
		},
		nature: "Wand Upgrade - Wand of Fire",
		description: "Some careful experimentation has shown you a way to expand the abilities of even the most basic wand.<br>By combining crystalline vis shards with quartz crystals and infusing them with magic, you are able to align the crystals into a mystical matrix.<br>If the proper types and amounts of vis is focused through this matrix, it will reshape the raw magical energies into something useful, controlled and geared to a specific task - simply press F while holding the wand, and any foci you are carrying will be screwed into place. Keep pressing F to cycle through the foci you are carrying.<hr>Your initial experiments involved the shaping of fire, and the resulting focus proved to be a simple, but useful tool. It is capable of sending forth a cone of elemental fire, burning all in its wake."
	},

	// Other TC things will go here, adding TT below for testing multi mods
	
	{
		name: "Wand Focus: Uprising",
		lore: "Is this what they use in ALfheim?",
		mod: "thaumic_tinkerer",
		aspects: [ "Aer", "Motus", "Praecantatio" ],
		requirements: [ "thaumaturgy:Wand Focus Shock", "artifice:Sword of the Zephyr" ],
		recipes: {
			Wand_Focus_Uprising: "http://puu.sh/4TXCK.jpg"
		},
		nature: "THRRRRUST!",
		description: "Using the knowledge you got from creating the sword of the Zephyr of propelling things around with air, you created a wand focus that will propel the holder in the direction that they're looking at.<br>When someone is propelled through the use of this focus, any accumulated gravitational energy is negated, reseting the fall damage the holder would take."
	}
];