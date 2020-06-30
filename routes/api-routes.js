const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout)
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout)
        }).catch(err => {
            res.status(400).json(err)
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.insertMany(req.body).then(function (dbWorkout) {
            res.json(dbWorkout)
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: { exercises: req.body }
            }).then(function (dbWorkout) {
                res.json(dbWorkout)
            }).catch(err => { res.status(400).json(err) })
    });
};