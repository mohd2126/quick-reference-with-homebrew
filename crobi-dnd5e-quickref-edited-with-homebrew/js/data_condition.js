data_condition = [
    {
        title: "Blinded",
        icon: "one-eyed",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Deafened",
        icon: "elf-ear",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Exhaustion [C]",
        icon: "despair",
        subtitle: "You are exhausted",
        description: "Exhaustion is measured in ten levels",
        reference: "OneDnD playtest",
        bullets: [
            "•	<b>Levels of Exhaustion.</b> This Condition is cumulative. Each time you receive it, you gain 1 level of exhaustion. You die if your exhaustion level exceeds 10.<br>•	<b>d20 Rolls Affected.</b> When you make a d20 Test (Attack Rolls, Ability Checks and Saving Throws), you subtract your exhaustion level from the d20 roll.<br>•	<b>Spell and Ability Save DCs Affected.</b> Whenever you force another creature to make a saving throw either with an ability or spell subtract your exhaustion level from the save DC.<br>•	<b>Speed Reduced.</b> When you reach 5 levels of exhaustion, your speed is halved; when you reach 8, your speed is zero.<br>•	<b>Ending the Condition.</b> Finishing a Long Rest removes 1 of your levels of exhaustion. When your exhaustion level reaches 0, you are no longer Exhausted."
        ]
    },
    {
        title: "Frightened",
        icon: "terror",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated. <br> The condition also ends if you are removed from the reach of your grappler.",
            "When one creature is grappling a target and another creature tries to move the target out of reach either by grappling it and moving away or shoving, the outcome is determined not just by a contested check between the second creature and the target, but also by a contested Athletics check between the first and the second creature."
        ]
    },
    {
        title: "Incapacitated [C]",
        icon: "egg-pod",
        subtitle: "Limited actions, no reactions",
        description: "Limited actions, no reactions",
        reference: "House Rules, combat rule 25",
        bullets: [
            "On your turn you can use either an action or a bonus action, not both. you can't use reactions.",
            "Regardless of your abilities or magic items you can't make more than a single attack during your turn.",
            "You have disadvantage on attack rolls.",
            "If you attempt to cast a spell with a casting time of 1 action roll a d20, On a 1-10 the spell is not cast, and the spell slot is wasted. On an 11-19 the spell doesn't take effect until your next turn and you must use your action on that turn to complete the spell, if you can't the spell is wasted. On a 20 the spell is cast normally."
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Paralyzed [C]",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "You can barely do anything",
        bullets: [
            "You are incapacitated, and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail all strength and dexterity based saves and checks."
        ]
    },
    {
        title: "Petrified",
        icon: "edge-crack",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Poisoned",
        icon: "poison-bottle",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "falling",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "handcuffs",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned [C]",
        icon: "surprised-skull",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "House Rules, combat rule 25",
        bullets: [
            "You are incapacitated, your speed is halved, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail all strength and dexterity based saves and checks."
        ]
    },
    {
        title: "Unconscious",
        icon: "sleepy",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    },
    {
        title: "Dying [C]",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "PHB, pg. 197. + Homebrew",
        bullets: [
            "If you are reduced to 0 hit points by lethal damage, you fall unconscious and are dying.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours.",
            "[Homebrew]:<br>When a player character reaches 0 hit points and becomes unstable because of it, they gain one level of exhaustion."
        ]
    },
    {
        title: "Dazed [N]",
        icon: "stoned-skull",
        subtitle: "You are dazed",
        description: "",
        reference: "Alex Mercer Homebrew",
        bullets: [
            "A dazed creature can't take reactions. Moreover, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three."
        ]
    },
    {
        title: "Slowed [N]",
        icon: "snail",
        subtitle: "You are slowed",
        description: "",
        reference: "Alex Mercer Homebrew",
        bullets: [
            "•	A slowed creature's speed is halved.<br>•	Attack Rolls against the creature have Advantage.<br>•	The creature has Disadvantage on Dexterity Saving Throws."
        ]
    }
]
