import { v4 as uuid } from "uuid";

import {bigArms, chestWorkout, shoulderWorkout, vCut, weightLift} from '../assets/images/videoThumbnail/index.js';

const mustWatchVideo = [
    {
        _id: uuid(),
        "thumbnail": vCut,
        "title": "V Cut Abs Workout For Ripped Obliques",
        "videoSrc": "https://youtu.be/exQav9l4tWY?list=PLQTn2Wq_N-Ry1l73NAFEnwk11QrTxacyo",
        "views": "1k",
        "xDaysAgo": "6",
        "category": "abs workout"
    },

    {

        _id: uuid(),
        "thumbnail": shoulderWorkout,
        "title": "4 Shoulder Exercises Beginners Should Avoid",
        "videoSrc": "https://youtu.be/H6J-MMzaSI8?list=PLQTn2Wq_N-Ry1l73NAFEnwk11QrTxacyo",
        "views": "2k",
        "xDaysAgo": "4",
        "category": "shoulder workout"
    },

    {

        _id: uuid(),
        "thumbnail": weightLift,
        "title": "STOP Doing Deadlifts Like This",
        "videoSrc": "https://youtu.be/viDEx8nyC70?list=PLQTn2Wq_N-Ry1l73NAFEnwk11QrTxacyo",
        "views": "3k",
        "xDaysAgo": "2",
        "category": "leg workout"

       
    },

    {
        _id: uuid(),
        "thumbnail": chestWorkout,
        "title": "6 Worst Chest Workout Mistakes",
        "videoSrc": "https://youtu.be/EaZbKtFrtnI?list=PLQTn2Wq_N-Ry1l73NAFEnwk11QrTxacyo",
        "views": "6k",
        "xDaysAgo": "12",
        "category": "chest workout"
        
    },

    {
        _id: uuid(),
        "thumbnail": bigArms,
        "title": "How To Get Bigger Arms Fast",
        "videoSrc": "https://youtu.be/Vmfw1K5P68c?list=PLQTn2Wq_N-Ry1l73NAFEnwk11QrTxacyo",
        "views": "7k",
        "xDaysAgo": "22",
        "category": "biceps workout"
    }
]

export default mustWatchVideo;
