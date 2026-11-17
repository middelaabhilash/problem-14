import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    const previousProgress = this.progress;
    this.progress += exercise.caloriesBurned;

    if (previousProgress < this.goal && this.progress >= this.goal) {
      this.emit("goalReached");
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  tracker.on("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal.");
  });

  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
