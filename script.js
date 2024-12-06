const aircraftData = {
    "VT-RIA": { weight: 432.45, arm: 1.843 },
    "VT-RIB": { weight: 433.45, arm: 1.85 },
    "VT-RBD": { weight: 435.2, arm: 1.856 },
    "VT-RBX": { weight: 416.45, arm: 1.89 },
    "VT-RBY": { weight: 420.95, arm: 1.893 },
    "VT-RBR": { weight: 432.45, arm: 1.892 },
    "VT-RFG": { weight: 431.45, arm: 1.892 },
    "VT-RBS": { weight: 433.45, arm: 1.892 },
    "VT-RBU": { weight: 431.45, arm: 1.892 },
    "VT-CAQ": { weight: 849.27, arm: 103.81 },
    "VT-CAY": { weight: 837.5, arm: 105.55 },
};

// Default arms for Tecnam P2008JC
const defaultPilotArm = 1.8;
const defaultCopilotArm = 1.8;
const defaultFuelArm = 2.209;

document.getElementById('calculate-button').addEventListener('click', calculate);

function calculate() {
    try {
        const selectedAircraft = document.getElementById('aircraft-select').value;
        if (!selectedAircraft || !aircraftData[selectedAircraft]) {
            throw new Error("Please select a valid aircraft.");
        }

        const aircraft = selectedAircraft;
        const isCessna = ["VT-CAY", "VT-CAQ"].includes(aircraft);
        const aircraftWeight = aircraftData[aircraft].weight;
        const aircraftArm = aircraftData[aircraft].arm;
        const aircraftMoment = aircraftWeight * aircraftArm;

        // Set arms based on aircraft type
        const pilotArm = isCessna ? 93.98 : defaultPilotArm;
        const copilotArm = isCessna ? 93.98 : defaultCopilotArm;
        const fuelArm = isCessna ? 121.92 : defaultFuelArm;

        // Parse inputs, check for NaN
        const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
        const copilotWeight = parseFloat(document.getElementById("copilot-weight").value) || 0;
        const fuelLiters = parseFloat(document.getElementById("fuel-weight").value) || 0;

        if (isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(fuelLiters)) {
            throw new Error("Please enter valid weights.");
        }

        // Use appropriate fuel multiplier based on aircraft type
        const fuelMultiplier = isCessna ? 0.84 : 0.72;
        const fuelWeight = fuelLiters * fuelMultiplier;

        const pilotMoment = pilotWeight * pilotArm;
        const copilotMoment = copilotWeight * copilotArm;
        const fuelMoment = fuelWeight * fuelArm;

        const totalWeight = aircraftWeight + pilotWeight + copilotWeight + fuelWeight;
        const totalMoment = aircraftMoment + pilotMoment + copilotMoment + fuelMoment;
        const cg = totalMoment / totalWeight;

        // If Cessna, calculate additional Max All Up Weight and Moment
        let maxAllUpWeight, maxAllUpMoment, cessnaCG;
        if (isCessna) {
            maxAllUpWeight = totalWeight - 1;
            maxAllUpMoment = totalMoment - 121.92;
            cessnaCG = maxAllUpMoment / maxAllUpWeight;
        }

        // Update the results display
        document.getElementById("aircraftResult").innerHTML = `<td>Aircraft</td><td>${aircraftWeight.toFixed(2)}</td><td>${aircraftArm}</td><td>${aircraftMoment.toFixed(4)}</td>`;
        document.getElementById("pilotResult").innerHTML = `<td>Pilot</td><td>${pilotWeight.toFixed(2)}</td><td>${pilotArm}</td><td>${pilotMoment.toFixed(2)}</td>`;
        document.getElementById("copilotResult").innerHTML = `<td>Copilot</td><td>${copilotWeight.toFixed(2)}</td><td>${copilotArm}</td><td>${copilotMoment.toFixed(2)}</td>`;
        document.getElementById("fuelResult").innerHTML = `<td>Fuel</td><td>${fuelWeight.toFixed(2)}</td><td>${fuelArm}</td><td>${fuelMoment.toFixed(4)}</td>`;
        
        // For total results (footer row)
        let totalResults = `<td>Total</td><td>${totalWeight.toFixed(2)}</td><td></td><td>${totalMoment.toFixed(2)}</td>`;
        if (isCessna) {
            totalResults += `<tr><td colspan="4">Max AUW: ${maxAllUpWeight.toFixed(2)} kgs, Total Moment: ${maxAllUpMoment.toFixed(2)}, CG: ${cessnaCG.toFixed(3)} m</td></tr>`;
        } else {
            totalResults += `<tr><td colspan="4">CG: ${cg.toFixed(3)} m</td></tr>`;
        }
        document.getElementById("totalResult").innerHTML = totalResults;
        
    } catch (e) {
        document.getElementById("totalResult").innerText = e.message;
    }
}
