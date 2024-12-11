const aircraftData = {
    "VT-RIA": { weight: 432.45, arm: 1.843, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RIB": { weight: 433.45, arm: 1.85, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RBD": { weight: 435.2, arm: 1.856, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RBX": { weight: 416.45, arm: 1.89, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RBY": { weight: 420.95, arm: 1.893, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RBR": { weight: 432.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RFG": { weight: 431.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RBS": { weight: 433.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RBU": { weight: 431.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RBJ": { weight: 427.45, arm: 1.84, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RFZ": { weight: 434.0, arm: 1.857, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72 },
    "VT-RFH": { weight: 453.45, arm: 1.738, pilotArm: 1.804, copilotArm: 1.804, fuelArm: 2.139, fuelMultiplier: 0.72},
    "VT-RFI": { weight: 454.45, arm: 1.726, pilotArm: 1.804, copilotArm: 1.804, fuelArm: 2.139, fuelMultiplier: 0.72},
    "VT-RFJ": { weight: 454.45, arm: 1.73, pilotArm: 1.804, copilotArm: 1.804, fuelArm: 2.139, fuelMultiplier: 0.72},
    "VT-RFK": { weight: 460.45, arm: 1.74, pilotArm: 1.804, copilotArm: 1.804, fuelArm: 2.139, fuelMultiplier: 0.72},
    "VT-RFL": { weight: 454.45, arm: 1.73, pilotArm: 1.804, copilotArm: 1.804, fuelArm: 2.139, fuelMultiplier: 0.72},
    "VT-RFS": { weight: 458.4, arm: 1.726, pilotArm: 1.804, copilotArm: 1.804, fuelArm: 2.139, fuelMultiplier: 0.72},
    "VT-RFO": { weight: 457.1, arm: 1.725, pilotArm: 1.804, copilotArm: 1.804, fuelArm: 2.139, fuelMultiplier: 0.72},
    "VT-CAQ": { weight: 849.27, arm: 103.81, pilotArm: 93.98, copilotArm: 93.98, fuelArm: 121.92, fuelMultiplier: 0.84 },
    "VT-CAY": { weight: 837.5, arm: 105.55, pilotArm: 93.98, copilotArm: 93.98, fuelArm: 121.92, fuelMultiplier: 0.84 },
    // Add new aircraft here easily
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
        const cg = totalMoment / totalWeight;

        // Update the results display
        document.getElementById("aircraftResult").innerHTML = `<td>Aircraft</td><td>${aircraftWeight.toFixed(2)}</td><td>${aircraftArm}</td><td>${aircraftMoment.toFixed(4)}</td>`;
        document.getElementById("pilotResult").innerHTML = `<td>Pilot</td><td>${pilotWeight.toFixed(2)}</td><td>${pilotArm}</td><td>${pilotMoment.toFixed(2)}</td>`;
        document.getElementById("copilotResult").innerHTML = `<td>Copilot</td><td>${copilotWeight.toFixed(2)}</td><td>${copilotArm}</td><td>${copilotMoment.toFixed(2)}</td>`;
        document.getElementById("fuelResult").innerHTML = `<td>Fuel</td><td>${fuelWeight.toFixed(2)}</td><td>${fuelArm}</td><td>${fuelMoment.toFixed(4)}</td>`;

        // For total results (footer row)
        document.getElementById("totalResult").innerHTML = `
            <td>Total</td><td>${totalWeight.toFixed(2)}</td><td></td><td>${totalMoment.toFixed(4)}</td>
            <tr><td colspan="4">CG: ${cg.toFixed(3)} m</td></tr>`;
        
    } catch (e) {
        document.getElementById("totalResult").innerText = e.message;
    }
}
