var research_golemancy = [

{
		name: "Hungry Chest",
		lore: "A chest that doesn't wait to be opened",
		mod: "thaumcraft",
		aspects: [ "Fames", "Vacuos" ],
		requirements: [],
		recipes: { 
			Hungry_Chest: "http://puu.sh/4Kmuw.jpg"
		},
		nature: "Omnom Chest",
		video: "",
		description: "The hungry chest is able to pick up items by itself if they are dropped close enough to touch it."
	},
	
	{
		name: "Straw Golem",
		lore: "Simple Magical Minions",
		mod: "thaumcraft",
		aspects: [ "Messis", "Motus", "Permutatio", "Spiritus" ],
		requirements: [ "golemancy:Hungry Chest" ],
		recipes: { 
			Straw_Golem: "http://puu.sh/4Xu7y.jpg"
		},
		nature: "Lowest Golem",
		video: "",
		description: "You have discovered the secret of creating golem workers. While the Iron Golem is impressive in its own way, it is very limited and uncontrollable. You have managed to solve both those problems.<br>Your golem workers have just enough will and self-awareness to make them useful tools, but not enough to render them uncontrollable.<hr>You have also discovered how to make the Golemancer's Bell and Golem Animation Cores (see their respective research entries for more detail).<br>The golem you craft can be placed in the world, but will remain inactive until given an animation core.<br>The placement of the golem needs to be considered carefully - if you wish it to interact with inventories, you will need to place it by clicking (or shift-clicking) on the inventory on the side you wish it to interact with.<br>Most golems can operate in a range of 19 blocks around their home location.<br>The first golem you can create is made from bundles of hat and straw. It is physically weak and easy to destroy, but very light and nimble.<p><u>Straw Golem Attributes</u><br><b>Durability:</b> Very Low<br><b>Strength:</b> Very Low<br><b>Self-repair:</b> Average<br><b>Carry Limit:</b> 1<br><b>Speed: </b> Fast<br><b>Upgrades:</b> 1"
	},
	
	{
		name: "Wood Golem",
		lore: "How much wood would a good golem chop if a wood golem could chop wood?",
		mod: "thaumcraft",
		aspects: [ "Arbor", "Motus", "Permutatio", "Spiritus" ],
		requirements: [ "golemancy:Straw Golem" ],
		recipes: { 
			Wood_Golem: "http://puu.sh/4Xu9H.jpg"
		},
		nature: "Below Average Golem",
		video: "",
		description: "This golem is carved from a greatwood log. It is moderate improvement over the straw golem.<p><u>Wood Golem Attributes</u><br><b>Durability:</b> Below Average<br><b>Strength:</b> Low<br><b>Self-repair:</b> Average<br><b>Carry Limit:</b> 4<br><b>Speed: </b> Above Average<br><b>Upgrades:</b> 1"
	},
	
	{
		name: "Tallow Golem",
		lore: "Keep away from open flames",
		mod: "thaumcraft",
		aspects: [ "Corpus", "Motus", "Permutatio", "Praecantatio", "Spiritus" ],
		requirements: [ "golemancy:Wood Golem", "alchemy:Magic Tallow" ],
		recipes: { 
			Tallow_Block: "http://puu.sh/4NmyQ.jpg",
			Tallow_Golem: "http://puu.sh/4XuaP.jpg"
		},
		nature: "Below Average Golem (Better than Wood)",
		video: "",
		description: "This advanced golem is only marginally better than the wood golem, but is capable of holding two upgrades.<p><u>Tallow Golem Attributes</u><br><b>Durability:</b> Low<br><b>Strength:</b> Low<br><b>Self-repair:</b> Average<br><b>Carry Limit:</b> 4<br><b>Speed: </b> Above Average<br><b>Upgrades:</b> 2"
	},
	
	{
		name: "Clay Golem",
		lore: "Tough and Durable",
		mod: "thaumcraft",
		aspects: [ "Motus", "Permutatio", "Spiritus", "Terra" ],
		requirements: [ "golemancy:Wood Golem" ],
		recipes: { 
			Clay_Golem: "http://puu.sh/4XudI.jpg"
		},
		nature: "Average Stat Golem",
		video: "",
		description: "Fired clay is proven to be a superior crafting material for golems. It is fireproof and has more than adequate mobility.<p><u>Clay Golem Attributes</u><br><b>Durability:</b> Average<br><b>Strength:</b> Average<br><b>Self-repair:</b> Slow<br><b>Carry Limit:</b> 8<br><b>Speed: </b> Average<br><b>Upgrades:</b> 1"
	},

	{
		name: "Flesh Golem",
		lore: "It's alive!",
		mod: "thaumcraft",
		aspects: [ "Corpus", "Mortuus", "Motus", "Permutatio", "Spiritus" ],
		requirements: [ "golemancy:Clay Golem" ],
		recipes: { 
			Flesh_Block: "http://puu.sh/4NmCC.jpg",
			Flesh_Golem: "http://puu.sh/4Xugk.jpg"
		},
		nature: "Average Stat Golem (Better than clay)",
		video: "",
		description: "While macabre, golems made from zombie flesh has several features to recommend them. Not only does it repair itself quickly, it is able to hold 2 upgrades.<p><u>Flesh Golem Attributes</u><br><b>Durability:</b> Average<br><b>Strength:</b> Average<br><b>Self-repair:</b> Very Fast<br><b>Carry Limit:</b> 8<br><b>Speed: </b> Average<br><b>Upgrades:</b> 2"
	},
	
	{
		name: "Stone Golem",
		lore: "Strong, but slow",
		mod: "thaumcraft",
		aspects: [ "Motus", "Permutatio", "Saxum", "Spiritus" ],
		requirements: [ "golemancy:Clay Golem" ],
		recipes: { 
			Stone_Golem: "http://puu.sh/4Xui9.jpg"
		},
		nature: "Above Average Golem",
		video: "",
		description: "Stone golems are very durable and able to carry heavy loads, but they are much slower than most golems.<p><u>Stone Golem Attributes</u><br><b>Durability:</b> Above Average<br><b>Strength:</b> Above Average<br><b>Self-repair:</b> Slow<br><b>Carry Limit:</b> 16<br><b>Speed: </b> Slow<br><b>Upgrades:</b> 1"
	},
	
	{
		name: "Iron Golem",
		lore: "Like village golems only smaller... and better",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Motus", "Permutatio", "Spiritus" ],
		requirements: [ "golemancy:Clay Golem" ],
		recipes: { 
			Iron_Golem: "http://puu.sh/4XujE.jpg"
		},
		nature: "Highest Golem",
		video: "",
		description: "Iron golems are extremely tough and strong, able to carry huge loads. Their weight however causes them to move quite slowly.<p><u>Iron Golem Attributes</u><br><b>Durability:</b> High<br><b>Strength:</b> High<br><b>Self-repair:</b> Very Slow<br><b>Carry Limit:</b> 32<br><b>Speed: </b> Very Slow<br><b>Upgrades:</b> 1"
	},
	
	{
		name: "Thaumium Golem",
		lore: "Simple Magical Minions",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Motus", "Permutatio", "Praecantatio", "Spiritus" ],
		requirements: [ "golemancy:Iron Golem", "alchemy:Thaumium" ],
		recipes: { 
			Thaumium_Block: "http://puu.sh/4NmPF.jpg",
			Thaumium_Golem: "http://puu.sh/4XulC.jpg"
		},
		nature: "Highest Golem (Better than Iron)",
		video: "",
		description: "Thaumium golems have slightly better attributes than iron golems and they are able to have 2 upgrades. They are also highly resistant to magical damage.<p><u>Thaumium Golem Attributes</u><br><b>Durability:</b> Very High<br><b>Strength:</b> High<br><b>Self-repair:</b> Slow<br><b>Carry Limit:</b> 32<br><b>Speed: </b> Slow<br><b>Upgrades:</b> 2"
	},
	
	{
		name: "Golem Core: Gather",
		lore: "Picking up what you are putting down",
		mod: "thaumcraft",
		aspects: [],
		requirements: [ "golemancy:Straw Golem" ],
		recipes: { 
			Blank_Core: "http://puu.sh/4Nn3q.jpg",
			Golem_Core_Gather: "http://puu.sh/4Nn42.jpg"
		},
		nature: "Animation Core: Pickup",
		video: "",
		description: "Golem Animation cores are used to give your golems purpose - without a core they remain inanimate.<br>The first such core you are able to create is the Gather core.<br>Golems fitted with this core will seek dropped items within 16 blocks, pick them up and then place them inside an attached inventory. If they are not attached to an inventory they will simply hold on to them.<br>If you right click on the golem you will be able to set specific items they should pick up - all others will be ignored.<br>Simply right-click on a freshly placed golem with a core to attach it to the golem."
	},
	
	{
		name: "Golem Core: Fill",
		lore: "Keeping an inventory supplied",
		mod: "thaumcraft",
		aspects: [ "Fames", "Permutatio", "Vacuos" ],
		requirements: [ "golemancy:Golem Core: Gather" ],
		recipes: { 
			Golem_Core_Fill: "http://puu.sh/4Sou3.jpg"
		},
		nature: "Animation Core: Inventory Filling",
		video: "",
		description: "Golems fitted with this core will examine inventories you have marked for certain items, and place them in their home inventory. There are two modes of operation:<br>In Precise Amount mode the golem will fill its home inventory with the specific items until it contains an amount equal to the amount you specified in its interface.<br>In Any amount mode the golem will keep filling the current inventory with the specified items so long as there is room and available items."
	},
	
	{
		name: "Golem Core: Empty",
		lore: "Moving things somewhere else",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Permutatio", "Vacuos" ],
		requirements: [ "golemancy:Golem Core: Gather" ],
		recipes: { 
			Golem_Core_Empty: "http://puu.sh/4Sosf.jpg"
		},
		nature: "Animation Core: Empty",
		video: "",
		description: "Golems fitted with this core will remove items from an attached inventory and take them to the marked location. If the marked location is a container, they will place it inside.<br>If you wish, you can specify what items should be removed from the inventory by accessing the golems interface. All other items will be ignored."
	},
	
	{
		name: "Golem Core: Use",
		lore: "Clickity Click",
		mod: "thaumcraft",
		aspects: [ "Humanus", "Instrumentum", "Machina", "Permutatio" ],
		requirements: [ "golemancy:Golem Core: Empty", "artifice:Infusion" ],
		recipes: {
			Golem_Core_Use: "http://puu.sh/4Sorn.jpg"
		},
		nature: "Animation Core: Click Simulation",
		video: "",
		description: "Like the Empty core, golems fitted with this core will remove items from an attached inventory or dropping it in the world, they will attempt to use it on a target block or location.<br>They will attempt to use the item as if they are a player right-clicking on the target block or location with the item.<br>If you wish, you can specify what items should be removed from the inventory by accessing the golems interface. All other items will be ignored."
	},
	
	{
		name: "Golem Core: Harvest",
		lore: "Animated Farmer",
		mod: "thaumcraft",
		aspects: [ "Iter", "Messis", "Meto" ],
		requirements: [ "golemancy:Golem Core: Gather" ],
		recipes: { 
			Golem_Core_Harvest: "http://puu.sh/4Soqk.jpg"
		},
		nature: "Animation Core: Farmer",
		video: "",
		description: "Golems fitted with this core need not be attached to an inventory. They seek out fully grown crops, reeds and other commonly farmed plants within a small radius and harvests them. The harvested material simply drops to the ground and must be gathered by some other means.<br>Unfortunately they are not smart enough to replant the crops they have harvested, but you are sure with a bit of work you might be able to eventually fix that bug.<p><u>Order Upgrade Unlocked</u> (Unlocked with Golem Upgrade: Order)<br>Harvest golems fitted with this upgrade will now attempt to replant the crop they just harvested. This could fail if the plant failed to drop the proper seed or seedling."
	},
	
	{
		name: "Golem Core: Chop",
		lore: "Animated Lumberjack",
		mod: "thaumcraft",
		aspects: [ "Arbor", "Instrumentum", "Meto", "Potentia" ],
		requirements: [ "golemancy:Golem Core: Harvest", "artifice:Axe of the Stream", "artifice:Infusion" ],
		recipes: { 
			Golem_Core_Chop: "http://puu.sh/4Sopk.jpg"
		},
		nature: "Animation Core: Lumber Chopper",
		video: "",
		description: "Like Harvester golems, Lumberjack golems can be placed anywhere. They will seek out nearby trees and chop them down. Stronger golems will chop them faster.<br>Lumberjack golems do not replant the trees they have chopped down."
	},
	
	{
		name: "Golem Core: Guard",
		lore: "Guarding your valuables",
		mod: "thaumcraft",
		aspects: [ "Sensus", "Telum", "Vinculum" ],
		requirements: [ "golemancy:Golem Core: Gather" ],
		recipes: { 
			Golem_Core_Guard: "http://puu.sh/4Sova.jpg"
		},
		nature: "Animation Core: Mob Protection",
		video: "",
		description: "Golems fitted with this core act as guards, attacking any hostile creatures within range.<br>You are sure with a little bit of tinkering you could make a golem a bit more selective with the targets it attacks, bit for now it only seeks out aggressive mobs other than creepers.<p><u>Order Upgrade Unlocked</u> (Unlocked with Golem Upgrade: Order)<br>If you fit this upgrade you can specify the types of creatures the golem will attack. The golem will also be able to attack more than just hostile entities."
	},
	
	{
		name: "Golem Core: Decanting",
		lore: "Keeping a tank filled with liquid",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Iter", "Permutatio" ],
		requirements: [ "golemancy:Golem Core: Fill" ],
		recipes: { 
			Golem_Core_Decanting: "http://puu.sh/4Sow9.jpg"
		},
		nature: "Animation Core: Liquid Filling",
		video: "",
		description: "Golems fitted with this core will attempt to keep the liquid inventory they are attached to filled with an appropriate liquid.<br>If you wish, you can specify what liquid should be placed in the tank by accessing the golems interface and placing a liquid container (like a filled bucket) in a slot. All other liquids will be ignored.<br>A decanting golem can only carry 100mB of liquid per item its material type is normally allowed to carry, though they will always carry a full buckets worth if instructed to pick up liquids blocks in the world."
	},
	
	{
		name: "Golem Core: Alchemy",
		lore: "Moving Essentia Around",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Iter", "Potentia", "Praecantatio" ],
		requirements: [ "golemancy:Golem Core: Decanting", "artifice:Infusion" ],
		recipes: { 
			Golem_Core_Alchemy: "http://puu.sh/4Soxf.jpg"
		},
		nature: "Animation Core: Essentia Transportation (Golem Style)",
		video: "",
		description: "This core is a specialized version of a decanting core, specifically designed to transport essentia.<br>Alchemy golems assigned to an alchemy furnace or alembic it will draw essentia from the entire stack of alembics and transport it to marked warded jars. It is not required to mark every single jar - the golem will automatically fill all jars adjacent to the marked jar and all other similarly connected jars.<br>Alchemy golems prioritize nearby jars first and will try to fill an entire jar before starting on a new one."
	},
	
	{
		name: "Golemancer's Bell",
		lore: "Pay Attention",
		mod: "thaumcraft",
		aspects: [],
		requirements: [ "golemancy:Straw Golem" ],
		recipes: { 
			Golemancers_Bell: "http://puu.sh/4Sp10.jpg"
		},
		nature: "Golem Order Tool",
		video: "",
		description: "Golems are notoriously bad at following verbal commands, but this bell allows you to avoid all that.<br>Simply right click on a golem to select it. Once that is done a glowing, gearlike circle will appear indicating the golems 'home' location and the side it is attached to.<br>You are now able to right click anywhere in the world to link the golem to blocks, locations or inventories it may interact with. Clicking on the same location will unmark it or cycle through different colors if the golem is able to interact with different colored markers.<br>Shift + right-clicking on a marked location will always clear it and pressing F will clear all marked locations.<hr>Left-clicking on a golem picks it up and with all its current upgrades and settings intact. Shift + left-clicking picks up the golem but removed its core and any attached upgrades which drop seperately. There is a good chance that upgrades will be lost if you do this however."
	},
	
	{
		name: "Golem Upgrade: Air",
		lore: "Making your golem faster",
		mod: "thaumcraft",
		aspects: [ "Aer", "Motus" ],
		requirements: [ "golemancy:Golemancer's Bell" ],
		recipes: { 
			Golem_Upgrade_Air: "http://puu.sh/4Spg0.jpg"
		},
		nature: "Golem Upgrade: Speed",
		video: "",
		description: "When this upgrade is attached to a golem it will increase its movement and ranged attack speed.<br>Specific golem cores might benefit from this upgrade in other ways, so you might wish to check if additional pages were added to their Thaumonomicon entry."
	},
	
	{
		name: "Golem Upgrade: Earth",
		lore: "Making your golem stronger",
		mod: "thaumcraft",
		aspects: [ "Terra", "Victus" ],
		requirements: [ "golemancy:Golemancer's Bell" ],
		recipes: { 
			Golem_Upgrade_Earth: "http://puu.sh/4SpoE.jpg"
		},
		nature: "Golem Upgrade: Strength",
		video: "",
		description: "This upgrade will increase the increase the amount of items your golem can carry at a time. Each upgrade increases the limit between 4 and 16 (dependant on the golems base carry limit).<br>It also increase its physical damage and how quickly it harvests materials or performs tasks dependant on brute strength.<br>Specific golem cores might benefit from this upgrade in other ways, so you might wish to check if additional pages were added to their Thaumonomicon entry."
	},
	
	{
		name: "Golem Upgrade: Fire",
		lore: "Making your golem all fired up",
		mod: "thaumcraft",
		aspects: [ "Ignis", "Potentia" ],
		requirements: [ "golemancy:Golemancer's Bell" ],
		recipes: { 
			Golem_Upgrade_Fire: "http://puu.sh/61MY6.jpg"
		},
		nature: "Golem Upgrade: Inventory Increase",
		video: "",
		description: "This upgrade increases the interface inventory of a golem by 2 slots, allowing more items to be filtered or sorted.<br>This golem's melee attacks also sets its target on fire.<br>Specific golem cores might benefit from this upgrade in other ways, so you might wish to check if additional pages were added to their Thaumonomicon entry."
	},
	
	{
		name: "Golem Update: Water",
		lore: "Making your golem more perceptive",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Sensus" ],
		requirements: [ "golemancy:Golemancer's Bell" ],
		recipes: { 
			Golem_Upgrade_Water: "http://puu.sh/4SpYJ.jpg"
		},
		nature: "Golem Upgrade: Perception",
		video: "",
		description: "This upgrade increases the visual range of most golems allowing them to travel further afield to perform their tasks.<br>It also increases the range and accuracy of ranged attacks.<br>Specific golem cores might benefit from this upgrade in other ways, so you might wish to check if additional pages were added to their Thaumonomicon entry."
	},
	
	{
		name: "Golem Upgrade: Order",
		lore: "Making your golem more organized",
		mod: "thaumcraft",
		aspects: [ "Cognitio", "Ordo" ],
		requirements: [ "golemancy:Golemancer's Bell" ],
		recipes: { 
			Golem_Upgrade_Order: "http://puu.sh/4SqM8.jpg"
		},
		nature: "Golem Upgrade: Golem Organization",
		video: "",
		description: "This upgrade allows golems to specify different colors for blocks marked with the Golemancer's Bell. This allows for greater control over what they do and where they do it.<br>This upgrade also unlocks certain features of some golem cores giving them a greater scope of operation.<br>Specific golem cores might benefit from this upgrade in other ways, so you might wish to check if additional pages were added to their Thaumonomicon entry."
	},
	
	{
		name: "Golem Update: Entropy",
		lore: "Making your golem pricky... and fuzzy",
		mod: "thaumcraft",
		aspects: [ "Cognitio", "Perditio" ],
		requirements: [ "golemancy:Golemancer's Bell" ],
		recipes: { 
			Golem_Upgrade_Entropy: "http://puu.sh/4T1AS.jpg"
		},
		nature: "Golem Upgrade: Thorns and Discernment",
		video: "",
		description: "Golems fitted with this upgrade automatically inflicts damage on anything damaging them.<br>Golems with this upgrade also become slightly less discerning. In general this means that when tasked to filter a certain type of item (a copper ingot for instance) they will check for all items that count as copper ingots - not just the specific ingot you specified.<br>Specific golem cores might benefit from this upgrade in other ways, so you might wish to check if additional pages were added to their Thaumonomicon entry."
	},
	
	{
		name: "Advanced Golem",
		lore: "Maybe I should think this through...",
		mod: "thaumcraft",
		aspects: [ "Cognitio", "Potentia", "Sensus", "Victus" ],
		requirements: [ "golemancy:Golem Upgrade: Air", "golemancy:Golem Upgrade: Earth", "golemancy:Golem Upgrade: Fire", "golemancy:Golem Upgrade: Aqua", "golemancy:Golem Upgrade: Order", "golemancy:Golem Upgrade: Entropy", "artifice:Infusion" ],
		recipes: { 
			Advanced_Golem: "http://puu.sh/4T1GW.jpg"
		},
		nature: "Golem Upgrade: Advanced",
		video: "",
		description: "You have discovered a way of improving golems in several minor ways.<br>Firstly, golems that g through this process are able to hold one additional upgrade, though they can never have more than two upgrades of a single type.<br>Secondly, they move slightly faster.<br>Thirdly, they have a slightly greater sight radius.<br>You are sure the malevolant intent in their eyes is just your imagination."
	},
	
	{
		name: "Tiny Hats",
		lore: "Keeping the sun at bay",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Pannus", "Victus" ],
		requirements: [],
		recipes: { 
			Tiny_Hats: "http://puu.sh/4T1Oz.jpg"
		},
		nature: "Golem Upgrade: Health",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>This tiny hat is the perfect accessory for any golem. Not only is it stylish and dashing, but any golem wearing it will have increased health and vitality."
	},
	
	{
		name: "Tiny Spectacles",
		lore: "The better to see you with",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Pannus", "Sensus" ],
		requirements: [],
		recipes: { 
			Tiny_Spectacles: "http://puu.sh/4T1Ss.jpg"
		},
		nature: "Golem Upgrade: Perception",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>Golems are notoriously short sighted, and these glasses alleviate that weakness to some degree."
	},
	
	{
		name: "Tiny Bowties",
		lore: "...are cool",
		mod: "thaumcraft",
		aspects: [ "Iter", "Lucrum", "Pannus" ],
		requirements: [],
		recipes: { 
			Tiny_Bowties: "http://puu.sh/4T1Xm.jpg"
		},
		nature: "Golem Upgrade: Speed",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>A must for any golem on the go, this bowtie will fill it with additional energy, increasing its pace."
	},
	
	{
		name: "Tiny Fezzes",
		lore: "...are cool too",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Telum", "Volatus" ],
		requirements: [],
		recipes: { 
			Tiny_Fezzes: "http://puu.sh/4T21o.jpg"
		},
		nature: "Golem Upgrade: Self Repair",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>This strange headgear seems to fill any golem wearing it with unusual vitality, allowing it to repair damage at a much faster pace."
	},
	
	{
		name: "Golem Dart Launcher",
		lore: "Small but pointy",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Telum", "Volatus" ],
		requirements: [],
		recipes: { 
			Golem_Dart_Launcher: "http://puu.sh/4T24Y.jpg"
		},
		nature: "Golem Upgrade: Ranged Attack",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>This dart launcher can only be attached to combat golems. It is not quite as powerful as the golems primary attack, but gives golems limited to melee combat a means of attacking foes at range."
	},
	
	{
		name: "Golem Visor",
		lore: "Thank you for your cooperation",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Sensus", "Tutamen" ],
		requirements: [],
		recipes: { 
			Golem_Visor: "http://puu.sh/4T2bf.jpg"
		},
		nature: "Golem Upgrade: Experience Dropper",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>This metal visor will grant a combat golem a small amount of additional armor protection. It will also insure that any foes attacked by the golem will drop experience orbs when they die."
	},
	
	{
		name: "Golem Armor",
		lore: "A tough nut to crack",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Metallum", "Tutamen" ],
		requirements: [],
		recipes: { 
			Golem_Armor: "http://puu.sh/4T2jH.jpg"
		},
		nature: "Golem Upgrade: Damage Resistance",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>The armored playing grants the golem wearing it increased resistance to physical harm. Unfortunately the additional protection comes at a cost, as all the heavy ironmongery will slow it down."
	},
	
	{
		name: "Golem Mace",
		lore: "Its clobbering time",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Metallum", "Telum" ],
		requirements: [],
		recipes: { 
			Golem_Mace: "http://puu.sh/4T2jH.jpg"
		},
		nature: "Golem Upgrade: Melee Damage Upgrade",
		video: "",
		description: "<b>This research is unlocked with ''Lost Research''</b><p>This weapon increases the damage a golem will do with melee attacks."
	},
	
	{
		name: "Traveling Trunk",
		lore: "obile Luggage",
		mod: "thaumcraft",
		aspects: [ "Arbor", "Spiritus", "Vacuos" ],
		requirements: [ "golemancy:Wood Golem", "golemancy:Hungry Chest" ],
		recipes: { 
			Traveling_Trunk: "http://puu.sh/5rhGQ.jpg"
		},
		nature: "Living, moving, talking chest! (What do you mean it doesn't talk...?)",
		video: "",
		description: "An extention of your golemancy research has lead you to a useful companion for any thaumatuge on the go: The Traveling Trunk.<br>This wooden chest will happilly hop after its master, always ready to provide a convenient storage space for anything you pick up.<br>The traveling trunk is touch and can take a significant amount of beating. Is it highly resistant to fire and cannot be harmed by falling.<br>The trunk can follow its master everywhere - even distant dimensions. Should you wish it to stay put however, there is a convenient button located in its gui which will make it remain in it's current position.<br>The traveling trunk slowly heals itself over time, but you can also feed it all manner of food to speed up this process.<br>Like normal golems, the trunk can be picked up by left clicking with a golemancer's bell. It will drop all items in it's inventory if you do so. Shift clicking will also cause it to drop any upgrades you have applied to it with the normal loss chance.<br>It can accept a single upgrade like normal golems, but they grant unique abilities to the trunk. See the following pages for details as you discover the relevant upgrades.<br><u>Golem Upgrade: Air</u><br>With this upgrade installed the traveling trunk will move faster.<br><u>Golem Upgrade: Earth</u><br>With this upgrade installed the trunk will be able to carry more items and will gain an aditional row in it's inventory.<br><u>Golem Upgrade: Fire</u><br>With this upgrade installed the traveling trunk will defend its master when he is attacked<br><u>Golem Upgrade: Water</u><br>With this upgrade installed the traveling trunk cannot be opened or picked up by anyone else but its master.<br>It also become highly resistant to all but the most devastating amounts of damage.<br><u>Golem Upgrade: Ordo</u><br>With this upgrade installed the traveling trunk will retain its items when it is picked up using a golemancer's bell. It will drop items as normal when shift-clicked is used.<br><u>Golem Upgrade: Entropy</u><br>With this upgrade installed the traveling trunk will automatically suck in nearby items it has room for."
	},
	
	{
		name: "Tool Dynamism",
		lore: "I'm level 78...",
		mod: "thaumic_tinkerer",
		aspects: [ "Machina", "Metallum", "Motus", "Potentia" ],
		requirements: [ "golemancy:Golem Core: Gather" ],
		recipes: { 
			Tool_Dynamism: "http://puu.sh/4TZ7j.jpg"
		},
		nature: "Left/Right Click Simulator",
		video: "",
		description: "You decided to further discover the uses of Golem Animation Cores, and this is the fruit of that labour.<br>This tablet can accept an item to animate with mystical energy. Using the left and right buttons in the tablet's interface, you can select to do a left or right click with the item. The button in the bottom controls if the tablet reacts always when it can or just when a redstone signal is applied.<br>Virtually anything can be animated, including blocks. The type of tool in the tablet also defines how fast something breaks as expected."
	},
	
];