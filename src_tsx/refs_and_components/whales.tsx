export type WhaleProps = {
  id: string
  name: string
  about: string
  weight: number
}

export const whales: WhaleProps[] = [
  {
    id: "humpback",
    name: "Humpback Whale",
    about:
      "The humpback whale is a species of baleen whale. It is a rorqual and is the only species in the genus Megaptera. Adults range in length from 14-17m and weigh up to 40 metric tons. The humpback has a distinctive body shape, with long pectoral fins and a knobbly head.",
    weight: 30000,
  },
  {
    id: "narwhal",
    name: "Narwhal",
    about:
      'The narwhal, also known as a narwhale, is a medium-sized toothed whale that possesses a large "tusk" from a protruding canine tooth. It lives year-round in the Arctic waters around Greenland, Canada and Russia.',
    weight: 940,
  },
  {
    id: "skiller",
    name: "Skiller Whale",
    about:
      "The skiller whale, also known as Ada, is a species of sub-Arctic programmer. Known for its love of learning, the skiller whale is chiefly recognisable by its penchant for bad maritime puns.",
    weight: 3000,
  },
  {
    id: "blue",
    name: "Blue Whale",
    about:
      "The blue whale is a species of baleen whale. Reaching a maximum confirmed length of 29.9 meters (98 ft) and weighing up to 199 tonnes (196 long tons; 219 short tons), it is the largest animal known to have ever existed.",
    weight: 199000,
  },
  {
    id: "sperm",
    name: "Sperm Whale",
    about:
      "The sperm whale is the largest of the toothed whales and the largest toothed predator. Named after spermaceti, an oil collected from a gland in its head, used in candle and soap making and as a lubricant.",
    weight: 940,
  },
  {
    id: "orca",
    name: "Orca",
    about:
      "The orca, or killer whale, is a species of toothed whale, recognizable by its black-and-white patterned body.",
    weight: 3000,
  },
]
