var research_alchemy = [

	{
		name: "Crucible",
		lore: "Bubble and Boil",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: {
			Crucible: "http://puu.sh/4JTtc.jpg"
		},
		nature: "Alchemy Cauldron",
		video: "",
		description: "To craft the Crucible, you must simply use your wand on a cauldron placed in the world.<br>The crucible is an important tool for any thaumaturge. It allows him to render physical objects into their component Essentia and recombine it again as he wishes.<br>The crucible needs to be placed over a source of constant heat and filled with water. Once the water starts boiling you simply throw any items you wish into the crucible and they will be broken down into their component Essentia.<br>If you know the proper formula and the mix of essentia within the crucible is correct, you can then drop a special item into the crucible known as a Catalist. The catalyst draws the essentia into itself and transforms into a whole new item that the crucible then ejects.<br>Any leftover Essentia remains within the crucible for further use, but it is not a good idea to leave essentia within a crucible for too long.<br>Crafting also uses some of the water within the crucible and you will eventually need to refill it. Essentia within the crucible is constantly degrading. Compound essentia degrades into one of it's component aspects, and Primal essentia simply evaporates.<br>Beyond the waste of resources, evaporating and degrading essentia can cause many strange side-effects.<br>You can empty a crucible by right clicking on it with a wand. All the essentia is dumped into the atmosphere... not something you would want to do too often."
	},
	
	{
		name: "Glass Phial",
		lore: "Mystical containers",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: {
			Glass_Phial: "http://puu.sh/4JWf6.jpg"
		},
		nature: "Essentia containers",
		video: "",
		description: "Glass phials are capable of holding all manner of liquids and substances, but their most important use to a thaumaturge is their ability to hold Essentia.<br>Essentia is not easy to gather however and it indelibly stains the phial, making it only usable once."
	},
	
	{
		name: "Thaumium",
		lore: "A magical metal",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Praecantatio" ],
		requirements: [ "alchemy:Crucible" ],
		recipes: { 
			Thaumium: "http://puu.sh/4KrZ8.jpg"
		},
		nature: "Magical Crafting Material",
		video: "",
		description: "Thaumium is the result of infusing base metals with raw magical energy. The result is a metal harder than iron with the ability to accept enchantments beyond that which iron is normally capable of.<br>A metal such as this has many applications in the creating of more advanced thaumaturgical devices.<br>It can also be used to craft tools, arms and armor in a crafting table using the normal recipes."
	},
	
	{
		name: "Iron Transmutation",
		lore: "Transformation of metals into iron",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Permutatio" ],
		requirements: [ "alchemy:Thaumium" ],
		recipes: { 
			Iron_Nugget: "http://puu.sh/4KSfU.jpg"
		},
		nature: "Iron Transfiguration",
		video: "",
		description: "You have discovered a way to multiply iron by steeping iron nuggets in metallum harvested from other metals."
	},
	
	{
		name: "Gold Transmutation",
		lore: "Transformation of metals into gold",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Permutatio" ],
		requirements: [ "alchemy:Iron Transmutation" ],
		recipes: { 
			Gold_Nugget: "http://puu.sh/4KSpl.jpg"
		},
		nature: "Gold Transfiguration",
		video: "",
		description: "You have discovered a way to multiply gold by steeping gold nuggets in metallum harvested from other metals."
	},
	
	{
		name: "Copper Transmutation",
		lore: "Transformation of metals into copper",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Permutatio" ],
		requirements: [ "alchemy:Iron Transmutation" ],
		recipes: { 
			Copper_Nugget: "http://puu.sh/4TT8B.jpg"
		},
		nature: "Copper Transfiguration",
		video: "",
		description: "You have discovered a way to multiply copper by steeping copper nuggets in metallum harvested from other metals."
	},
	
	{
		name: "Tin Transmutation",
		lore: "Transformation of metals into tin",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Permutatio", "Vitreus" ],
		requirements: [ "alchemy:Iron Transmutation" ],
		recipes: { 
			Tin_Nugget: "http://puu.sh/4TT6P.jpg"
		},
		nature: "Tin Transfiguration",
		video: "",
		description: "You have discovered a way to multiply tin by steeping tin nuggets in metallum harvested from other metals."
	},
	
	{
		name: "Silver Transmutation",
		lore: "Transformation of metals into silver",
		mod: "thaumcraft",
		aspects: [ "Lucrum", "Metallum", "Permutatio" ],
		requirements: [ "alchemy:Iron Transmutation" ],
		recipes: { 
			Silver_Nugget: "http://puu.sh/4TT5l.jpg"
		},
		nature: "Silver Transfiguration",
		video: "",
		description: "You have discovered a way to multiply silver by steeping silver nuggets in metallum harvested from other metals."
	},
	
	{
		name: "Lead Transmutation",
		lore: "Transformation of metals into lead",
		mod: "thaumcraft",
		aspects: [ "Metallum", "Ordo", "Permutatio" ],
		requirements: [ "alchemy:Iron Transmutation" ],
		recipes: { 
			Lead_Nugget: "http://puu.sh/4TT28.jpg"
		},
		nature: "Lead Transfiguration",
		video: "",
		description: "You have discovered a way to multiply lead by steeping lead nuggets in metallum harvested from other metals."
	},
	
	{
		name: "Magic Tallow",
		lore: "Rendered fat with a touch of magic",
		mod: "thaumcraft",
		aspects: [ "Corpus", "Praecantatio" ],
		requirements: [ "alchemy:Crucible" ],
		recipes: { 
			Tallow: "http://puu.sh/4Kse9.jpg",
			Candle: "http://puu.sh/4Ksfm.jpg"
		},
		nature: "Magical Crafting Material",
		video: "",
		description: "By processing and heating flesh in a crucible, you you can create a mystical tallow suited for many arcane uses.<br>This tallow can be used to craft candles. It is also possible to craft different coloured candles by combining a candle with a dye in an arcane workbench."
	},
	
	{
		name: "Nitor",
		lore: "Mystical Flame",
		mod: "thaumcraft",
		aspects: [ "Ignis", "Lux"],
		requirements: [ "alchemy:Crucible" ],
		recipes: { 
			Nitor: "http://puu.sh/4KgRZ.jpg"
		},
		nature: "Light Source",
		video: "",
		description: "This flame seems to be fueled by magic itself. The number of uses for an everburning flame seems endless, but unfortunately it doesn't seem to produce much more light than heat, though it could prove to be a steady source of light and energy.<br>Nitor can also be placed in the world to act as a magical light source."
	},
	
	{
		name: "Alumentum",
		lore: "Mystical Energy Source",
		mod: "thaumcraft",
		aspects: [ "Ignis", "Potentia" ],
		requirements: [ "alchemy:Crucible" ],
		recipes: { 
			Alumentum: "http://puu.sh/4KgPA.jpg"
		},
		nature: "Magical Fuel",
		video: "",
		description: "This substance throbs with fiery energy and it is more than eager to release that energy at the slightest bump. It may be unstable, but it would probably make a good source of fuel.<br>It is probably not a good idea to throw it against a solid surface unless you enjoy explosions."
	},
	
	{
		name: "Gunpowder",
		lore: "Who needs creepers?",
		mod: "thaumcraft",
		aspects: [ "Ignis", "Perditio" ],
		requirements: [ "alchemy:Alumentum" ],
		recipes: { 
			Gunpowder: "http://puu.sh/4Ki1U.jpg"
		},
		nature: "Gunpowder Transfiguration",
		video: "",
		description: "You have discovered an alternate source of gunpowder! No more hunting creepers for this explosive substance."
	},
	
	{
		name: "Essentia Distillation",
		lore: "Harvesting essentia",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Limus", "Praecantatio" ],
		requirements: [ "alchemy:Alumentum", "alchemy:Nitor" ],
		recipes: { 
			Arcane_Furnace: "http://puu.sh/4KTv6.jpg",
			Flux_Filter: "http://puu.sh/4KTyb.jpg",
			Arcane_Alembic: "http://puu.sh/4KTzo.jpg"
		},
		nature: "Essentia Harvesting/Collecting",
		video: "",
		description: "You see a future need where you will need ready access to multiple different kinds of aspects - not just primal aspects drawn from your wand.<br>Using basic alchemical principles you have divised a way to break down objects and convert them into essentia.<br>The first step in this process requires an <b>Alchemical Furnace</b>. The alchemical furnace works much like a normal furnace by burning coal to produce heat, but instead of smelting ore into metal, it breaks down objects into a slurry of raw, unprocessed essentia.<br>The next step in the process is to take the essentia slurry and distill it using an <b>Arcane Alembic</b>.<br>To work, arcane alembics need to be placed on top of an alchemy furnace. The essentia slurry will slowly be drawn into the alembic and the individual aspected essentia seperated out. If the alchemical urnace is being powered by alumentum, this distillation process is much faster.<br>You can stack up to 5 different alembics on top if a single furnace.<br>The essentia can then be extracted out of an alembic using phials."
	},
	
	{
		name: "Warded Jars and Labels",
		lore: "Storing and organizing essentia",
		mod: "thaumcraft",
		aspects: [],
		requirements: [ "alchemy:Essentia Distillation" ],
		recipes: { 
			Warded_Jar: "http://puu.sh/5rjwy.jpg",
			Jar_Label: "http://puu.sh/5rjyF.jpg",
			Marked_Label: "http://puu.sh/5rjBJ.jpg"
		},
		nature: "Storing and organizing essentia",
		video: "",
		description: "<b>Research unlocked with Essentia Distillation.</b><p>Essentia can be started in <b>Warded Jars</b>.<br>Warded jars can be placed in world and is able to store essentia virtually indefinitely. The enchantments placed on the jars alsomakes adding or extracting essentia a breeze.<br>Jars placed under the spout of an alembic will be automatically filled. They can also be filled and emptied using phials.<br>What is more they make an excellent storage medium for jams en preserves.<br>Shift clicking on jars and alembics with an empty hand will empty them.<br>As long as a jar contains some essentia you can attach a <b>Jar Label</b> to it.<br>This label will 'lock' the jar to that type of essentia and it will not be able to accept any other kind of essentia.<br>You can remove a label by shift clicking with an empty hand on the side of the jar containing the label. Take care not to shift click on any other side as it will empty the jar as normal.<br>You can place a label in a crafting bench with a phial of essentia to assign an aspect to it and when placed on an empty jar it will automatically lock the jar to that aspect. The essentia used in the recipe is not consumed.<br>Placing it on a filled jar will change the label to the jar's essentia type.<hr>A label can be made blank again by simply placing it by itself in a crafting grid."
	},
	
	{
		name: "Ethereal Bloom",
		lore: "Purifying Flower",
		mod: "thaumcraft",
		aspects: [ "Herba", "Praecantatio", "Sano", "Vitium" ],
		requirements: [ "alchemy:Crucible" ],
		recipes: { 
			Ethereal_Bloom: "http://puu.sh/4T3Qd.jpg"
		},
		nature: "Biome Taint Purification",
		video: "",
		description: "Shimmerleaf is often overshadowed by it's mystical neighbour the Silverwood Tree, but it has magical properties of it's own.<br>Like the Silverwood, Shimmerleaf flowers have purifying properties that lie dorment. You have found a way to awaken these properties and turn it into an Ethereal Bloom.<br>Ethereal blooms slowly, but surely, restores land corrupted by musical means to its former glowy - this includes the blight known as Taint. While it cannot combat Taint directly, few tained growths can survive outside their native environment for long and tend to die back.<br>The flower only purifies the land bathed in its light out to a range of about 8 blocks.<br>Ethereal Blooms are quite fragile and breaking them will turn them back into a Shimmerleaf flower."
	},
	
	{
		name: "Essentia Tubes",
		lore: "Transpotation of Essentia",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Permutatio", "Praecantatio" ],
		requirements: [ "alchemy:Essentia Distillation" ],
		recipes: { 
			Essentia_Tube: "http://puu.sh/5flF4.jpg",
			Essentia_Valve: "http://puu.sh/5flJQ.jpg"
		},
		nature: "Essentia Transport",
		video: "",
		description: "You have discovered several ways to transport essentia, but none of them has proven useful for large scale alchemical operations - until now.<br>You have unlocked the key to creating stable and relatively leak-free tubing. While mundane chemicals can be transported in glass, certain types of essentia either dissolves or simply passes right through it. By wrapping the glass in iron and treating it with quicksilver you have managed to protect it from even the most volatile types of essentia.<br>Gold fittings finish off the piping system and make it visually appealing.<br>The tubes can be connected to all manner of alchemical devices, though warded jars and alembics are their primary targets.<br>Essentia flows through the tubes whenever something is connected to them that can accept it, like warded jars. Labelled jars have a much greater drawing strength - so strong in fact that they will draw essentia from unlabeled jars.<hr>The essentia valve acts much like a normal length of tubing, except it can be turned off by hand or a redstone signal. When this is done the flow off essentia through it will be cut off."
	},
	
	{
		name: "Void Jar",
		lore: "Too much essentia? Impossible!",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Perditio", "Vacuos"],
		requirements: [ "alchemy:Warded Jars and Labels" ],
		recipes: {
			Void_Jar: "http://puu.sh/5rfHG.jpg"
		},
		nature: "Essentia Overflow Solution",
		video: "",
		description: "Void jars function much the same as normal warded jars with one important difference - even when fill they are still able to accept essentia, but the excess essentia is simply lost.<br>This allows you to always have some essentia of that type available, but get rid of any excess that may build up.<br>Like normal jars, void jars can accept labels, but their suction with a label is less than that of a normal labeled jar. (about halway between a unlabaled and labeled jar)."
	},
	
	{
		name: "Filtered Essentia Tube",
		lore: "What you want, where you want it",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Ordo", "Praecantatio" ],
		requirements: [ "alchemy:Essentia Tubes" ],
		recipes: { 
			Filtered_Essentia_Tube: "http://puu.sh/5rh7w.jpg"
		},
		nature: "Labelled Pipes",
		video: "",
		description: "Filtered essentia tubes work like normal tubes, except it is possible to mark them with labels. When marked they will restrict essentia flow through them to what they have have been marked with.<br>Shift-clicking on them with an empty have will remove the label."
	},
	
	{
		name: "Alchemical Centrifuge",
		lore: "Taking things apart",
		mod: "thaumcraft",
		aspects: [ "Fabrico", "Perditio", "Permutatio" ],
		requirements: [ "alchemy:Essentia Tubes" ],
		recipes: { 
			Alchemical_Centrifuge: "http://puu.sh/5fAf9.jpg"
		},
		nature: "Essentia Breaker-Downer (ohgod)",
		video: "",
		description: "The alchemical centrifuge is a wonderous invention that allows you to break essentia into it's component parts.<br>When compound essentia flows into the centrifuge from below it will be broken down into the primal or compound essentia that it is made from. Only one of the components is created for each point of essentia broken down.<br>The resulting essentia needs to be drawn from the top of the centrifuge."
	},
	
	{
		name: "Essentia Funnel",
		lore: "Even transfer",
		mod: "thaumic_tinkerer",
		aspects: [ "Instrumentum", "Iter" ],
		requirements: [ "alchemy:Essentia Distillation" ],
		recipes: { 
			Essentia_Funnel: "http://puu.sh/4TWcZ.jpg"
		},
		nature: "Essentia Sorter",
		video: "",
		description: "You grew tired of managing your jars with phials, to that, you created this new mechanism to transfer the contents of one into another.<br>By placing this block above a hopper, and right clicking it with a filled jar, if the hopper is pointing into a jar that's either empty or of the same aspect, the contents of the jar will be transfered over."
	},
	
	{
		name: "Gaseous Illuminae",
		lore: "Bright out of sight",
		mod: "thaumic_tinkerer",
		aspects: [ "Aer", "Lux" ],
		requirements: [ "alchemy:Nitor" ],
		recipes: { 
			Gaseous_Illuminae: "http://puu.sh/4TWrE.jpg"
		},
		nature: "Invisible Light Source",
		video: "",
		description: "You have studied the intricacies of the light, and found out a way to create completely invisible light by infusing a phial with the raw light.<br>The phial contains a concentrated extract of Gaseous Illuminae, that can be released through a right click, and will spread relatively fast in the nearby area, lighting it up."
	},
	
	{
		name: "Gaseous Tenebrae",
		lore: "The unseen world",
		mod: "thaumic_tinkerer",
		aspects: [ "Aer", "Motus", "Tenebrae" ],
		requirements: [ "alchemy:Alumentum" ],
		recipes: { 
			Gaseous_Tenebrae: "http://puu.sh/4TWUP.jpg"
		},
		nature: "Invisible Darkness Source",
		video: "",
		description: "You have studied the intricacies of the Shadow, and found out a way to create gaseous darkness by infusing a phial with the raw shadow.<br>The phial contains a concentrated extract of Gaseous Tenebrae, that can be released through a right click, and will spread relatively fast in the nearby area, darkening it."
	},
	
	{
		name: "Fume Dissipator",
		lore: "The unseen world",
		mod: "thaumic_tinkerer",
		aspects: [],
		requirements: [ "alchemy:Gaseous Tenebrae" ],
		recipes: {
			Fume_Dissipator: "http://puu.sh/4TXaC.jpg"
		},
		nature: "Gaseous Source Remover",
		video: "",
		description: "<b>Research unlocked with Gaseous Tenebrae.</b><p>After knowing both the Gaseous Illuminae and Tenebrae, you are thinkint it's becoming a hassle to get rid of it. With this item, by shift-right clicking on it, all the nearby gas will get dissipated."
	},
	
	{
		name: "Hyperenergetic Nitor",
		lore: "Take that, Twilight!",
		mod: "thaumic_tinkerer",
		aspects: [ "Aer", "Ignis", "Lux", "Potentia" ],
		requirements: [ "alchemy:Gaseous Illuminae" ],
		recipes: { 
			Hyperenergetic_Nitor: "http://puu.sh/4TWF6.jpg"
		},
		nature: "Handheld Light Source",
		video: "",
		description: "You have managed to create a light that will shine even if it's being carried be a player by energizing the everburning flame that is Nitor with powerful energetic aspects such as Potentia and Lux.<br>The light casted by this will shine closely behind the carrier, it seems to leave a longer trail in the Nether, due to the heat."
	},
	
	{
		name: "Thaumic Restorer",
		lore: "Less cracks than a potato on a stick",
		mod: "thaumic_tinkerer",
		aspects: [ "Instrumentum", "Fabrico", "Ordo", "Praecantatio" ],
		requirements: [ "alchemy:Essentia Tubes", "artifice:Infusion" ],
		recipes: { 
			Thaumic_Restorer: "http://puu.sh/5yLDS.jpg"
		},
		nature: "Tool Repairer",
		video: "",
		description: "You have created a new contraption to rehabilitate broken tools. By right clicking this block with a broken tool and hooking it to essentia tubes, it'll gather essentia to repair the tool.<br>The essentia that will repair, in order of least to most effective are Ordo, Fabrico and Instrumentum.<br>Looking at the block with goggles of revealing also shoes how worn down the item in it still is."
	},
	
	{
		name: "Thaumium Pipes",
		lore: "When technology and magic work together",
		mod: "thaumcraft_gates",
		aspects: [ "Permutatio", "Praecantatio", "Vacuos" ],
		requirements: [ "alchemy:Thaumium", "alchemy:Essentia Tubes" ],
		recipes: { 
			Thaumium_Pipes: "http://puu.sh/5IpNr.jpg"
		},
		nature: "Thaumic Buildcraft Integration",
		video: "",
		description: "This pipe cannot be used as a normal BuildCraft pipe, it will not transport items, fluids or energy. It does not transport anything as a matter of fact. But its uses are plenty!<br>This pipe connects only to aspect containers. It cannot pull the aspects out, but it allows you to measure them using gates. If the container has more than one aspect, the pipe will measure the most abundant one. Or, you can force the pipe to measure a specific aspect by setting a filter. Playing any aspect container items on the filter will force the pipe to measure only the aspect present in that item and ignore all others."
	},

];