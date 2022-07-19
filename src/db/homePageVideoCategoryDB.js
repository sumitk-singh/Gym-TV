import { v4 as uuid } from "uuid";

import { cateChest, cateBiceps, cateShoulder, cateBack, cateTriceps, cateThai, cateAbs, cateDiet } from '../assets/images/videoCategoryThumbnail/index.js';


// home page video category db

const homePageVideoCategoryItems = [
    {
        _id: uuid(),
        "thumbnail": cateChest,
        "title": "Chest Workout",
        "videoSrc": "#url",
        "category": "abs workout"
    },

    {
        _id: uuid(),
        "thumbnail": cateBiceps,
        "title": "Biceps Workout",
        "videoSrc": "#url",
        "category": "abs workout"
    },

    {
        _id: uuid(),
        "thumbnail": cateShoulder,
        "title": "Shoulder Workout",
        "videoSrc": "#url",
        "category": "abs workout"
    },

    {
        _id: uuid(),
        "thumbnail": cateBack,
        "title": "Back Workout",
        "videoSrc": "#url",
        "category": "abs workout"
    },

    {
        _id: uuid(),
        "thumbnail": cateTriceps,
        "title": "Triceps Workout",
        "videoSrc": "#url",
        "category": "abs workout"
    },

    {
        _id: uuid(),
        "thumbnail": cateThai,
        "title": "Thai Workout",
        "videoSrc": "#url",
        "category": "abs workout"
    },

    {
        _id: uuid(),
        "thumbnail": cateAbs,
        "title": "Abs Workout",
        "videoSrc": "#url",
        "category": "abs workout"
    },

    {
        _id: uuid(),
        "thumbnail": cateDiet,
        "title": "Diet Guide",
        "videoSrc": "#url",
        "category": "abs workout"
    },
]

export default homePageVideoCategoryItems;

// -----end of home page video category db-----


