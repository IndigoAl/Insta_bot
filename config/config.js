module.exports = {
    // InstagramBot.js Configs
    "debug": true,
    "login": true,
    "ui": false, // only for social-manager-tools

    // Instagram Account
    "instagram_username": "colonial_airstream", // without @
    "instagram_password": "88lakewood88!!8",
    "instagram_hashtag": ["liveriveted", "airstream"], //without #
    "instagram_pin": "sms", //method to receive pin (email or sms)

    // BOT Configs
    // [WORK] likemode_classic          - select random hashtag from config list and like 1 random photo (of last 20) | 400-600 like/day.
    // [WORK] likemode_realistic        - select random hashtag from config list, like fast 10-12 photo and sleep 15-20min. Sleep at night
    // [WORK] likemode_superlike        - select random hashtag from config list and like 3 random photo of same user | 400-600 like/day.
    // [WORK] likemode_competitor_users - select account, select random followers, like 10-12 photo and sleep 15-20min.
    // [WORK] comment_mode              - leave a comment under the photo via hashtag.
    // [TODO] fdfmode_classic           - follow user from random hashtag and defollow after 1h | 300 follow-defollow/day.
    // [TODO] fdfmode_defollowall       - defollow all your following (not defollow users in whitelist) | 30 defollow/hour.
    "bot_mode": "likemode_realistic",
    "bot_likeday_min": 250,      // work only in likemode_classic
    "bot_likeday_max": 450,      // work only in likemode_classic. In 2018 limit instagram is 1000/day
    "bot_sleep_night": true,     // if you need stop bot in night 
    "bot_start_sleep": "7:00",   // sleep from 00:00 to 7:00 am, work in likemode_realistic, comment_mode, likemode_superlike and likemode_competitor_users
    "bot_fastlike_min": "15",    // min minutes of sleep after like 10-12 photo, work in likemode_realistic and likemode_superlike (superlike add 3 like/user, set 50min)
    "bot_fastlike_max": "20",    // max minutes of sleep after like 10-12 photo, work in likemode_realistic and likemode_superlike (superlike add 3 like/user, set 60min)
    "bot_superlike_n": 3,        // superlike number of likes for user
    "bot_followday": 80,        // follow-defollow user/day, work in fdfmode_classic and fdfmode_defollowall
    "bot_userwhitelist": [""],   // usernames without @ | don't defollow this users on follow-defollow mode, work in fdfmode_classic and fdfmode_defollowall
    "comment_mode": {
        "comments": {
            "type": "array",
            "source": [],
        }
    },
    "likemode_competitor_users": {
        "account": "", // without @
    },

    // Puppeteer Configs
    "chrome_headless": true,
    "chrome_options": ["--disable-gpu", "--no-sandbox", "--window-size=1920x1080"],
    "executable_path": "", // example for Mac OS: /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome

    // LOG
    "pin_path":"./loginpin.txt",
    "log_path":"./logs/debug.log",
    "logerr_path":"./logs/errors.log",
    "screenshot_path":"./logs/screenshot/",
    "log": {
        "drivers": ["console"], // slack or console
        "screenshot": false,  // disable or enable screenshot in logs folder
        "channels": {
            "console": "",
            "slack": {
                "webhook": ""
            }
        }
    }
};
