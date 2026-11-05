// All photos are free Unsplash License images, chosen from a contact sheet.
// The query string must match images.remotePatterns in next.config.ts.
const QUERY = "?auto=compress&fm=jpg&w=1600&q=75";

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  profile: string;
  page: string;
  position?: string;
};

function photo(
  id: string,
  alt: string,
  credit: string,
  profile: string,
  slug: string,
  position?: string,
): Photo {
  return {
    src: `https://images.unsplash.com/${id}${QUERY}`,
    alt,
    credit,
    profile: `https://unsplash.com/@${profile}?utm_source=maya_stone_fitness&utm_medium=referral`,
    page: `https://unsplash.com/photos/${slug}?utm_source=maya_stone_fitness&utm_medium=referral`,
    position,
  };
}

export const photos = {
  coachHero: photo(
    "photo-1683848644087-c3cb69b77d4f",
    "Personal trainer with a long braid standing with her arms crossed against a blue studio backdrop",
    "Brian Lawson",
    "visualartery",
    "a-woman-with-her-arms-crossed-posing-for-a-picture-rQsS4LugWsg",
    "50% 18%",
  ),
  coachIntro: photo(
    "photo-1683848644086-6bf35841913c",
    "Personal trainer smiling and holding her long braid while standing in front of a blue studio backdrop",
    "Brian Lawson",
    "visualartery",
    "a-woman-in-a-sports-bra-top-posing-for-a-picture-_es_4ZLAKeg",
    "50% 22%",
  ),
  coachAbout: photo(
    "photo-1683848644114-b6f10da3e9e1",
    "Personal trainer standing relaxed with her hands by her sides in front of a blue backdrop",
    "Brian Lawson",
    "visualartery",
    "a-woman-in-a-sports-bra-top-posing-for-a-picture-BcctfSl9bLM",
    "50% 22%",
  ),
  oneToOne: photo(
    "photo-1571019614242-c5c5dee9f50b",
    "Coach kneeling beside a client and guiding his position during a push-up on the gym floor",
    "Jonathan Borba",
    "jonathanborba",
    "woman-kneeling-beside-man-R0y_bEUjiOM",
    "50% 40%",
  ),
  online: photo(
    "photo-1758599879074-2795a1fa744d",
    "Woman sitting on a yoga mat in her living room following a workout on her laptop",
    "Vitaly Gariev",
    "silverkblack",
    "woman-exercising-on-yoga-mat-watching-laptop-7Kz3H4p_q64",
    "40% 50%",
  ),
  strength: photo(
    "photo-1574680088814-c9e8a10d8a4d",
    "Woman performing a controlled barbell curl in a dimly lit gym",
    "Sven Mieke",
    "sxoxm",
    "woman-in-black-sports-bra-EuwD039Svug",
    "50% 35%",
  ),
  conditioning: photo(
    "photo-1682531024622-e3eb89bc6fb9",
    "Woman skipping with a jump rope in a gym with dark blue walls",
    "Marvin Cors",
    "rizlas",
    "a-woman-standing-in-a-gym-holding-a-barbell-qEUYOK_cIV0",
    "50% 30%",
  ),
  run: photo(
    "photo-1631899560971-394ded28a80f",
    "Woman jogging along a lakeside path on a bright day",
    "Jeremy Stewart",
    "52visuals",
    "a-woman-running-down-a-road-next-to-a-lake-a3DjtwLJ-_Y",
    "55% 50%",
  ),
  dumbbell: photo(
    "photo-1683587023194-a24e5b6549b0",
    "Close view of a woman lifting a dumbbell with steady form in a dark gym",
    "SALAH PICTURES",
    "lamfissek",
    "a-woman-in-a-sports-bra-holding-a-dumb-OB1BfxwwBHA",
    "50% 40%",
  ),
  row: photo(
    "photo-1584380844320-f8296a04eabe",
    "Woman doing a single-arm dumbbell row with a flat back in a warmly lit gym",
    "Samuel Girven",
    "samuelgirven",
    "woman-in-gray-sports-bra-and-black-and-white-nike-shorts-doing-exercise-4Bp8v9A0zKw",
    "45% 40%",
  ),
  meal: photo(
    "photo-1543352632-5a4b24e4d2a6",
    "Three glass meal prep containers with rice, lentils, sweetcorn, tomatoes and cucumber",
    "Ella Olsson",
    "ellaolsson",
    "meal-prep-containers-with-healthy-food-lMcRyBx4G50",
  ),
  stretch: photo(
    "photo-1593431763017-c689a61b729a",
    "Woman in a grey vest stretching her hamstring on a mat after training",
    "Christina Moroz",
    "chrismoroz",
    "woman-stretching-leg-on-workout-mat-CBHwsbwpTKA",
    "50% 45%",
  ),
  studio: photo(
    "photo-1674834727206-4bc272bfd8da",
    "Quiet training studio with squat racks, benches and free weights",
    "Ambitious Studio / Rick Barrett",
    "weareambitious",
    "a-gym-with-a-row-of-exercise-equipment-03b61PY89hs",
  ),
} satisfies Record<string, Photo>;

/** One entry per photographer, for the footer credit line. */
export const photoCredits = Array.from(
  new Map(Object.values(photos).map((p) => [p.credit, p.profile])),
).map(([name, url]) => ({ name, url }));
