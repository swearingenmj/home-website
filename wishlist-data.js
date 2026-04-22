const GIFT_NOTE = "If I've listed a specific brand, that's my preference — but otherwise, feel free to choose whatever you think is best!";

const WISHLIST_ROOMS = [

  // ── MAIN FLOOR ──────────────────────────────────────────────

  { name: "Foyer", floor: "Main Floor", items: [
    { name: "Key hooks or key bowl",        icon: "key",           url: "" },
    { name: "Shoe rack and/or mat",         icon: "footprints",    url: "" },
    { name: "Coat hooks or rack",           icon: "anchor",        url: "" },
  ]},

  { name: "Half Bath", floor: "Main Floor", items: [
    { name: "Bath mat",                     icon: "square-dashed", url: "" },
    { name: "Hand towels",                  icon: "shirt",         url: "" },
  ]},

  { name: "Fancy Room", floor: "Main Floor", items: [
    { name: "Wall art",                     icon: "image",         url: "" },
    { name: "Decorative tray",              icon: "square",        url: "" },
    { name: "Bud vase",                     icon: "flower-2",      url: "" },
    { name: "Bookends",                     icon: "book-open",     url: "" },
    { name: "Coasters",                     icon: "circle",        url: "" },
    { name: "Clock",                        icon: "clock",         url: "" },
    { name: "Linen throw",                  icon: "wind",          url: "" },
  ]},

  { name: "Dining Room", floor: "Main Floor", items: [
    { name: "Table runner",                 icon: "minus",         url: "" },
    { name: "Cloth napkins (set of 8)",     icon: "shirt",         url: "" },
    { name: "Candle holders",               icon: "flame",         url: "" },
  ]},

  { name: "Kitchen", floor: "Main Floor", items: [
    { name: "Box grater",                   icon: "grid-2x2",      url: "" },
    { name: "Microplane",                   icon: "minus",         url: "" },
    { name: "Silicone tongs",               icon: "grip",          url: "" },
    { name: "Slotted spoon",               icon: "utensils",      url: "" },
    { name: "Potato masher",               icon: "circle-dashed",  url: "" },
    { name: "Kitchen shears",              icon: "scissors",       url: "" },
    { name: "Dutch oven",                  icon: "flame",          url: "" },
    { name: "Oven mitts (2 pairs)",        icon: "hand",           url: "" },
    { name: "Dish towels (6+)",            icon: "shirt",          url: "" },
    { name: "Blendtec blender",            icon: "zap",            url: "" },
  ]},

  { name: "Breakfast Nook", floor: "Main Floor", items: [
    { name: "Placemats (set of 4)",        icon: "layout-grid",    url: "" },
    { name: "Salt and pepper shakers",     icon: "sparkles",       url: "" },
  ]},

  { name: "Screened Porch", floor: "Main Floor", items: [
    { name: "Outdoor rug",                 icon: "layout-grid",    url: "" },
    { name: "String lights",               icon: "lightbulb",      url: "" },
    { name: "Outdoor furniture cushions",  icon: "armchair",       url: "" },
  ]},

  { name: "Mud Room / Pantry", floor: "Main Floor", items: [
    { name: "Storage bins with lids",      icon: "archive",        url: "" },
    { name: "Label maker",                 icon: "tag",            url: "" },
    { name: "Broom (indoor)",              icon: "brush",          url: "" },
    { name: "Dustpan",                     icon: "trash-2",        url: "" },
  ]},

  { name: "Den", floor: "Main Floor", items: [
    { name: "Mesh wifi system",            icon: "wifi",           url: "" },
    { name: "Power strip with USB",        icon: "plug-zap",       url: "" },
    { name: "Surge protector",             icon: "zap-off",        url: "" },
    { name: "Extension cord with USB ports", icon: "plug",         url: "" },
  ]},

  { name: "Courtyard", floor: "Main Floor", items: [
    { name: "Outdoor furniture (table and chairs)", icon: "armchair", url: "" },
    { name: "Outdoor umbrella",            icon: "umbrella",       url: "" },
    { name: "Outdoor lighting",            icon: "sun",            url: "" },
    { name: "Outdoor rug",                 icon: "layout-grid",    url: "" },
    { name: "Planter pots",               icon: "flower-2",        url: "" },
  ]},

  { name: "Garage", floor: "Main Floor", items: [
    { name: "Screwdriver set",             icon: "screwdriver",    url: "" },
    { name: "Power drill bit set",         icon: "drill",          url: "" },
    { name: "Level",                       icon: "ruler",          url: "" },
    { name: "Stud finder",                 icon: "search",         url: "" },
    { name: "Utility knife",               icon: "pocket-knife",   url: "" },
    { name: "Adjustable wrench",           icon: "wrench",         url: "" },
    { name: "Pliers",                      icon: "grip-horizontal", url: "" },
    { name: "Hex key / Allen wrench set",  icon: "hexagon",        url: "" },
    { name: "Rubber mallet",               icon: "hammer",         url: "" },
    { name: "Hand saw",                    icon: "saw",            url: "" },
    { name: "Hacksaw",                     icon: "minus-square",   url: "" },
    { name: "Pry bar",                     icon: "bar-chart-2",    url: "" },
    { name: "Caulking gun",                icon: "pipette",        url: "" },
    { name: "Putty knife",                 icon: "slice",          url: "" },
    { name: "Staple gun",                  icon: "zap",            url: "" },
    { name: "Wire stripper",               icon: "cable",          url: "" },
    { name: "Voltage tester",              icon: "activity",       url: "" },
    { name: "Extension cord (big)",        icon: "plug",           url: "" },
    { name: "Ladder (6 ft step)",          icon: "align-vertical-justify-end", url: "" },
    { name: "Toolbox",                     icon: "briefcase",      url: "" },
    { name: "Picture hanging hardware",    icon: "frame",          url: "" },
    { name: "Wood glue",                   icon: "droplet",        url: "" },
    { name: "Super glue",                  icon: "droplet",        url: "" },
    { name: "Fire extinguisher",           icon: "fire-extinguisher", url: "" },
    { name: "First aid kit",               icon: "cross",          url: "" },
  ]},

  { name: "Front Yard / She Shed", floor: "Main Floor", items: [
    { name: "Garden hose and nozzle",      icon: "droplets",       url: "" },
    { name: "Shovel",                      icon: "shovel",         url: "" },
    { name: "Rake",                        icon: "combine",        url: "" },
    { name: "Broom (outdoor)",             icon: "brush",          url: "" },
    { name: "Snow shovel",                 icon: "snowflake",      url: "" },
    { name: "Ice scraper",                 icon: "wind",           url: "" },
    { name: "Wheelbarrow",                 icon: "shopping-cart",  url: "" },
    { name: "Weed trimmer",                icon: "scissors",       url: "" },
    { name: "Leaf blower",                 icon: "wind",           url: "" },
    { name: "Grill (gas)",                 icon: "flame",          url: "" },
    { name: "Grill tools",                 icon: "utensils",       url: "" },
    { name: "Grill cover",                 icon: "shield",         url: "" },
    { name: "Kiddie pool",                 icon: "waves",          url: "" },
  ]},

  // ── UPSTAIRS ────────────────────────────────────────────────

  { name: "Primary Suite", floor: "Upstairs", items: [
    { name: "Bed frame",                   icon: "bed",            url: "" },
    { name: "Mattress",                    icon: "bed-double",     url: "" },
    { name: "Mattress protector",          icon: "shield",         url: "" },
    { name: "Pillows (2)",                 icon: "cloud",          url: "" },
    { name: "Pillowcases",                 icon: "square",         url: "" },
    { name: "Fitted sheet",                icon: "layout-grid",    url: "" },
    { name: "Flat sheet",                  icon: "align-justify",  url: "" },
    { name: "Duvet or comforter",          icon: "layers",         url: "" },
    { name: "Duvet cover",                 icon: "layers-2",       url: "" },
    { name: "Extra blanket",               icon: "wind",           url: "" },
    { name: "Nightstands (2)",             icon: "package",        url: "" },
    { name: "Nightstand lamp (2)",         icon: "lamp",           url: "" },
    { name: "Dresser",                     icon: "boxes",          url: "" },
    { name: "Full-length mirror",          icon: "scan",           url: "" },
    { name: "Pureology shampoo",           icon: "droplets",       url: "" },
    { name: "Pureology conditioner",       icon: "droplets",       url: "" },
    { name: "Bath mat",                    icon: "square-dashed",  url: "" },
    { name: "Bath towels (4)",             icon: "shirt",          url: "" },
    { name: "Waterproof shower stool",     icon: "footprints",     url: "" },
  ]},

  { name: "The Sea Otter Room + The Grotto", floor: "Upstairs", items: [
    { name: "Bed frame (guest)",           icon: "bed",            url: "" },
    { name: "Mattress (guest)",            icon: "bed-double",     url: "" },
    { name: "Bedding set (guest)",         icon: "layers",         url: "" },
    { name: "Towels (guest bath)",         icon: "shirt",          url: "" },
    { name: "Bath mat (guest)",            icon: "square-dashed",  url: "" },
  ]},

  { name: "The Sea Horse Room", floor: "Upstairs", items: [
    { name: "Bed frame",                   icon: "bed",            url: "" },
    { name: "Mattress",                    icon: "bed-double",     url: "" },
    { name: "Bedding set",                 icon: "layers",         url: "" },
  ]},

  { name: "The Sea Turtle Room", floor: "Upstairs", items: [
    { name: "Bed frame",                   icon: "bed",            url: "" },
    { name: "Mattress",                    icon: "bed-double",     url: "" },
    { name: "Bedding set",                 icon: "layers",         url: "" },
  ]},

  { name: "The Siren Room + The Pearl", floor: "Upstairs", items: [
    { name: "Bed frame",                   icon: "bed",            url: "" },
    { name: "Mattress",                    icon: "bed-double",     url: "" },
    { name: "Bedding set",                 icon: "layers",         url: "" },
    { name: "Towels",                      icon: "shirt",          url: "" },
    { name: "Bath mat",                    icon: "square-dashed",  url: "" },
  ]},

  { name: "Office", floor: "Upstairs", items: [
    { name: "Desk chair (ergonomic)",      icon: "armchair",       url: "" },
    { name: "Cable management clips",      icon: "cable",          url: "" },
    { name: "Printer (used please)",       icon: "printer",        url: "" },
    { name: "Printer paper",              icon: "file",            url: "" },
    { name: "Highlighters",               icon: "highlighter",     url: "" },
    { name: "Stapler",                    icon: "paperclip",       url: "" },
    { name: "Sticky notes",               icon: "sticky-note",     url: "" },
    { name: "Notepad",                    icon: "notebook",        url: "" },
    { name: "Bookends",                   icon: "book-open",       url: "" },
    { name: "Power strip with USB",       icon: "plug-zap",        url: "" },
    { name: "Shredder",                   icon: "scissors",        url: "" },
  ]},

  // ── BASEMENT ────────────────────────────────────────────────

  { name: "The Kraken Room", floor: "Basement", items: [
    { name: "Bed frame (guest)",           icon: "bed",            url: "" },
    { name: "Mattress (guest)",            icon: "bed-double",     url: "" },
    { name: "Bedding set (guest)",         icon: "layers",         url: "" },
  ]},

  { name: "The Leviathan Room", floor: "Basement", items: [
    { name: "Bed frame",                   icon: "bed",            url: "" },
    { name: "Mattress",                    icon: "bed-double",     url: "" },
    { name: "Bedding set",                 icon: "layers",         url: "" },
  ]},

  { name: "Downstairs Bathroom (TBC)", floor: "Basement", items: [
    { name: "Bath mat",                    icon: "square-dashed",  url: "" },
    { name: "Towels",                      icon: "shirt",          url: "" },
    { name: "Shower curtain + liner",      icon: "columns-2",      url: "" },
  ]},

  { name: "Gym", floor: "Basement", items: [
    { name: "Yoga mat",                    icon: "minus",          url: "" },
    { name: "Resistance bands",            icon: "activity",       url: "" },
    { name: "Foam roller",                 icon: "circle",         url: "" },
    { name: "Gym floor tiles",             icon: "layout-grid",    url: "" },
  ]},

  { name: "Craft Room", floor: "Basement", items: [
    { name: "Storage bins with lids",      icon: "archive",        url: "" },
    { name: "Label maker",                 icon: "tag",            url: "" },
    { name: "Pegboard + hooks",            icon: "grid-2x2",       url: "" },
  ]},

  { name: "Laundry Room", floor: "Basement", items: [
    { name: "Stain remover stick (OxiClean gel stick only)", icon: "sparkles", url: "" },
    { name: "Drying rack",                 icon: "git-branch",     url: "" },
    { name: "Iron",                        icon: "zap",            url: "" },
    { name: "Ironing board",               icon: "minus",          url: "" },
    { name: "Clothespins",                 icon: "paperclip",      url: "" },
    { name: "Vacuum cleaner (canister)",   icon: "loader-circle",  url: "" },
    { name: "Mop and bucket",              icon: "droplets",       url: "" },
  ]},

  { name: "Storage Room / Basement Outdoor Storage", floor: "Basement", items: [
    { name: "Shop vacuum (wet/dry vac)",   icon: "circle-dot",     url: "" },
    { name: "Workbench or table",          icon: "table",          url: "" },
    { name: "Storage shelving",            icon: "layout-list",    url: "" },
  ]},

];