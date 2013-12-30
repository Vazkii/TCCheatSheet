var research_apimancy = [

{
		name: "Apimancy",
		lore: "Adding some sparkle to your buzz",
		mod: "magic_bees",
		aspects: [],
		requirements: [],
		recipes: { },
		nature: "In-Game Reference Guide",
		video: "",
		description: "Welcome to Apimancy! As a budding keeper of magical bees, there are a few things you should know before diving in. As your acceptance letter to the Academy of Austere<br>Apimancers has mentioned, there are several new tools to discover. These include some improved versions of Foresty tools, each with their own particular quirks and new frames for your apiaries.<hr>You may also discover that there are new bee strains available to discover, if you can coax them to live in certain conditions. The Forestry Escritoire will help you discover them and become the envy of your former, nonmagical colleagues. Also take note of the several new strains of wild bees that have appeared: these are the key to progressing into the magical lineages of your small winged charges."
	},
	
	{
		name: "Lore Fragments",
		lore: "Research? More like BEEsearch!",
		mod: "magic_bees",
		aspects: [],
		requirements: [],
		recipes: { 
			Lore_Fragment: "http://puu.sh/4U8DL.jpg"
		},
		nature: "Knowledge Fragment Crafting Material",
		video: "",
		description: "While experimenting with bee breeds, you may run accross a strain whose intellectual capabilities are a match for your own. Well, maybe, however unlikely that is. It's possible that they may unearth some obscure reference or a snippet of information that your great intellect may have missed while exploiting the greatrer mysteries of the universe.<br>Should your helpful buzzing friends happen to locate this sort of item for you, it may be possible to combine the scraps together into something a little more cohesive."
	},
	
	{
		name: "Thaumium Scoop",
		lore: "Handled with care",
		mod: "magic_bees",
		aspects: [ "Instrumentum" ],
		requirements: [ "alchemy:Thaumium" ],
		recipes: { 
			Thaumium_Scoop: "http://puu.sh/4U9yX.jpg"
		},
		nature: "Magical Scoop",
		video: "",
		description: "Normal scoops are fragile, and prone to breakage. As an authority in Apimancy, you can do better. By adding some Thaumium to the handle and lacing it with a measure of order, your new scoop will last up to three times longer!<br>In addition, the Thaumium in the device will accept the Repair enchantment."
	},
	
	{
		name: "Thaumium Grafter",
		lore: "Saplings for every occassion",
		mod: "magic_bees",
		aspects: [ "Arbor", "Instrumentum", "Lucrum" ],
		requirements: [ "apimancy:Thaumium Scoop" ],
		recipes: { 
			Thaumium_Grafter: "http://puu.sh/4UbPp.jpg"
		},
		nature: "Magical Grafter",
		video: "",
		description: "Simple grafters are almost uselessly fragile, and while Proven Grafters are useful, the rarity of emeralds makes them annoying to procure. The solution? Make it yourself!<br>The Thaumium Grafter, like the Thaumium Scoop, is a tougher, enchantable version of the most basic of the Arborimancer's tools. Use caution though, for although the Repair enchantment can be applied to the grafter, its unusual properties make it exhausting to use."
	},
	
	{
		name: "Magic Frame",
		lore: "Putting magic into beekeeping contexts",
		mod: "magic_bees",
		aspects: [ "Instrumentum", "Tutamen" ],
		requirements: [ "artifice:Enchanted Fabric" ],
		recipes: { 
			Magic_Frame: "http://puu.sh/4Ubn3.jpg"
		},
		nature: "Introductory Magic Bee Frame",
		video: "",
		description: "{ Blank }"
	},
	
	{
		name: "Essence of False Life",
		lore: "A rose by any other name...",
		mod: "magic_bees",
		aspects: [ "Praecantatio", "Victus" ],
		requirements: [ "apimancy:Magic Frame" ],
		recipes: { 
			Essense_of_False_Life: "http://puu.sh/4ZrV3.jpg",
			Gentle_Frame: "http://puu.sh/4ZrWW.jpg"
		},
		nature: "Gentle Frame",
		video: "",
		description: "Simple to create by means of magic, this essence has unusual properties when exposed to bees. When combined with an everyday apiary frame, it has the effect of greatly extending the lifespan of a working hive."
	},
	
	{
		name: "Essence of Fickle Permanence",
		lore: "Assured in unsurity",
		mod: "magic_bees",
		aspects: [ "Ordo", "Perditio" ],
		requirements: [ "apimancy:Essence of False Life" ],
		recipes: { 
			Essence_of_Fickle_Permanence: "http://puu.sh/4ZseG.jpg",
			Essence_of_Fickle_Permanence_Alternative_Recipe: "http://puu.sh/4ZsgO.jpg",
			Metabolic_Frame: "http://puu.sh/4Zsij.jpg"
		},
		nature: "Metabolic Frame",
		video: "",
		description: "Unstable by nature, the Essence of Fickle Permanence has the side effect of causing normally stable objects and systems to become somewhat unreliable. While this may mostly be a bad thing, Apimancers have discovered that exposing a hive to the essense has the duel effects of causing the bees to work faster, and the offspring to have higher mutation rates."
	},
	
	{
		name: "Essence of Everlasting Durability",
		lore: "The rubber to your glue",
		mod: "magic_bees",
		aspects: [ "Tutamen" ],
		requirements: [ "apimancy:Essence of False Life" ],
		recipes: { 
			Essence_of_Everlasting_Durability: "http://puu.sh/4ZsMN.jpg",
			Resiliant_Frame: "http://puu.sh/4ZsO6.jpg"
		},
		nature: "Resiliant Frame",
		video: "",
		description: "This is the distilled essense of protection, bound to last forever, or until the magic stored within it weaken and eventually break. But until then, it's invincible. Mostly.<br>While Magic Frames are useful, they are a tad fragile. This essence takes the enchantments you wave into Magic Frames to an entirely new level. Combine the essence with a magic frame, and it should leave a vastly extended lifespan."
	},
	
	{
		name: "Essence of a Shallow Grace",
		lore: "Not quite six feet under",
		mod: "magic_bees",
		aspects: [ "Mortuus" ],
		requirements: [ "apimancy:Essence of Fickle Permanence" ],
		recipes: { 
			Essence_of_a_Shallow_Grave: "http://puu.sh/4ZsQ2.jpg",
			Necrotic_Frame: "http://puu.sh/4ZsR1.jpg"
		},
		nature: "Necrotic Frame",
		video: "",
		description: "{ Blank }"
	},
	
	{
		name: "Essence of Lost Time",
		lore: "No time like the unmoment",
		mod: "magic_bees",
		aspects: [ "Tempus" ],
		requirements: [ "apimancy:Essence of Fickle Permanence" ],
		recipes: { 
			Essence_of_Lost_Time: "http://puu.sh/4ZtPe.jpg",
			Temporal_Frame: "http://puu.sh/4ZtQj.jpg"
		},
		nature: "Temportal Frame",
		video: "",
		description: "Time is a fickle thing. It comes and goes, but where exactly does it go to? As a respectable thaumaturge, it has to become possible to trap these wasted moments and save them in a magical form. So, now that it is possible to collect extra time from the world, it seems only appropriate that they are used in a place that would be useful. It would be too dangerous to attempt to access these moments yourself for the moment, but perhaps it would be simple to allow your bees access to this untapped lump of time.<br>By combining the essence with a Magic Frame as usual will suffice to extend the lifespan of bees in your keeping by several times."
	},
	
	{
		name: "Dimensional Singularity",
		lore: "Quantum flux for them, unlimited storage for you",
		mod: "magic_bees",
		aspects: [ "Tempus", "Vacuos" ],
		requirements: [ "apimancy:Magic Frame", "apimancy:Essence of Lost Time", "apimancy:Essence of a Shallow Grave" ],
		recipes: { 
			Dimensional_Singularity: "http://puu.sh/4ZtZ8.jpg",
			Dimensional_Singularity_Alternative_Recipe: "http://puu.sh/4Zu0r.jpg"
		},
		nature: "Magical CRafting Material",
		video: "",
		description: "While it may appear similar to the Portable Hole, it serves as a two-way link to another place, which is... probably uninhabited. It should be possible to utilize these singularities to store materials outside of your dimensional understanding - which of course means that they won't clutter up your inventory. As they are now, they are not particularly useful, but there should be ways to unlock their potential."
	},
	
	{
		name: "Essence of Scornful Oblivion",
		lore: "Cast aside with Malice",
		mod: "magic_bees",
		aspects: [ "Fames", "Tempus", "Vacuos" ],
		requirements: [ "apimancy:Dimensional Singularity" ],
		recipes: { 
			Essence_of_Scornful_Oblivion: "http://puu.sh/4ZuWI.jpg",
			Oblivion_Frame: "http://puu.sh/4ZuXY.jpg"
		},
		nature: "Oblivion Frame",
		video: "",
		description: "Breeding bees for mutations can be aggrivating, especially whith long-lived species. With a little cleverness and only the slightest hint of smugness, you have found a way to utilize the Dimensional Singularity in a manner that only sucks away the life force of your tiny flying friends, but by bit. Well maybe significant amounts all at once. It's probably not going to affect them too badly.<br>It may be somewhat tricky to obtain more than one of the Dragon Eggs nessecary to obtain more than one of these. Perhaps there is a bee species that can assist with the limitation."
	},

];