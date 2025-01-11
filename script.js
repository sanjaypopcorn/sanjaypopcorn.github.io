const aircraftData = {
    //JC
    "VT-RIA": { weight: 432.45, arm: 1.843, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RIB": { weight: 433.45, arm: 1.85, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBD": { weight: 435.2, arm: 1.856, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBI": { weight: 428.45, arm: 1.839, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBX": { weight: 416.45, arm: 1.89, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBY": { weight: 420.95, arm: 1.893, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBR": { weight: 432.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RFG": { weight: 431.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBS": { weight: 433.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBU": { weight: 431.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RBJ": { weight: 427.45, arm: 1.84, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RFZ": { weight: 434.0, arm: 1.857, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    //P-Mentor
    "VT-RFH": { weight: 453.45, arm: 1.738, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFI": { weight: 454.45, arm: 1.726, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFJ": { weight: 454.45, arm: 1.73, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFK": { weight: 460.45, arm: 1.74, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFL": { weight: 454.45, arm: 1.73, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFS": { weight: 458.4, arm: 1.726, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFO": { weight: 457.1, arm: 1.725, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFN": { weight: 456.4, arm: 1.728, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    //Cessna
    "VT-CAQ": { weight: 849.27, arm: 103.81, pilotArm: 93.98, copilotArm: 93.98, fuelArm: 121.92, fuelMultiplier: 0.84, type: "cessna" },
    "VT-CAY": { weight: 837.5, arm: 105.55, pilotArm: 93.98, copilotArm: 93.98, fuelArm: 121.92, fuelMultiplier: 0.84, type: "cessna" },
};

document.getElementById('calculate-button').addEventListener('click', calculate);

function calculate() {
    try {
        const selectedAircraft = document.getElementById('aircraft-select').value;
        if (!selectedAircraft || !aircraftData[selectedAircraft]) {
            throw new Error("Please select a valid aircraft.");
        }

        const aircraft = aircraftData[selectedAircraft];
        const aircraftWeight = aircraft.weight;
        const aircraftArm = aircraft.arm;
        const aircraftMoment = aircraftWeight * aircraftArm;

        // Use values directly from aircraftData
        const pilotArm = aircraft.pilotArm;
        const copilotArm = aircraft.copilotArm;
        const fuelArm = aircraft.fuelArm;
        const fuelMultiplier = aircraft.fuelMultiplier;

        // Parse inputs, check for NaN
        const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
        const copilotWeight = parseFloat(document.getElementById("copilot-weight").value) || 0;
        const fuelLiters = parseFloat(document.getElementById("fuel-weight").value) || 0;

        if (isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(fuelLiters)) {
            throw new Error("Please enter valid weights.");
        }

        const fuelWeight = fuelLiters * fuelMultiplier;

        const pilotMoment = pilotWeight * pilotArm;
        const copilotMoment = copilotWeight * copilotArm;
        const fuelMoment = fuelWeight * fuelArm;

        const totalWeight = aircraftWeight + pilotWeight + copilotWeight + fuelWeight;
        const totalMoment = aircraftMoment + pilotMoment + copilotMoment + fuelMoment;

        let displayedCG;
        let cessnaAUWMessage = "";

        if (aircraft.type === "cessna") { // Check if it's a Cessna aircraft
            const maxAllUpWeight = totalWeight - 1;
            const maxAllUpMoment = totalMoment - 121.92;
            const cessnaCG = maxAllUpMoment / maxAllUpWeight;
            displayedCG = `CG: ${cessnaCG.toFixed(3)}cm, Max AUW: ${maxAllUpWeight.toFixed(2)} kgs, Total Moment: ${maxAllUpMoment.toFixed(4)} ` ;
        } else {
            const cg = totalMoment / totalWeight;
            displayedCG = `CG: ${cg.toFixed(3)} m`;
        }

        // Update the results display
        document.getElementById("aircraftResult").innerHTML = `<td>Aircraft</td><td>${aircraftWeight.toFixed(2)}</td><td>${aircraftArm}</td><td>${aircraftMoment.toFixed(4)}</td>`;
        document.getElementById("pilotResult").innerHTML = `<td>Pilot</td><td>${pilotWeight.toFixed(2)}</td><td>${pilotArm}</td><td>${pilotMoment.toFixed(2)}</td>`;
        document.getElementById("copilotResult").innerHTML = `<td>Copilot</td><td>${copilotWeight.toFixed(2)}</td><td>${copilotArm}</td><td>${copilotMoment.toFixed(2)}</td>`;
        document.getElementById("fuelResult").innerHTML = `<td>Fuel</td><td>${fuelWeight.toFixed(2)}</td><td>${fuelArm}</td><td>${fuelMoment.toFixed(4)}</td>`;

        // For total results (footer row)
        document.getElementById("totalResult").innerHTML = `
            <td>Total</td><td>${totalWeight.toFixed(2)}</td><td></td><td>${totalMoment.toFixed(4)}</td>
            <tr><td colspan="4">${displayedCG}</td></tr>`;
        
    } catch (e) {
        document.getElementById("totalResult").innerText = e.message;
    }
}

