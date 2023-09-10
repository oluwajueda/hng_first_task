const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const {slack_name, track} = req.query;

    const timeNow = new Date();

    const dateToday = timeNow.toLocaleDateString('en-US', {weekday: 'long'});
    const utcTime = timeNow.toISOString();

    const response = {
        slack_name,
        current_day: dateToday,
        utc_time: utcTime,
        track,
        github_file_url: 'https://github.com/oluwajueda/hng_first_task/blob/main/index.js',
        github_repo_url:'https://github.com/oluwajueda/hng_first_task',
        status_code: 200,
    }

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})