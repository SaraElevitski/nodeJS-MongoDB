require('dotenv').config();
const cors = require('cors');
const express = require('express');
const areaRouter = require('./api/router/areas.router.js');
const requestRouter = require('./api/router/requests.router.js');
const volunteerRouter = require('./api/router/volunteers.router.js');
const statusRouter = require('./api/router/statuses.router.js');
const priorityRouter = require('./api/router/priorities.router.js');
const reviewRouter = require('./api/router/reviews.router.js');

const app = express();

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;

// הוספה בשביל הפרונט- גישה
app.use(cors());

app.use(express.json());

app.use('/api/volunteers', volunteerRouter);
app.use('/api/requests', requestRouter);
app.use('/api/areas', areaRouter);
app.use('/api/statuses', statusRouter);
app.use('/api/priorities', priorityRouter);
app.use('/api/reviews', reviewRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.stack);
    res.status(statusCode).json({
        message: err.message || "שגיאה פנימית בשרת"
    })
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});