var research_enchanting = [

{
		name: "Infusion Enchantment",
		lore: "Enchanting with Essentia",
		mod: "thaumcraft",
		aspects: [ "Cognitio", "Instrumentum", "Praecantatio", "Telum", "Tutamen" ],
		requirements: [ "artifice:Infusion" ],
		recipes: {},
		nature: "Alternative Enchanting Method",
		video: "",
		description: "<b>This entry is found in the Artifice catagory if Thaumic Tinkerer isn't installed.</b><p><a href = 'http://bit.ly/17PR9Iw'>Enchanting Recipes</a> <b>/</b> <a href = 'http://bit.ly/1akRr7O'>Essentia and Level Cost per Enchant</a><p>For ages now wizards and thaumaturges have been enchanting weapons, tools and armor by imbueing objects with their own life energy. While effective, the process is tedious and the results are completely unpredictable. Your discovery of infusion crafting might have uncovered a solution to both problems.<br>You have discovered a way to enchant objects with an infusion altar. Simply place the item you wish to enchant on the central pedestal and supply the proper ingredients and essentia.<br>It also requires some life essense in the form of experience, but much less than would be normally required to enchant something. This experience is drawn from anyone near the infusion altar so care should be taken.<br>The essentia and experience costs listed in following recipes are for the first level of enchantment. To enchant an item to higher levels, simply perform the infusion process again - it can be repeated till the required enchantment has reached it's maximum possible level. Essentia and experience cost are multiplied by the level of enchantment you are performing, so a level II enchantment costs twice as much as a level I.<br>Additional costs might is also required if the item already contains enchants other than the one you are currently performing. This cost is usually around 10% per level of enchantment. So enchanting a sword with Fire Aspect that already contains Smite III will cost 30% more.<br>Instability also increases as the total number of enchantments on the object increases.<br>Enchanting items with an infusion altar follows the normal rules for enchantment as it applies to what enchants can combine with others."
	},
	
	{
		name: "Brain in a Jar",
		lore: "Sealing in the foulness",
		mod: "thaumcraft",
		aspects: [ "Cognitio", "Exanimis" ],
		requirements: [ "enchanting:Infusion Enchantment", "artifice:Infusion" ],
		recipes: { 
			Brain_in_a_Jar: "http://puu.sh/4Nj7b.jpg"
		},
		nature: "EXP Sponge",
		video: "",
		description: "<b>This entry is found in the Artifice catagory if Thaumic Tinkerer isn't installed.</b><p>- Throw one rotten zombie brain into a jar.<br>- Add some spider eyes and water.<br>- Stir gently with your wand while thinking dark thoughts.<br>If you follow the recipe exactly you should now have a partially animated and fully malicious zombie brain.<br>It retains some of the hunger it possessed as a zombie and while it cannot consume brains, it still enjoys eating the thoughts and experiences of those slain nearby. Giving its jar a good shake will make it surrender some of its ill-gotten gains for your own use."
	},
	
	{
		name: "Talisman of Withhold",
		lore: "I'll take your 'time'",
		mod: "thaumic_tinkerer",
		aspects: [ "Humanus", "Lucrum", "Praecantatio" ],
		requirements: [ "enchanting:Brain in a Jar", "artifice:Infusion"],
		recipes: { 
			Talisman_of_Withhold: "http://puu.sh/4U0nP.jpg"
		},
		nature: "Handheld EXP Sponge",
		video: "",
		description: "After knowing that Zombie Brains have the ability to store experience, you have created a talisman that mimics that behaviour, not to a perfect extent though.<br>To switch the ability to store experience, you need to shift-right-click on the talisman.<br>When the talisman is enabled, it'll absorb any nearby experience orbs, those can be transformed back into usable experience by right clicking with a glass bottle in your inventory, turning that bottle into a Bottle o' Enchanting."
	},
	
	{
		name: "Spellbinding Cloth",
		lore: "The sad palmtop thaumaturge",
		mod: "thaumic_tinkerer",
		aspects: [ "Pannus", "Praecantatio" ],
		requirements: [ "artifice:Enchanted Fabric" ],
		recipes: { 
			Spellbinding_Cloth: "http://puu.sh/4U0Jp.jpg"
		},
		nature: "Enchantment Remover",
		video: "",
		description: "By mixing some Enchanted Fabric with raw magic power, you created a cloth that can be rubbed on an item to wipe it of its enchantments by combining them in a Crafting Recipe."
	},
	
	{
		name: "Osmotic Enchanter",
		lore: "Picking your luck",
		mod: "thaumic_tinkerer",
		aspects: [ "Alienis", "Auram", "Cognitio", "Praecantatio", "Tenebrae" ],
		requirements: [ "basic:Research Mastery", "enchanting:Spellbinding Cloth" ],
		recipes: { 
			Osmotic_Enchanter: "http://puu.sh/4U19z.jpg"
		},
		nature: "Enchanting Plus",
		video: "",
		description: "You grew tired of getting terrible enchantments for your efforts. To that, you created a new enchantment table that allows you to pick what enchantments you want to apply to an item. This new contraption requires a wand, each enchantment requires a specific combination of vis from that want. The price of the enchantment is exponentially proportional to the level you want to apply.<br>Regular enchantment rules apply, for example, you can't combine silk touch with Fortune.<br>After you selected the enchantments you want on an item, clicking the red button on the interface will start the enchanting progress. As the item is being enchanted, you can't take it out of the table, nor can you change the enchantments you are putting on it.<br>The table will slowly drain vis from the wand, until it's done. For this to work, there needs to be 6 pillars in the nearby vicinity (4 blocks) these pillars need to be at the same level of the table.<br>the pillars need to be made of two to twelve obsidian totem blocks stacked on top of each other, with a piece of Nitor on top of them. The enchanter will get flux energy from them, grabbing vis from the wand and combining them to enchant the item."
	},
	
	{
		name: "Enchantment: Ascent Boost",
		lore: "Higher than a titan",
		mod: "thaumic_tinkerer",
		aspects: [ "Aer", "Motus", "Praecantatio" ],
		requirements: [ "enchanting:Osmotic Enchanter" ],
		recipes: {},
		nature: "Enchantment: Jump Boost",
		video: "",
		description: "You have formulated an enchantment that allows you to jump higher than you normally can.<br>This enchantment can be applied on leg armor. When done so, the wearer will be able to jump a lot higher than normal."
	},
	
	{
		name: "Enchantment: Slow Fall",
		lore: "M.A.G.E.",
		mod: "thaumic_tinkerer",
		aspects: [ "Aer", "Motus", "Praecantatio" ],
		requirements: [ "enchanting:Osmotic Enchanter" ],
		recipes: { },
		nature: "Enchantment: Fall Sword Reduction",
		video: "",
		description: "You have formulated an enchantment that allows you to fall slowly.<br>This enchantment can be applied on foot armor. When done so, the wearer will be able to shift click while falling to fall slower, also reducing, if not negating the fall damage."
	},
	
	{
		name: "Enchantment: Flaming Touch",
		lore: "Rekka Shinen!",
		mod: "thaumic_tinkerer",
		aspects: [ "Ignis", "Permutatio", "Praecantatio" ],
		requirements: [ "enchanting:Osmotic Enchanter" ],
		recipes: { },
		nature: "Enchantment: Wood Chopping Boost",
		video: "",
		description: "You have formulated an enchantment that allows you to summon imaginary flames.<br>This enchantment can be applied on tools. When done so,the wielder can break anything wooden with extreme finesse, by use of a flame that softens the wood through the breaking process, but never destroying or damaging it. However, the tool becomes impotent against anything else, and takes double durability damage."
	},
	
	{
		name: "Enchantment: Desintegrate",
		lore: "Spacequake Alert",
		mod: "thaumic_tinkerer",
		aspects: [ "Perditio", "Praecantatio", "Vacuos" ],
		requirements: [ "enchanting:Osmotic Enchanter" ],
		recipes: { },
		nature: "Enchantment: Mining Speed",
		video: "",
		description: "You have formulated an enchantment that allows you to mine soft materials at incredible speeds.<br>This enchantment can be applied on tools. When done so, the wielder can break regular blocks (dirt, stone, netherrack, etc.) that the tool is good for with extreme finesse, however, the tool becomes impotent against anything else, and takes double durability damage."
	},
	
	{
		name: "Enchantment: Quick Draw",
		lore: "Speedy Shot",
		mod: "thaumic_tinkerer",
		aspects: [ "Praecantatio", "Sensus", "Telum" ],
		requirements: [ "enchanting:Osmotic Enchanter" ],
		recipes: { },
		nature: "Enchantment: Draw Speed Boost",
		video: "",
		description: "You have formulated an enchantment that allows you to draw your bow in a quicker fashion.<br>This enchantment can be applied to bows. When done so, the bow can be fully drawn faster than normally."
	},
	
	{
		name: "Enchantment: Vampirism",
		lore: "I'll take that",
		mod: "thaumic_tinkerer",
		aspects: [ "Fames", "Praecantatio", "Telum" ],
		requirements: [ "enchanting:Osmotic Enchanter" ],
		recipes: { },
		nature: "Enchantment: Life Stealing",
		video: "",
		description: "You have formulated an enchantment that allows you to drain the health of the enemies you attack.<br>This enchantment can be applied on swords. When done so, a chunk of the damage dealt to a living thing using that sword will be given back to the wielder."
	},

];