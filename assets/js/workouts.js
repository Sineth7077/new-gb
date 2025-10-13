document.addEventListener("DOMContentLoaded", function () {
    // Base URL for images - update this to match your actual hosting location
    const imageBaseUrl = "assets/images/";
    
    // Alternative: If images are in your local assets folder, use:
    // const imageBaseUrl = "assets/images/workouts/";
    
    // Fully curated offline dataset with corrected image paths
    const exercises = [
        // Full Body
        { name: "Burpees", sets: "3x12", bodyPart: "Full Body", equipment: "No Equipment", img:`full-body/burpee.jpg`},
        { name: "Dumbbell Thruster", sets: "3x12", bodyPart: "Full Body", equipment: "Dumbbells", img: `full-body/dumbbell-thruster.webp`},
        { name: "Resistance Band Deadlift", sets: "3x15", bodyPart: "Full Body", equipment: "Resistance Bands", img: `full-body/resistance-band-deadlift.webp`},
        { name: "Yoga Sun Salutation", sets: "3x1 min", bodyPart: "Full Body", equipment: "Yoga Mat", img: `full-body/yoga-sun-salutation.jpg`},
        { name: "Kettlebell Swing", sets: "3x15", bodyPart: "Full Body", equipment: "Kettlebells", img:`full-body/kettlebell-swing.webp`},

        // Upper Body
        { name: "Push-ups", sets: "3x12", bodyPart: "Upper Body", equipment: "No Equipment", img: `upper-body/Push-ups.webp`},
        { name: "Dumbbell Bench Press", sets: "3x12", bodyPart: "Upper Body", equipment: "Dumbbells", img: `upper-body/dumbbell-bench-press.webp`},
        { name: "Resistance Band Row", sets: "3x12", bodyPart: "Upper Body", equipment: "Resistance Bands", img: `upper-body/resistance-band-row.webp`},
        { name: "Yoga Plank Variations", sets: "3x30 sec", bodyPart: "Upper Body", equipment: "Yoga Mat", img: `upper-body/yoga-plank-variations.jpg`},
        { name: "Kettlebell Shoulder Press", sets: "3x12", bodyPart: "Upper Body", equipment: "Kettlebells", img: `upper-body/kettlebell-shoulder-press.jpg`},

        // Lower Body
        { name: "Squats", sets: "3x15", bodyPart: "Lower Body", equipment: "No Equipment", img: `lower-body/squats.webp`},
        { name: "Dumbbell Lunges", sets: "3x12", bodyPart: "Lower Body", equipment: "Dumbbells", img: `lower-body/dumbbell-lunges.webp`},
        { name: "Resistance Band Side Steps", sets: "3x15", bodyPart: "Lower Body", equipment: "Resistance Bands", img: `lower-body/resistance-band-side-walk.webp`},
        { name: "Yoga Chair Pose", sets: "3x30 sec", bodyPart: "Lower Body", equipment: "Yoga Mat", img: `lower-body/yoga-chair-pose.webp`},
        { name: "Kettlebell Goblet Squat", sets: "3x12", bodyPart: "Lower Body", equipment: "Kettlebells", img: `lower-body/kettlebell-goblet-squat.webp`},

        // Core
        { name: "Plank", sets: "3x30 sec", bodyPart: "Core", equipment: "No Equipment", img: `core/plank-endomondo.jpg`},
        { name: "Dumbbell Russian Twist", sets: "3x20", bodyPart: "Core", equipment: "Dumbbells", img: `core/kettlebell-russian-twist.webp`},
        { name: "Resistance Band Crunch", sets: "3x15", bodyPart: "Core", equipment: "Resistance Bands", img: `core/resistance-band-crunch.webp`},
        { name: "Yoga Boat Pose", sets: "3x30 sec", bodyPart: "Core", equipment: "Yoga Mat", img: `core/yoga-Boat-Pose.webp`},
        { name: "Kettlebell Windmill", sets: "3x12", bodyPart: "Core", equipment: "Kettlebells", img: `core/kettlebell-windmill.webp`},

        // Arms
        { name: "Tricep Dips", sets: "3x12", bodyPart: "Arms", equipment: "No Equipment", img: `arms/tricep-dips.webp`},
        { name: "Bicep Curls", sets: "3x12", bodyPart: "Arms", equipment: "Dumbbells", img: `arms/bicep-curls.webp`},
        { name: "Resistance Band Curl", sets: "3x15", bodyPart: "Arms", equipment: "Resistance Bands", img: `arms/resistance-band-curl.webp`},
        { name: "Yoga Arm Balance", sets: "3x30 sec", bodyPart: "Arms", equipment: "Yoga Mat", img: `arms/yoga-arm-balance.jpg`},
        { name: "Kettlebell Arm Press", sets: "3x12", bodyPart: "Arms", equipment: "Kettlebells", img: `arms/kettlebell-arm-press.webp`},

        // Legs
        { name: "Lunges", sets: "3x12", bodyPart: "Legs", equipment: "No Equipment", img: `legs/Lunges.png`},
        { name: "Dumbbell Step-ups", sets: "3x12", bodyPart: "Legs", equipment: "Dumbbells", img: `legs/dumbbell-step-ups.webp`},
        { name: "Resistance Band Kickbacks", sets: "3x15", bodyPart: "Legs", equipment: "Resistance Bands", img: `legs/resistance-band-kickbacks.jpg`},
        { name: "Yoga Warrior Pose", sets: "3x30 sec", bodyPart: "Legs", equipment: "Yoga Mat", img: `legs/yoga-warrior-pose.webp`},
        { name: "Kettlebell Deadlift", sets: "3x12", bodyPart: "Legs", equipment: "Kettlebells", img: `legs/kettlebell-deadlift.webp`}
    ];

    const generateBtn = document.querySelector(".btn-generate");
    const resultsContainer = document.getElementById("workout-results");
    const bodyPartSelect = document.getElementById("body-part");
    const equipmentSelect = document.getElementById("equipment");

    generateBtn.addEventListener("click", () => {
        const bodyPart = bodyPartSelect.value;
        const equipment = equipmentSelect.value;

        // Filter exercises
        let filtered = exercises.filter(ex => ex.bodyPart === bodyPart && ex.equipment === equipment);
        if (filtered.length === 0) {
            filtered = exercises.filter(ex => ex.bodyPart === bodyPart);
        }
        if (filtered.length === 0) {
            // If still none, pick random exercises
            filtered = exercises.sort(() => 0.5 - Math.random()).slice(0, 3);
        }

        // Clear previous results
        resultsContainer.innerHTML = "";
        resultsContainer.classList.remove("hidden");

        // Render exercises
        filtered.forEach(ex => {
            const card = document.createElement("div");
            card.className = "exercise-card bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500";

            card.innerHTML = `
                <div class="flex flex-col md:flex-row md:items-center gap-6">
                    <img src="${ex.img}" alt="${ex.name}" class="w-full md:w-48 h-48 object-cover rounded-lg" 
                         onerror="this.src='assets/images/logo.png'; this.onerror=null;">
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <h4 class="text-xl font-bold text-gray-800">${ex.name}</h4>
                            <span class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">${ex.bodyPart}</span>
                        </div>
                        <p class="text-gray-600 mt-2">${ex.sets}</p>
                        <div class="mt-4 flex items-center space-x-4">
                            <button class="start-timer flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                                <i data-feather="play" class="w-4 h-4 mr-2"></i> Start
                            </button>
                            <button class="stop-timer flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition hidden">
                                <i data-feather="square" class="w-4 h-4 mr-2"></i> Stop
                            </button>
                            <div class="timer-display text-gray-500 font-mono">00:00</div>
                        </div>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(card);

            // Timer functionality
            const startBtn = card.querySelector(".start-timer");
            const stopBtn = card.querySelector(".stop-timer");
            const timerDisplay = card.querySelector(".timer-display");
            let timer = null;
            let seconds = 0;

            startBtn.addEventListener("click", () => {
                startBtn.classList.add("hidden");
                stopBtn.classList.remove("hidden");
                if (timer) clearInterval(timer);
                timer = setInterval(() => {
                    seconds++;
                    let mins = Math.floor(seconds / 60);
                    let secs = seconds % 60;
                    timerDisplay.textContent = `${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
                }, 1000);
            });

            stopBtn.addEventListener("click", () => {
                stopBtn.classList.add("hidden");
                startBtn.classList.remove("hidden");
                clearInterval(timer);
            });
        });

        // Refresh Feather icons
        feather.replace();
    });
});