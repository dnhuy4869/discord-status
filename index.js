const axios = require("axios");

const timer = ms => new Promise(res => setTimeout(res, ms));

const token = "NjA4MjI1MTY2OTY2Nzg0MDAx.YnJFcg.HOTPtMiNqkFwjFXiNOS8bNvhFMY";
const delayTime = 3000;

const random = [
    {
        statusText: "league of legends time",
        iconID: "688793966832779324"
    },
    {
        statusText: "everyone everyone",
        iconID: "667743534778155008"
    },
    {
        statusText: "hmmmmmmmmmm",
        iconID: "864606442521362452"
    },
    {
        statusText: "hope hope hope",
        iconID: "910926667738927146"
    },
];

var index = 0;
var length = random.length - 1;

const main = async () => {
    while (true) {

        const data = {
            custom_status: {
                text: random[index].statusText,
                expires_at: null,
                emoji_id: random[index].iconID
            }
        }

        try {
            const response = await axios.patch(
                `https://discordapp.com/api/v6/users/@me/settings`,
                data, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.error("Error when send message");
        }

        index++;
        if (index > length) {
            index = 0;
        };

        await timer(delayTime);
    }
}

main();