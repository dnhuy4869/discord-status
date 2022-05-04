const axios = require("axios");

const timer = ms => new Promise(res => setTimeout(res, ms));

const token = "NjA4MjI1MTY2OTY2Nzg0MDAx.YnE9sQ.IAP65W2H7rcXUTtSOCwDZFCEDFE";
const delayTime = 5000;

const random = [
    {
        statusText: "this is first message",
        iconID: "967299118710022204"
    },
    {
        statusText: "this is 2 message",
        iconID: "967299118710022204"
    },
    {
        statusText: "this is 3 message",
        iconID: "967299118710022204"
    },
    {
        statusText: "this is 4 message",
        iconID: "967299118710022204"
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

        var randomIndex = Math.floor(Math.random() * (length - 0 + 1)) + 0;
        while (randomIndex == index) {
            randomIndex = Math.floor(Math.random() * (length - 0 + 1)) + 0;
        }

        index = randomIndex;

        await timer(delayTime);
    }
}

main();