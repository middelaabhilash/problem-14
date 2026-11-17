# Fitness Tracker Problem

This project is a small JavaScript exercise built around an event-driven fitness tracker.

## Problem Statement

Create a `FitnessTracker` class that keeps track of total calories burned and raises a `goalReached` event when the user reaches or exceeds their fitness target.

### Requirements

- Start with:
  - `progress = 0`
  - `goal = 1000`
- Each exercise has a `caloriesBurned` value.
- When a user adds exercise data, the total progress should increase.
- If the progress was below the goal before the exercise and becomes equal to or greater than the goal after the exercise, the tracker should emit the event `goalReached`.
- A listener should respond when the goal is reached.

## Example Behavior

The sample code in `index.js` adds:

- Running: 500 calories
- Weightlifting: 600 calories

Total calories burned = 1100.

That means the tracker reaches the goal and prints:

```bash
Congratulations! You have reached your fitness goal.
```

## Project Files

- `index.js` — contains the main solution and demo code.
- `upload_project.js` — helper script for packaging the project and submitting it to the platform using a JWT token.
- `package.json` — Node.js project configuration and dependencies.

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Run the project:

```bash
node index.js
```

or:

```bash
npm start
```

## Important Note

`upload_project.js` is meant for submission to the coding platform and should not be modified unless required by the platform instructions.

## Summary

This is a beginner-friendly exercise to practice:

- JavaScript classes
- Event emitters
- State tracking
- Event-driven programming

The core idea is simple: keep updating progress, and when the user crosses the target, trigger a celebration event.
