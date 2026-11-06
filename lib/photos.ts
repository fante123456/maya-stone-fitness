// Free Unsplash License images, kept from the earlier design (step 1 changes text only).
// They are illustrations: none of them shows Hassane. Size and format are added
// per screen width by lib/unsplash-loader.ts.
import type { Lang } from "./i18n";

export type Photo = {
  src: string;
  alt: Record<Lang, string>;
  credit: string;
  profile: string;
  page: string;
  position?: string;
};

function photo(
  id: string,
  alt: Record<Lang, string>,
  credit: string,
  profile: string,
  slug: string,
  position?: string,
): Photo {
  return {
    src: `https://images.unsplash.com/${id}`,
    alt,
    credit,
    profile: `https://unsplash.com/@${profile}?utm_source=accro_temple_demo&utm_medium=referral`,
    page: `https://unsplash.com/photos/${slug}?utm_source=accro_temple_demo&utm_medium=referral`,
    position,
  };
}

export const photos = {
  coachHero: photo(
    "photo-1683848644087-c3cb69b77d4f",
    {
      fr: "Photo d'illustration : une sportive bras croisés devant un fond bleu",
      en: "Illustration photo: an athlete with her arms crossed in front of a blue backdrop",
    },
    "Brian Lawson",
    "visualartery",
    "a-woman-with-her-arms-crossed-posing-for-a-picture-rQsS4LugWsg",
    "50% 18%",
  ),
  coachIntro: photo(
    "photo-1683848644086-6bf35841913c",
    {
      fr: "Photo d'illustration : une sportive souriante devant un fond bleu",
      en: "Illustration photo: a smiling athlete in front of a blue backdrop",
    },
    "Brian Lawson",
    "visualartery",
    "a-woman-in-a-sports-bra-top-posing-for-a-picture-_es_4ZLAKeg",
    "50% 22%",
  ),
  coachAbout: photo(
    "photo-1683848644114-b6f10da3e9e1",
    {
      fr: "Photo d'illustration : une sportive debout devant un fond bleu",
      en: "Illustration photo: an athlete standing in front of a blue backdrop",
    },
    "Brian Lawson",
    "visualartery",
    "a-woman-in-a-sports-bra-top-posing-for-a-picture-BcctfSl9bLM",
    "50% 22%",
  ),
  oneToOne: photo(
    "photo-1571019614242-c5c5dee9f50b",
    {
      fr: "Une coach corrige la position d'un sportif pendant une pompe",
      en: "A coach correcting a man's position during a push-up",
    },
    "Jonathan Borba",
    "jonathanborba",
    "woman-kneeling-beside-man-R0y_bEUjiOM",
    "50% 40%",
  ),
  strength: photo(
    "photo-1574680088814-c9e8a10d8a4d",
    {
      fr: "Une sportive fait un curl à la barre dans une salle sombre",
      en: "A woman doing a barbell curl in a dimly lit gym",
    },
    "Sven Mieke",
    "sxoxm",
    "woman-in-black-sports-bra-EuwD039Svug",
    "50% 35%",
  ),
  conditioning: photo(
    "photo-1682531024622-e3eb89bc6fb9",
    {
      fr: "Une sportive saute à la corde dans une salle aux murs bleu foncé",
      en: "A woman skipping with a jump rope in a gym with dark blue walls",
    },
    "Marvin Cors",
    "rizlas",
    "a-woman-standing-in-a-gym-holding-a-barbell-qEUYOK_cIV0",
    "50% 30%",
  ),
  dumbbell: photo(
    "photo-1683587023194-a24e5b6549b0",
    {
      fr: "Gros plan sur une sportive qui soulève un haltère",
      en: "Close view of a woman lifting a dumbbell",
    },
    "SALAH PICTURES",
    "lamfissek",
    "a-woman-in-a-sports-bra-holding-a-dumb-OB1BfxwwBHA",
    "50% 40%",
  ),
  row: photo(
    "photo-1584380844320-f8296a04eabe",
    {
      fr: "Une sportive fait un rowing à un bras avec un haltère",
      en: "A woman doing a single-arm dumbbell row",
    },
    "Samuel Girven",
    "samuelgirven",
    "woman-in-gray-sports-bra-and-black-and-white-nike-shorts-doing-exercise-4Bp8v9A0zKw",
    "45% 40%",
  ),
  meal: photo(
    "photo-1543352632-5a4b24e4d2a6",
    {
      fr: "Trois boîtes repas avec riz, lentilles, maïs, tomates et concombre",
      en: "Three meal prep boxes with rice, lentils, sweetcorn, tomatoes and cucumber",
    },
    "Ella Olsson",
    "ellaolsson",
    "meal-prep-containers-with-healthy-food-lMcRyBx4G50",
  ),
  studio: photo(
    "photo-1674834727206-4bc272bfd8da",
    {
      fr: "Salle d'entraînement calme avec racks, bancs et poids libres",
      en: "Quiet training room with squat racks, benches and free weights",
    },
    "Ambitious Studio / Rick Barrett",
    "weareambitious",
    "a-gym-with-a-row-of-exercise-equipment-03b61PY89hs",
  ),
} satisfies Record<string, Photo>;

/** One entry per photographer, for the footer credit line. */
export const photoCredits = Array.from(
  new Map(Object.values(photos).map((p) => [p.credit, p.profile])),
).map(([name, url]) => ({ name, url }));
