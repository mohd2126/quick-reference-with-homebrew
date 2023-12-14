data_action = [
    {
        title: "Attack [C]",
        icon: "crossed-swords",
        subtitle: "Melee or ranged attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "PHB, pgs. 192,194-195. + Homebrew",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
            "[Homebrew] Two-Weapon Fighting: <br> When you take the attack action and attack with a light melee weapon that you are holding in one hand, as part of that action you can make one additional attack with a different light melee weapon that you are holding in the other hand. <br>You do not add your ability modifier to the damage of the second light weapon, unless that modifier is negative. <br>If either weapon has the thrown property, you can throw the weapon instead of making a melee attack with it.",
            "[Homebrew] Power Attack:<br>  When you use the <b>attack action</b> to make a melee weapon attack using a weapon or unarmed strike, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
        ]
    },
    {
        title: "Grapple [C]",
        icon: "grab",
        subtitle: "Special melee attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB, pg. 195. + Homebrew",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them. <br> The target of your grapple must be no more than one size larger than you, and it must be within your reach. <br> Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). <br> If you succeed, you subject the target to the grappled condition (its speed is set to 0).",
            "[Homebrew] Special grapples:<br> Special Grapples are grapples and other physical interactions that are supposed to accomplish things such as: silencing a spellcaster by holding their mouth shut, disarming someone, choking someone until they are unconscious and so on. For these special interactions that can have far greater effects than the grappled condition, the following rules apply:<br> <br>The target of your special grapple must be no more than one size larger than you and must be within your reach. As an action, you try to seize the target and inflict a certain condition or achieve a certain effect by making a grapple check, roll a Strength (Athletics) check with disadvantage contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check with advantage (the target chooses the ability to use). If you succeed, you subject the target to the desired condition or achieve the desired effect. Whether you can use this action against a target and whether you need one or two free hands depends on the anatomy of the target and your size relative to it.",
            "[Homebrew] When one creature is grappling a target and another creature tries to move the target out of reach either by grappling it and moving away or shoving, the outcome is determined not just by a contested check between the second creature and the target, but also by a contested Athletics check between the first and the second creature."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Special melee attack",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them. <br> The target of your shove must be no more than one size larger than you, and it must be within your reach. <br> You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). <br> If you win the contest, you either knock the target prone or push it 5 feet away from you.",
            "<b>Shove Aside:</b><br>With this option, a creature uses the special shove attack from the Player's Handbook to force a target to the side, rather than away. The attacker has disadvantage on its Strength (Athletics) check when it does so. If that check is successful, the attacker moves the target 5 feet to a different space within its reach."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with your action and a different spell with your bonus action in the same turn, except if the bonus action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Increase movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "dodging",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip (1,5,10) or unequip (1,1,5)."
        ]
    },
    {
        title: "Hide",
        icon: "hooded-figure",
        subtitle: "",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration",
            "Homebrew: you can use your action on subsequent turns to continue holding a spell or action that you readied"
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10 <br> On a success, the creature is stable and no longer needs to make death saving throws <br> A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise [C]",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure.",
            "How I'd rule it:<br>1. Does your creative action cost you anything? The more resources you spend as a character and the more effort you put into it as a player the more likely it is that a non-standard action will work.<br> 2. Is your creative action the new optimal thing to do all the time? Consider if your creative action would severely impact the balance of the game.<br>3.Is your creative action still fun if the enemies use it against you? Imagine what the impact in your play experience would be, if NPCs used your own creative tactics against you."
        ]
    },
    {
        title: "Defend the Fallen [N]",
        icon: "surrounded-shield",
        subtitle: "Defend a fallen ally",
        reference: "Homebrew",
        bullets: [
            "While within 5 feet of a prone or unconscious creature, you can take an action to force all attacks made against it to target you instead. This lasts until you are incapacitated, or more than 5 feet away from the protected creature."
        ]
    },
    {
        title: "Climb onto a Bigger Creature [C]",
        icon: "mammoth",
        subtitle: "Climb on creature two sizes larger",
        reference: "DMG, pg. 271. + Homebrew",
        bullets: [
            "It is possible for a creature to climb another creature that is two or more sizes larger than it. In this case the opponent can be treated as terrain for the purpose of jumping onto its back or clinging to a limb. The smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target's Dexterity (Acrobatics) check. If the smaller creature uses other methods to get on top of the larger creature, like teleportation or jumping on top of it from a higher position, then it can make the contested check without having to use an action.",
            "If it wins the contest, the smaller creature successfully moves into the target creature's space. The smaller creature moves with the target and has advantage on attack rolls against it. The smaller creature can move around within the larger creature's space, treating the space as difficult terrain. The larger creature's ability to attack the smaller creature depends on the smaller creature's location, and is left to the DMs discretion. The larger creature can dislodge the smaller creature as an action—knocking it off, scraping it against a wall, or grabbing and throwing it—by making a Strength (Athletics) check contested by the smaller creature's Strength (Athletics) or Dexterity (Acrobatics) check. The smaller creature chooses which ability to use."
        ]
    },
    {
        title: "Charge",
        icon: "charging-bull",
        subtitle: "Run at full speed and attack",
        reference: "DMG, pg. 271. + Homebrew",
        bullets: [
            "you can use your action, bonus action and your full movement to move up to twice your speed in a straight line and make a single melee attack."
        ]
    }
]
