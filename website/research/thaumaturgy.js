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
    
    {
		name: "Wand Focus: Excavation",
		lore: "Terra Terror",
		mod: "thaumcraft",
		aspects: [ "Terra", "Praecantatio", "Perditio" ],
		requirements: [ "thaumaturgy:Wand Foci" ],
		recipes: {
			Wand_Focus_Excavation: "http://puu.sh/4KmFy.jpg"
		},
		nature: "Wand Upgrade - Wand of Excavation",
		description: "This focus turns your wand into a tool capable of moving vast amounts of earth and stone with little effort.<br>Simply point it at what you want to excavate and the magic does the rest. Tougher materials take longer to mine, and anything other than earth, stone or similar materials will take much longer to mine."
	},
    
    {
		name: "Wand Focus: Frost",
		lore: "Revenge is a dish best served cold",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Gelum", "Praecantatio" ],
		requirements: [ "thaumaturgy:Wand Foci" ],
		recipes: {
			Wand_Focus_Frost: "http://puu.sh/4KmFy.jpg"
		},
		nature: "Wand Upgrade - Wand of Frost",
		description: "This focus is capable of hurling chunks of ice.<br>Care must be taken when aiming, as the ice chunks is capable of destroying fragile objects."
	},
    
    {
		name: "Wand Focus: Shock",
		lore: "Thunder and Lightning",
		mod: "thaumcraft",
		aspects: [ "Aer", "Potentia", "Praecantatio" ],
		requirements: [ "thaumaturgy:Wand Foci" ],
		recipes: {
			Wand_Focus_Shock: "http://puu.sh/4KnJd.jpg"
		},
		nature: "Wand Upgrade - Wand of Lightning",
		description: "This focus is capable of focusing elemental energy into bolts of lightning that you can hurl at your enemies."
	},
    
    {
		name: "Wand Focus: Equal Trade",
		lore: "This for That",
		mod: "thaumcraft",
		aspects: [ "Terra", "Permutatio", "Praecantatio" ],
		requirements: [ "thaumaturgy:Wand Foci" ],
		recipes: {
			Wand_Focus_Equal_Trade: "http://puu.sh/4KnY7.jpg"
		},
		nature: "Wand Upgrade - Wand of Equal Trade",
		description: "You can use this focus to trade dozens of blocks in the world with some you are carrying.<br>You must first choose the block you wish to change other blocks into by sneaking and right clicking on the desired block. When you then left click on another block it will turn into the target block. Right clicking wil transform a whole swathe of blocks.<br>You must be carrying enough target blocks, and the transformed blocks will replace them in your inventory. Only blocks with at least one face adjacent to open air or non-solid blocks will be transformed."
	},
    
    {
		name: "Focus Pouch",
		lore: "Convenient container for your foci.",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Vacuos", "Praecantatio" ],
		requirements: [ "thaumaturgy:Wand Foci" ],
		recipes: {
			Focus_Pouch: "http://puu.sh/4KobM.jpg"
		},
		nature: "Focus Containers",
		description: "Once you have gathered a sizeable collection of foci it is quite annoying to carry them all with you. This pouch solves that problem.<br>Whenever you change the focus on your wand, it'll check this pouch first and any foci that get removed will be placed inside it first. You can also right-click the pouch to place or remove foci by hand."
	},
    
    {
		name: "Wand Focus: Nine Hells",
		lore: "Tiny Terrors",
		mod: "thaumcraft",
		aspects: [ "Bestia", "Ignis", "Praecantatio", "Iter" ],
		requirements: [ "thaumaturgy:Wand Focus: Wand of Equal Trade" ],
		recipes: {
			Wand_Focus_Nine_Hells: "http://puu.sh/4KoNb.jpg"
		},
		nature: "Hellbat Summoner",
		description: "Your trips onto the nether have taught you to fear the tiny terrors known as Hellbats. Now you have discovered a way to summon the little terrors and send them after your enemies. Excellent."
	},
    
    {
		name: "Wand Focus: Portable Hole",
		lore: "Never be without an exit again",
		mod: "thaumcraft",
		aspects: [ "Aer", "Alienis", "Perditio", "Iter" ],
		requirements: [ "thaumaturgy:Wand Focus: Wand of Equal Trade" ],
		recipes: {
			Wand_Focus_Portable_Hole: "http://puu.sh/4Kp9d.jpg"
		},
		nature: "It makes temporary holes...",
		description: "You have succeeded in using vis to create extradimensional spaces. Using this focus on a wall or other surface wilkl create an extradimensional passage leading to the other side.<br>This 'hole' only remains open for a few seconds and drains vis from the wand depending on it's depth.<br>Extradimensional holes cannot be created through certain kinds of matter or particularly complex objects."
	},
    
    {
		name: "Gold Wand Caps",
		lore: "Capping things off with style",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Metallum", "Lucrum" ],
		requirements: [ "thaumaturgy:Basic Wandcraft" ],
		recipes: {
			Gold_Wand_Caps: "http://puu.sh/4Kpuu.jpg"
		},
		nature: "Wand Upgrade",
		description: "Gold is a far superior focusing agent than iron, and wands capped with this material takes no penalty when used to channel vis."
	},
    
    {
		name: "Thaumium Wand Caps",
		lore: "Mystical wand foci",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Metallum", "Praecantatio" ],
		requirements: [ "thaumaturgy:Gold Wand Caps", "alchemy:Thaumium", "artifice:Infusion" ],
		recipes: {
			Thaumium_Wand_Caps: "http://puu.sh/4KsB4.jpg",
            Thaumium_Wand_Caps_Charged: "http://puu.sh/5iybz.jpg"
		},
		nature: "Wand Upgrade",
		description: "Thaumium is known for it's ability to store and absorb magic, so using it to craft wand caps is a logical choice. It is very efficient at focusing vis of all types.<br>Crafting these wand caps in an arcane worktable is not sufficient - they need to be infused with additional magic energy to make them usable."
	},
    
    {
		name: "Copper Wand Caps",
		lore: "When iron caps just won't cut it",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Metallum", "Permutatio" ],
		requirements: [ "thaumaturgy:Basic Wandcraft" ],
		recipes: {
			Copper_Wand_Caps: "http://puu.sh/4TSTP.jpg"
		},
		nature: "Wand Upgrade",
		description: "Copper has similar properties to iron when used as a wand cap, but is as efficient as gold when used to channel Ordo or Perditio vis."
	},
    {
		name: "Silver Wand Caps",
		lore: "Capping things off with a little less style",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Metallum", "Lucrum" ],
		requirements: [ "thaumaturgy:Gold Wand Caps", "artifice:Infusion" ],
		recipes: {
			Silver_Wand_Caps: "http://puu.sh/4TSXI.jpg",
            Silver_Wand_Caps_Charged: "http://puu.sh/5iy9U.jpg"
		},
		nature: "Wand Upgrade",
		description: "Silver has similar properties to gold when used as a wand cap, but it slightly more efficient at channeling the four elemental primals (fire, earth, air and water).<br>Crafting these wand caps in an arcane worktable is not sufficient - they need to be infused with additional magic energy to make them usable."
	},
    
    {
		name: "Greatwood Wand Core",
		lore: "Repository of magical energy",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Arbor", "Praecantatio" ],
		requirements: [ "thaumaturgy:Basic Wandcraft" ],
		recipes: {
			Greatwood_Wand_Core: "http://puu.sh/4KpGF.jpg"
		},
		nature: "Wand Core Alternative",
		description: "Carved from greatwood logs, this rod has double the vis storage potential of mundane wood, being able to store up to 50 vis of each type."
	},
    
    {
		name: "Bone Wand Core",
		lore: "Entropic vis storage",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Exanimis", "Praecantatio", "Perditio" ],
		requirements: [ "thaumaturgy:Greatwood Wand Core", "artifice:Infusion" ],
		recipes: {
			Bone_Wand_Core: "http://puu.sh/5l7Bh.jpg"
		},
		nature: "Wand Core Alternative (Perditio)",
		description: "A wand core fashioned from bone has slightly greater storage potential than greatwood cores. What makes it superior to greatwood cores however is that if the level of perditio stored inside it drops below 10%, its will slowly replenish without the use of a node."
	},
    
    {
		name: "Obsidian Wand Core",
		lore: "Earthen vis storage",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Terra", "Praecantatio", "Saxum" ],
		requirements: [ "thaumaturgy:Greatwood Wand Core", "artifice:Infusion" ],
		recipes: {
			Obsidian_Wand_Core: "http://puu.sh/5l7JJ.jpg"
		},
		nature: "Wand Core Alternative (Terra)",
		description: "A wand core chiselled from obsidian has slightly greater storage potential than greatwood cores. What makes it superior to greatwood cores however is that if the level of terra stored inside it drops below 10%, its will slowly replenish without the use of a node."
	},
    
    {
		name: "Reed Wand Core",
		lore: "Airy vis storage",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Aer", "Praecantatio", "Herba" ],
		requirements: [ "thaumaturgy:Greatwood Wand Core", "artifice:Infusion" ],
		recipes: {
			Reed_Wand_Core: "http://puu.sh/5l7EQ.jpg"
		},
		nature: "Wand Core Alternative (Aer)",
		description: "A wand core made from reeds has slightly greater storage potential than greatwood cores. What makes it superior to greatwood cores however is that if the level of aer stored inside it drops below 10%, its will slowly replenish without the use of a node."
	},
    
    {
		name: "Blaze Rod Wand Core",
		lore: "Fiery vis storage",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Ignis", "Praecantatio", "Potentia" ],
		requirements: [ "thaumaturgy:Greatwood Wand Core", "artifice:Infusion" ],
		recipes: {
			Blaze_Rod_Wand_Core: "http://puu.sh/5l7Gr.jpg"
		},
		nature: "Wand Core Alternative (Ignis)",
		description: "Blaze rods used as wand cores has slightly greater storage potential than greatwood cores. What makes it superior to greatwood cores however is that if the level of ignis stored inside it drops below 10%, its fiery nature will slowly replenish it."
	},
    
    {
		name: "Icy Wand Core",
		lore: "Icy vis storage",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Aqua", "Praecantatio", "Gelum" ],
		requirements: [ "thaumaturgy:Greatwood Wand Core", "artifice:Infusion" ],
		recipes: {
			Icy_Wand_Core: "http://puu.sh/5l7MZ.jpg"
		},
		nature: "Wand Core Alternative (Aqua)",
		description: "Wand cores crafted from ice can store the same amount of vis as greatwood cores. What makes it superior to greatwood cores however is that if the level of aqua stored inside it drops below 10%, its fiery nature will slowly replenish it."
	},
    {
		name: "Quartz Wand Core",
		lore: "Ordered vis storage",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Ordo", "Praecantatio", "Vitreus" ],
		requirements: [ "thaumaturgy:Greatwood Wand Core", "artifice:Infusion" ],
		recipes: {
			Quartz_Wand_Core: "http://puu.sh/5l7OU.jpg"
		},
		nature: "Wand Core Alternative (Ordo)",
		description: "A wand core chiselled from nether quartz has slightly greater storage potential than greatwood cores. What makes it superior to greatwood cores however is that if the level of ordo stored inside it drops below 10%, its fiery nature will slowly replenish it."
	},
    
    {
		name: "Silverwood Wand Core",
		lore: "Magical to the core",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Arbor", "Praecantatio" ],
		requirements: [ "thaumaturgy:Greatwood Wand Core", "artifice:Infusion" ],
		recipes: {
			Silverwood_Wand_Core: "http://puu.sh/5l7Qm.jpg"
		},
		nature: "Top Tier Wand Core",
		description: "Silverwood has proved to be an excellent repository of magical energy and wand cores crafted from it can store up to 100 vis of each type."
	},
    
    {
		name: "Wand Recharge Pedestal",
		lore: "Automated Wand Recharging",
		mod: "thaumcraft",
		aspects: [ "Auram", "Permutatio", "Praecantatio", "Potentia" ],
		requirements: [ "artifice:Infusion" ],
		recipes: {
			Wand_Recharge_Pedestal: "http://puu.sh/4T3k8.jpg"
		},
		nature: "Wand Recharger",
		description: "Travelling around the countryside to recharge your wand is all good and well, but an automatic way of doing it would be much better.<br>This specially crafted pedestal does just that - any wand placed in it will automatically draw vis from nearby nodes.<br>Nodes will not be fully drained unless it is a poor quality wand crafted from iron or sticks."
	},
    
    {
		name: "Compound Recharge Focus",
		lore: "For everything a use",
		mod: "thaumcraft",
		aspects: [ "Auram", "Instrumentum", "Permutatio", "Praecantatio", "Potentia" ],
		requirements: [ "thaumaturgy:Wand Recharge Pedestal" ],
		recipes: {
			Compound_Recharge_Focus: "http://puu.sh/4T3DP.jpg"
		},
		nature: "Compound Vis Node Extractor",
		description: "In your travels you have discovered several nodes that contain compound aspects, but as yet there has been no way to tap this rich source of vis. Until now.<br>This focus can be placed on top of a wand recharge pedestal which will allow any want it contains to siphon off the compound vis from any nearby nodes. Unfortunately each point of compound vis is broken down into a single point of primal vis and all the excess energy is lost. However it is a good start and you are sure you will discover better ways to access this resource."
	},
    
    {
		name: "Wand Focus: Pech's Curse",
		lore: "Not in the Thaumonomicon",
		mod: "thaumcraft",
		aspects: [],
		requirements: [ ],
		recipes: {},
		nature: "Offensive Wand Focus",
		description: "THIS ITEM IS NOT IN THE THAUMONOMICON<br>Pech's Curse is acquired only through a befriended Pech Trade at random.<br>Like all Foci it can be attached to any wand (within reason) and can be fired at a mob to inflict Weakness 2, Slowness 3 and Poison 2 at the cost of Ignis, Aqua and Perditio vis from your wand.<br>NOTE: This Focus is acquired from Pech Mages which hold wands."
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