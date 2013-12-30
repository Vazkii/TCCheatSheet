var research_artifice = [

	{
		name: "Thaumometer",
		lore: "Measuring Magic",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: {
			Thaumometer: "http://puu.sh/4JTE8.jpg"
		},
		nature: "Aspect Scanner",
		video: "",
		description: "This Thaumometer is one of the most useful and important tools in a thaumaturgists arsenal, second only to the wand.<br>Firstly it allows you to scan objects, creatures or mystical phenomena and determine their magical make-up. You simply need to hold the right mouse button and wait.<br>Secondly it makes discovering nodes easier, as they become clearly visible if viewed through the Thaumometer's lens - even through solid objects!"
	},
	
	{
		name: "Item Grate",
		lore: "Letting the good things in",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: { 
			Item_Grate: "http://puu.sh/4JWrA.jpg"
		},
		nature: "Crucible Trapdoor",
		video: "",
		description: "The item grate allows you to toggle it open or closes with your hand, or with a redstone signal. If in the open position, any dropped items will simply fall right through it."
	},
	
	{
		name: "Table",
		lore: "Some assembly required",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: { 
			Table: "http://puu.sh/4JWtD.jpg"
		},
		nature: "Decorative Table / Mystical Construct Base",
		video: "",
		description: "The table is more than a simple decorative block - it also serves as a base for other surfaces useful in the practice of magic, like the Arcane Worktable and the Research Table."
	},
	
	{
		name: "Arcane Worktable",
		lore: "Crafting with magic",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: { 
			Arcane_Worktable: "http://puu.sh/4JWzo.jpg"
		},
		nature: "Vis utilizing workbench",
		video: "",
		description: "To create an Arcane Worktable, simply right-click with a wand on a table you have placed in the world. The Arcane Worktable serves the same purpose as a normal crafting table, with a few key acceptions.<br>Apart from normal creating recipes, it can also craft some of the items unique to Thaumaturgy. To do that you need to place a wand in the top-right slot. This will allow you to craft items that require vis by drawing the energy directly from the wand.<br>The vis required to craft an item will be shown in the six circular symbols surrounding the crafting grid."
	},
	
	{
		name: "Research Table",
		lore: "To gather knowledge",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: {
			Research_Table: "http://puu.sh/4JTE8.jpg"
		},
		nature: "Research Interface",
		video: "",
		description: "The research table is created by placing two tables next to each other and then clicking on them with the Scribing tools.<br>The research table is the most important tool for any thaumaturge. It is used to unlock all the hidden secrets of the universe and discover new ways of harnessing magic."
	},
	
	{
		name: "Arcane Stone",
		lore: "Magically strengthened building material",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: { 
			Arcane_Stone_Block: "http://puu.sh/4JWFv.jpg",
			Arcane_Stone_Brick: "http://puu.sh/4JWGo.jpg"
		},
		nature: "Magical building blocks",
		video: "",
		description: "Arcane stone is a basic building material for many complex mystical constructs. It is normal stone that has been seared by elemental fire and strengthened by elemental earth."
	},
	
	{
		name: "Paving Stone of Travel",
		lore: "Easing your journey",
		mod: "thaumcraft",
		aspects: [ "Iter", "Terra", "Volatus" ],
		requirements: [ "artifice:Arcane Stone" ],
		recipes: { 
			Paving_Stone_of_Travel: "http://puu.sh/4Krob.jpg"
		},
		nature: "Speed Boost Blocks",
		video: "",
		description: "By altering the magical structure of arcane stone you are able to creature a paving stone that adds new bounce to the step of anyone walking across it. Anything walking across it will have greater speed and agility for a couple of seconds."
	},
	
	{
		name: "Paving Stone of Warding",
		lore: "Keeping things out",
		mod: "thaumcraft",
		aspects: [ "Bestia", "Motus", "Vinculum" ],
		requirements: [ "artifice:Arcane Stone" ],
		recipes: {
			Paving_Stone_of_Warding: "http://puu.sh/4Krob.jpg"
		},
		nature: "Mob Blocker",
		video: "",
		description: "You have discovered a way of turning arcane stone blocks into mystical wards that will prevent most creatures from crossing them.<br>It should be noted that these wards aren't always 100% fool proof and they cannot prevent other players from entering an area, but they keep most of common threats at bay. They will also prevent golems from crossing them.<br>For best results you need an unbroken line of them between the area you wish to protect and the outside world.<br>An active redstone signal will disable this block."
	},
	
	{
		name: "Enchanted Fabric",
		lore: "Silky and Stylish",
		mod: "thaumcraft",
		aspects: [ "Pannus", "Praecantatio" ],
		requirements: [],
		recipes: { 
			Enchanted_Fabric: "http://puu.sh/4KrFC.jpg",
			Thaumaturges_Robe: "http://puu.sh/4KrGF.jpg",
			Thaumaturges_Leggings: "http://puu.sh/4KrHH.jpg",
			Thaumaturges_Boots: "http://puu.sh/4KrII.jpg"		
		},
		nature: "Enchanted Crafting Material and Armor",
		video: "",
		description: "By combining spider silk and woll and infusing it with primal vis, you have created a silky length of magical cloth that would have numerous uses.<br>You have also discovered patterns to create cloth robes from the magical fabric. These robes have similar protective properties to leather armor, but they are much more durable than mundane materials could ever be.<br>They also hold mystical enchantments very well and can hold powerful magic much better than even expensive armor.<br>The various pieces of this outfit grant a small discount to the amount of vis drained ffrom casting wands when you use them.<br>You can dye the armor like you would leather armor."
	},
	
	{
		name: "Infernal Furnace",
		lore: "Hot enough?",
		mod: "thaumcraft",
		aspects: [ "Auram", "Fabrico", "Ignis", "Metallum" ],
		requirements: [],
		recipes: { 
			Infernal_Furnace: "http://puu.sh/4KlP8.jpg"
		},
		nature: "Magical Furnace",
		video: "",
		description: "By harnessing raw Ignis within a furnace crafted from obsidian and netherbrick you have creatured a highly efficient and fuel free furnace. So efficient in fact that occassionally it will produce bonus materials in the form of nuggets or other items.<br>While this is essentially free it is also very slow unless the furnace gets a new supply of Ignis essentia every now and again. This can be done by placing a jar of Ignis essentia within line of sight of the front of the furnace, somewhere within 10 blocks. Luckily a little essentia goes a long way.<br>It should also be noticed that the occasional bit of Flux escapes into the environment.<br>Items you wish to smelt needs to be dropped into the top of the furnace and will be spit out the front."
	},
	
	{
		name: "Arcane Bellows",
		lore: "Stoking the Flames",
		mod: "thaumcraft",
		aspects: [ "Aer", "Machina", "Motus" ],
		requirements: [ "artifice:Infernal Furnace" ],
		recipes: {
			Arcane_Bellows: "http://puu.sh/4Kmcx.jpg"
		},
		nature: "Furnace Upgrade",
		video: "",
		description: "The Arcane Bellows performs much the same function as its mundane counterpart, the only difference is that it happily pumps away by itself sending fourth a stream of neverending air.<br>Attaching it to an Infernal Furnace has shown some interesting results. The elemental infused air not only stokes the flames increasing its smelting speed, but causes them to burn much purer, resulting in a reduction of flux generated and increasing the chance of creating bonus nuggets and other materials when smelting.<br>They can also be attached to normal or alchemical furnaces to increase their speed.<br>It is also possible to attach them to crucibles to reduce the time it takes for their water to boil.<br>You are confident more uses will reveal themselves eventually."
	},
	
	{
		name: "Arcane Levitator",
		lore: "Next best thing to flying",
		mod: "thaumcraft",
		aspects: [ "Aer", "Motus", "Volatus" ],
		requirements: [ "alchemy:Nitor" ],
		recipes: {
			Arcane_Levitator: "http://puu.sh/4KqqU.jpg"
		},
		nature: "Entity Propeller",
		video: "",
		description: "While not true flight, the Arcane Levitator is the next best thing. When placed the levitator lifts any items or creature above it up to 10 blocks in the air. A sneaking creature or player will be slowly lowered.<br>Each levitator placed upon another increases the range at which it can lift entities by 10 blocks, so a stack of 3 can lift entities up to 30 blocks.<br>Levitatos can be deactivated by applying a redstone signal to them."
	},
	
	{
		name: "Goggles of Revealing",
		lore: "Seeing the Unseen",
		mod: "thaumcraft",
		aspects: [ "Auram", "Sensus" ],
		requirements: [ "artifice:Thaumometer" ],
		recipes: { 
			Goggles_of_Revealing: "http://puu.sh/4NjhE.jpg"
		},
		nature: "Wearable Thaumometer",
		video: "",
		description: "Building on the basic principles of the Thaumometer, you have begun refining it's ability to detect magic into something more... revealing.<br>This set of mystical lenses will make aura nodes much easier to find along with revealing all manner of hidden things.<br>They form an important tool in any Thaumaturgist's arsenal."
	},
	
	{
		name: "Arcane Ears",
		lore: "Shhh, do you hear something?",
		mod: "thaumcraft",
		aspects: [ "Aer", "Potentia", "Sensus" ],
		requirements: [ "artifice:Goggles of Revealing" ],
		recipes: { 
			Arcane_Ear: "http://puu.sh/4SmOE.jpg"
		},
		nature: "Redstone Receiver",
		video: "",
		description: "The Arcane Ear is a device that is capable of detecting the sound emitted from nearby note blocks. If it hears a note it recognizes it will emit a short redstone pulse.<br>The Arcane Ear needs to be tuned in a manner identical to note blocks, the tone and note it listens for depends on the material it is placed upon."
	},
	
	{
		name: "Infusion",
		lore: "Mystical Infusion",
		mod: "thaumcraft",
		aspects: [ "Fabrico", "Machina", "Praecantatio" ],
		requirements: [ "alchemy:Essentia Distillation" ],
		recipes: { 
			Runic_Matrix: "http://puu.sh/4KVpz.jpg",
			Arcane_Pedestal: "http://puu.sh/4KVr1.jpg",
			Mystical_Construct: "http://puu.sh/4KVrZ.jpg"
		},
		nature: "Advanced Magical Crafting",
		video: "",
		description: "Arcane crafting and alchemy can go only so far. Something better is needed to create truely powerful mystical objects.<br>Infusion crafting is the process of infusing a single object with magical energy and the properties of other objects. You could, for example, unfuse a stone with aer is and a feather and it would result in a very light stone.<br>As is usual with thaumaturgy, things are not quite that simple. To even get started with infusion crafting there are several things you need: A Runic Matrix, arcane pedestals and a steady supply of magic in the form of essentia.<br>Once you have your Runic Matrix properly placed into a structure commonly known as an Infusion Altar, you can begin to craft.<br>The central pedestal located under the matrix is where the item you wish to infuse will go.<br>You will also need several more pedestals placed around the altar where you can place the blocks and items you wish to infuse into the target object. Lastly you will need warded jars or similar essentia containers holding the requisite amount of vis.<br>Once all this is gathered you can click on the Runic Matrix with a wand to start the crafting process.<br>During the first stage of crafting essentia will be drained from nearby sources. Crafting will stall of there is insuficient essentia available - something that you do not want as will be explained in the following pages.<br>Once all the required essentia has been infused into the target object the other subjects will have their essential essence drained. Only when this is done will the crafting complete.<hr>Infusion crafting is not without risks. The entire process involves forcing vast energies into a single object. Unpredictable things tend to happen.<br>Usually one of the fusion objects get knocked off a pedestal, or flux gets generated, but more catastrophic events are not unheard of.<br>The longer crafting continue due to unresolved problems like lack of vis or dropped items, the greater the chance of something bad happening.<br>These effects can be reduced by various means. Firstly you wish to keep the entire fusion structure as symmetrical as possible - take careful note of where you place pedestals and make sure they are balanced with other pedestals on the opposite side of the alter. When placing fusion items on them you may wish to keep them balanced as well. Lastly you can place occult paraphernalia around the alter in symmetrical formations (things like candles, skulls, crystals, etc.) . These will have the effect of reducing instability. ​<br> <img src = 'http://puu.sh/4KVmp.jpg'>"
	},
	
	{
		name: "Boots of the Traveller",
		lore: "These boots were made for walking",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Iter", "Terra", "Volatus" ],
		requirements: [ "artifice:Infusion", "artifice:Enchanted Fabric" ],
		recipes: { 
			Boots_of_the_Traveller: "http://puu.sh/5iFyZ.jpg"
		},
		nature: "Speed Boost Boots",
		video: "",
		description: "This pair of enchanted boots have been stuffed full of magic to ease the journey of any traveller.<br>They allow you to move faster than normal. They also allow you to jump higher and fall further.<br>Lastly they will allow you to cut through water like a fish. A slow a clumsy fish, but a fish nonetheless."
	},
	
	{
		name: "Sword of the Zephyr",
		lore: "Angry Winds",
		mod: "thaumcraft",
		aspects: [ "Aer", "Potentia", "Telum" ],
		requirements: [ "artifice:Infusion", "alchemy:Thaumium" ],
		recipes: { 
			Sword_of_the_Zephyr: "http://puu.sh/4Ng3a.jpg"
		},
		nature: "Elemental Sword",
		video: "",
		description: "You have merged the elemental fury of air shards with a thaumium sword.<br>When used to strike a foe, the blade will sweep in a wide arc, hitting additional foes near you main target.<br>While blocking the sword will conjure a sphere of whirling winds around you, pushing enemies and loose objects away and deflecting incoming projectiles.<br>While blocking it will also slowly lift you into the air."
	},
	
	{
		name: "Axe of the Stream",
		lore: "Rivers of wood",
		mod: "thaumcraft",
		aspects: [ "Aqua", "Instrumentum", "Motus" ],
		requirements: [ "artifice:Infusion", "alchemy:Thaumium" ],
		recipes: { 
			Axe_of_the_Stream: "http://puu.sh/4NglM.jpg"
		},
		nature: "Elemental Axe",
		video: "",
		description: "By combining water shards and a thaumium axe, you have created a tool that embodies the aspects of motion and flow.<br>It functions like a normal axe on all materials except natural logs and trees. When used on them the axe seeks to furthest block of the same type that is still connected to the block you are attempting to hartvest and harvests that one instead.<br>In effect you will chop trees from the top down even if you hit the bottom-most block."
	},
	
	{
		name: "Shovel of the Earthmover",
		lore: "Shifting Earth",
		mod: "thaumcraft",
		aspects: [ "Fabrico", "Instrumentum", "Terra" ],
		requirements: [ "artifice:Infusion", "alchemy:Thaumium" ],
		recipes: { 
			Shovel_of_the_Earthmover: "http://puu.sh/4Ngvv.jpg"
		},
		nature: "Elemental Shovel",
		video: "",
		description: "Combining earth shards with a thaumium shovel you have created a peerless digging implement.<br>When used to dig earth, sand and similar materials it will dig a 3x3 area.<br>If you right click on the side of a block, it will attempt to place a 3x3 section of the same material in the world so long as you have sufficient blocks in your inventory.<br>The orientation of both the digging and construction depends on the face you dug or clicked.<br>If shift is held while using this tool all its special properties are suspended and it functions like a normal shovel."
	},
	
	{
		name: "Pickaxe of the Core",
		lore: "Purifying Heat",
		mod: "thaumcraft",
		aspects: [ "Ignis", "Instrumentum", "Sensus" ],
		requirements: [ "artifice:Infusion", "alchemy:Thaumium" ],
		recipes: { 
			Pickaxe_of_the_Core: "http://puu.sh/4Nh22.jpg"
		},
		nature: "Elemental Pickaxe",
		video: "",
		description: "By infusing a thaumium pickaxe with fire shards, you have created a pickaxe that glows with the heat of a forge.<br>When you mine ore blocks there is a chance that you will mine a cluster instead. Native clusters are much easier to process and produces double the normal amount of metal when smelted.<br>It can also be use to sound out any furface you right click against to find out what valuable materials can be found nearby.<br>If shift is held while using this tool all its special properties are suspended and it functions like a normal pickaxe."
	},
	
	{
		name: "How of Growth",
		lore: "Balance of Nature",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Messis", "Victus" ],
		requirements: [ "artifice:Infusion", "alchemy:Thaumium" ],
		recipes: { 
			Hoe_of_Growth: "http://puu.sh/4NgQV.jpg"
		},
		nature: "Elemental Hoe",
		video: "",
		description: "By merging the magical energy from order and entropy shards with a thaumium hoe, you have created a farming implement with few equals.<br>When used to till fields, it will till a 3x3 area instead of just a single block.<br>When used to crops or other plants it will act as bonemeal to promote it's growth, though at a higher cost to it's durability. It might even be able to grow plants that normal bonemeal can't.<br>If shift is held using this tool, all it's special properties are suspended and it functions like a normal hoe."
	},

	{
		name: "Arcane Bore",
		lore: "Mining evolved",
		mod: "thaumcraft",
		aspects: [ "Instrumentum", "Machina", "Motus", "Perfodio" ],
		requirements: [ "thaumaturgy:Wand Focus: Excavation", "artifice:Infusion" ],
		recipes: { 
			Arcane_Bore: "http://puu.sh/4NhwW.jpg",
			Arcane_Bore_Base: "http://puu.sh/4NhyO.jpg"
		},
		nature: "Magic Mini-Quarry",
		video: "",
		description: "You have discovered a device capable of extending the range and power of an Excavation focus. Of even greater use is the fact that the machine can do so without your constant supervision. You merely need to place it on a specially constructed base, point it in the right direction with a wand and apply a redstone signal.<br>The arcane bore requires two things to function. The first is an excavation focus placed in it's leftmost inventory slot. Any enchantments applied to the focus will also alter the functions of the bore.<br>Secondly you need to place any kind of pickax to the rightmost slot. The material of the pickaxe will have little effect on the operation of the bore, but the greater its durability, the longer it will last. Like the wand, any enchantments or special abilities of the pickax will also be applied to whatever the bore mines.<br>Placing a jar of periditio essentia somewhere behind the bore (within 5 blocks) will greatly speed up the rate in which it mines.<br>An arcane bor can only be placed above or below an arcane bore base. Any items mined will be ejected from the base in the direction its nozzle is pointing.<br>It will eject into an inventory if possible. This direction can be changed with a wand."
	},
	
	{
		name: "Thaumostatic Harness",
		lore: "Is it a bird...",
		mod: "thaumcraft",
		aspects: [ "Aer", "Iter", "Machina", "Volatus" ],
		requirements: [ "artifice:Boots of the Traveller" ],
		recipes: { 
			Thaumostatic_Harness: "http://puu.sh/4Ni1e.jpg"
		},
		nature: "Magic Jetpack",
		video: "",
		description: "You have finally managed to unlock the secret of flight. You have created a harness that anchors itself into the Thaumic Field using thaumostatic energy allowing you to defy gravity. You think quantum's and quarks might also be involved somehow.<br>Unusually the only vis required to power this harness is added during it's creation process. Instead the fuel it requires for flight is Potentia. Simply right click while holding the harness to insert filled jars.<br>Double tapping space while wearing the harness activates it.<br>While active the harness will constantly use Potentia.<br>It can be enchanted with the Haste enchant to increase the speed at which you move while flying."
	},
	
	{
		name: "Mirror Magic",
		lore: "Through the looking glass",
		mod: "thaumcraft",
		aspects: [ "Alienis", "Iter", "Tenebrae", "Vitreus" ],
		requirements: [ "artifice:Infusion" ],
		recipes: { 
			Mirrored_Glass: "http://puu.sh/4NisN.jpg",
			Magic_Mirror: "http://puu.sh/4Nitx.jpg"
		},
		nature: "Item Teleportation",
		video: "",
		description: "You are now able to enchant a pair of magical mirrors what act as doorways to the void between the worlds. Anything shoved through the one mirrir will pass through this realm and exit through the other mirror - even across dimensional bounderies.<br>Unfortunately this realm is extremely hostile to mortal creatures like yourself so using these mirrors to transport living creatures is not yet visible.<br>To link a pair of these magical mirrors you simply need to place one of them in a desired location. you then right click with a second mirror on the one you placed, and the pair will become linked. You may then place the second wherever you wish and items thrown into one will be ejected out the other.<br>Mirrors can only be linked in pairs, so while both are placed in the world and able to transmit items you cannot link them to another mirror. When you pick up the mirror it will remember the last partner it was linked with, allowing you to easily move it without having to relink it. However while one of the paired mirrors is picked up, you may easily relink either of them."
	},
	
	{
		name: "Magical Hand Mirror",
		lore: "Personal Reflection",
		mod: "thaumcraft",
		aspects: [ "Alienis", "Iter", "Instrumentum", "Vitreus" ],
		requirements: [ "artifice:Mirror Magic" ],
		recipes: { 
			Magical_Hand_Mirror: "http://puu.sh/4NiN1.jpg"
		},
		nature: "Handheld Item Teleportation",
		video: "",
		description: "This magical hand mirror funcitons much the same way as other magical mirrors, you simply push items through the glass and they will pop out the linked mirror.<br>Simple right-click while holding the linked hand mirror and you will be able to place any items in your inventory into the looking glass to have them transported.<br>The hand mirror can be linked to a mirror that is already paired with another.<br>It should be noted that the hand mirror can only send items, not recieve them."
	},
	
	{
		name: "Brain in a Jar",
		lore: "Sealing in the foulness",
		mod: "thaumcraft",
		aspects: [ "Cognitio", "Exanimis" ],
		requirements: [ "artifice:Infusion" ],
		recipes: { 
			Brain_in_a_Jar: "http://puu.sh/4Nj7b.jpg"
		},
		nature: "EXP Sponge",
		video: "",
		description: "<b>This entry is found in the Enchanting catagory when Thaumic Tinkerer is installed</b><p>- Throw one rotten zombie brain into a jar.<br>- Add some spider eyes and water.<br>- Stir gently with your wand while thinking dark thoughts.<br>If you follow the recipe exactly you should now have a partially animated and fully malicious zombie brain.<br>It retains some of the hunger it possessed as a zombie and while it cannot consume brains, it still enjoys eating the thoughts and experiences of those slain nearby. Giving its jar a good shake will make it surrender some of its ill-gotten gains for your own use."
	},
	
	{
		name: "Salis Mundus",
		lore: "Just a pinch",
		mod: "thaumcraft",
		aspects: [],
		requirements: [],
		recipes: { 
			Salis_Mundus: "http://puu.sh/5fwc8.jpg",
			Salus_Mundus_Alternative_Recipe: "http://puu.sh/5fwrP.jpg"
		},
		nature: "Magical Crafting Material",
		video: "",
		description: "Salis Mundus, or Thaumaturge's Salt as it is more commonly known, is crafted by crushing vis crystals and mixing them with substances naturally rich in magic.<br>Like its mundane counterpart, Thaumaturge's salt adds flavour (metaphorically speaking) to any magical recipe or formula. It is a strong binding agent, able to hold the most disparate of magical elements together.<br>There are several substances that can be mixed with the crushed crystals to create Salis Mundus."
	},
	
	{
		name: "Arcane Lamp",
		lore: "Large source of light",
		mod: "thaumcraft",
		aspects: [ "Lux", "Sensus", "Tenebrae" ],
		requirements: [ "alchemy:Nitor", "artifice:Infusion" ],
		recipes: { 
			Arcane_Lamp: "http://puu.sh/5fxhk.jpg"
		},
		nature: "Large Light Source",
		video: "",
		description: "This mystical lamp can be attached to walls, floors or ceilings and will provide strong and steady light.<br>Additional sources of light may also appear up to 16 blocks away wherever light levels fall below accepted 'safe' levels. Remember: Only YOU can prevent zombie outbreaks. These secondary sources of light will disappear soon after the lamp has been removed.<hr>You are sure additional uses for this lamp will present itself, so remember to check here after making discoveries.<p><u>Arcane Bore</u><br>When attached to the base of an arcane bore, the arcane lamp gains an additional ability: It will draw Lux essentia from a nearby source to light up the tunnel that the bore digs. A single point of lux creates a single point of light. These sources of light will not dissapear after the lamp has been removed."
	},
	
	{
		name: "Lamp of Growth",
		lore: "Encouraging things to grow",
		mod: "thaumcraft",
		aspects: [ "Herba", "Lux", "Victus" ],
		requirements: [ "artifice:Arcane Lamp" ],
		recipes: { 
			Lamp_of_Growth: "http://puu.sh/5riIi.jpg"
		},
		nature: "Plant Grower",
		video: "",
		description: "Unlike the Arcane lap from which it is made, the lamp of Growth does not catch much light unless it is provided with Herba essentia. If this is done any plants which grow where its light shines the brightest will grow much faster than normal.<br>Essentia can be fed to the lamp either by placing a jar nearby, or attacking the lamp directly to an essentia piping system. The pipes are slightly more efficient and will make a single point of essentia last about 10% longer."
	},
	
	{
		name: "Infusion Enchantment",
		lore: "Enchanting with Essentia",
		mod: "thaumcraft",
		aspects: [ "Cognitio", "Instrumentum", "Praecantatio", "Telum", "Tutamen" ],
		requirements: [ "artifice:Infusion" ],
		recipes: {},
		nature: "Alternative Enchanting Method",
		video: "",
		description: "<b>This entry is found in the Enchanting catagory when Thaumic Tinkerer is installed</b><p><a href = 'http://bit.ly/17PR9Iw'>Enchanting Recipes</a> <b>/</b> <a href = 'http://bit.ly/1akRr7O'>Essentia and Level Cost per Enchant</a><p>For ages now wizards and thaumaturges have been enchanting weapons, tools and armor by imbueing objects with their own life energy. While effective, the process is tedious and the results are completely unpredictable. Your discovery of infusion crafting might have uncovered a solution to both problems.<br>You have discovered a way to enchant objects with an infusion altar. Simply place the item you wish to enchant on the central pedestal and supply the proper ingredients and essentia.<br>It also requires some life essense in the form of experience, but much less than would be normally required to enchant something. This experience is drawn from anyone near the infusion altar so care should be taken.<br>The essentia and experience costs listed in following recipes are for the first level of enchantment. To enchant an item to higher levels, simply perform the infusion process again - it can be repeated till the required enchantment has reached it's maximum possible level. Essentia and experience cost are multiplied by the level of enchantment you are performing, so a level II enchantment costs twice as much as a level I.<br>Additional costs might is also required if the item already contains enchants other than the one you are currently performing. This cost is usually around 10% per level of enchantment. So enchanting a sword with Fire Aspect that already contains Smite III will cost 30% more.<br>Instability also increases as the total number of enchantments on the object increases.<br>Enchanting items with an infusion altar follows the normal rules for enchantment as it applies to what enchants can combine with others."
	},
	
	{
		name: "Smokey Quartz",
		lore: "Shadow of the Day",
		mod: "thaumic_tinkerer",
		aspects: [],
		requirements: [],
		recipes: { 
			Smokey_Quartz: "http://puu.sh/4U5H1.jpg",
			Smokey_Quartz_Block: "http://puu.sh/4U5HW.jpg",
			Smokey_Quartz_Slab: "http://puu.sh/4U5J6.jpg",
			Smokey_Quartz_Pillar: "http://puu.sh/4U5K5.jpg",
			Smokey_Quartz_Chiseled: "http://puu.sh/4U5Lx.jpg",
			Smokey_Quartz_Stairs: "http://puu.sh/4U5Mx.jpg"
		},
		nature: "Decorative Block/Item",
		video: "",
		description: "Smokey Quartz is pretty much Quartz, but negative. All regular blocks that can be made with quartz, can also be made with smokey quartz, and they look black.<br>Smokey Quartz itself can be made with a piece of coal or charcoal for tinting, and a few pieces of regular nether quartz."
	},
	
	{
		name: "Talisman of Remedium",
		lore: "Mitsukake's Gift",
		mod: "thaumic_tinkerer",
		aspects: [ "Ordo", "Sano", "Venenum" ],
		requirements: [ "artifice:Enchanted Fabric" ],
		recipes: { 
			Talisman_of_Remedium: "http://puu.sh/56xG3.jpg"
		},
		nature: "Debuff Dispeller",
		video: "",
		description: "You have studied life and the body and found that through the application of magic you can protect yourself from harmful outside influences by redirecting these effects to a construct. This talisman will dispell most harmful effects on the holder and keep them on itself, taking damage.<br>To enable or disable this ability, one would shift-right click on it. As expeced, it only works whilst enabled."
	},
	
	{
		name: "Kinetic Attraction",
		lore: "How do they work?",
		mod: "thaumic_tinkerer",
		aspects: [ "Machina", "Motus", "Sensus" ],
		requirements: [ "thaumaturgy:Wand Focus: Telekinesis" ],
		recipes: { 
			Kinetic_Attractor: "http://puu.sh/4TZOO.jpg",
			Corporeal_Attractor: "http://puu.sh/4TZQ0.jpg",
			Soul_Mould: "http://puu.sh/4TZR9.jpg"
		},
		nature: "Magnet",
		video: "",
		description: "Working with the telekinesis focus, you managed to apply this knowledge to create a device to attract items or living beings like a magnet.<br>These two blocks have two states, north (red) and south (blue), in north it'll push items, or entities away; in south mode it'll pull them in.<br>You designed two devices. The Kinetic and Corporeal Attractors, these, respectively affect items and living beings.<br>The Corporeal Attractor involves some more complex mechanisms, to which you can access by right clicking it with a casting want. Using a Soul Mould, you can right click on a mob to save it as a pattern, which you can set in the attractor's interface, as a filter, along with settings for child or adult animals, if available."
	},
	
	{
		name: "Transvector Interface",
		lore: "Not affiliated with nyuu",
		mod: "thaumic_tinkerer",
		aspects: [ "Ordo", "Perditio" ],
		requirements: [ "artifice:Arcane Stone" ],
		recipes: { 
			Transvector_Interface: "http://puu.sh/4U5kR.jpg",
			Transvector_Binder: "http://puu.sh/4U5lD.jpg"
		},
		nature: "Wireless Interface Extention",
		video: "",
		description: "''The thing is, there's only six sides to a block...'' - Direwolf20<br>Myth = Busted! Your latest construct can be bound to a block in the nearby vicinity. It's sides will mimic the sides of the block selected, and it'll function as an extension. It can accept BuildCraft and IC2 power, items, and liquids, being able to also export the latter two.<br>In order to bind an interface to another block, you need to create a special tool to do so. What you call the Transvector Binder should get the job done.<br>By simply right clicking on the interface followed by a right clicking on the target, these two get bound and ready for operation. (Note: buildcraft pipes need to be broken and replaced to work)"
	},
	
	{
		name: "Transvector Dislocator",
		lore: "No Blood Magic required",
		mod: "thaumic_tinkerer",
		aspects: [ "Alienis", "Iter", "Machina" ],
		requirements: [ "artifice:Transvector Interface" ],
		recipes: { 
			Transvector_Dislocator: "http://puu.sh/5tp10.jpg"
		},
		nature: "Block Swapper",
		video: "",
		description: "By studying motion, you managed to create a block that swaps two blocks in space.<br>This block acts like a Transvector Interface, where it must be bound to another location in space using a Transvector Binder, you can get the direction it's faceing with a wand, and when a redstone signal is applied, the dislocator will swap the block in front of it with the block linked to using the binder. It also transports any and all entities in those areas.<br>It can be camouflaged similarly to the Transvector Interface. it has a longer range than it. 16 blocks."
	},
	
	{
		name: "Helmet of Revealing",
		lore: "This is why I can't use photoshop",
		mod: "thaumic_tinkerer",
		aspects: [ "Auram", "Tutamen" ],
		requirements: [ "artifice:Goggles of Revealing", "alchemy:Thaumium" ],
		recipes: { 
			Helmet_of_Revealing: "http://puu.sh/5tplq.jpg"
		},
		nature: "Goggle/Helmet Combo!",
		video: "",
		description: "As it turns out, goggles don't offer much protection from attacking zombies. You think you have a fix for that though. By strapping goggles of revealing onto a thaumium helmet, you can get the benefits of both. Well it turns out it is a bit more complicated than that. A bit of magic is required to avoid feedback loops, and a bit of magic to avoid feedback loops, and a bit of magic to keep them from slipping off, but on the whole, it more or less works."
	},
	
	{
		name: "Cursed Spirit's Blade",
		lore: "You're being unpleasant",
		mod: "thaumic_tinkerer",
		aspects: [ "Corpus", "Fames", "Spiritus", "Telum" ],
		requirements: [ "artifice:Infusion" ],
		recipes: { 
			Cursed_Spirits_Blade: "http://puu.sh/5tpGZ.jpg"
		},
		nature: "Self-Sacrifice Weapon",
		video: "",
		description: "You created a sword that strikes with unparalleled force, However, for this to be the case, the sword feeds on the striker's blood.<br>Upon damaging anything with this sword, the attacked will take one heart of damage. Blocking with this sword will always deal only 1.5 hearts, regardless of the original damage.<br>Furthermore, simply holding this sword gives the holder a steadfast aura, making them move faster than normal."
	},
	
	{
		name: "Magical Storage",
		lore: "Enchanting your Containers",
		mod: "better_storage",
		aspects: [ "Permutatio", "Praecantatio", "Vacuos" ],
		requirements: [ "artifice:Enchanted Fabric", "alchemy:Thaumium" ],
		recipes: { 
			Thaumic_Backpack: "http://puu.sh/5IpdY.jpg",
			Reinforced_Thaumium_Chest: "http://puu.sh/5Ipip.jpg"
		},
		nature: "Thaumic Storage/Backpacks",
		video: "",
		description: "Infusing a backpack with magic and materials of magical nature will increase its overall durability and storage capacity. Thanks to the upgrade, it'll be able to accept enchantments more easily, including the repair enchantment. As long as the backpack has the repair enchantment, items inside it will be able to repair as well, at a slower rate.<br>A similar thing is possible with a reinforced iron chest and a bunch of thaumium, which will result in a more durable chest which can also store more items."
	},

];