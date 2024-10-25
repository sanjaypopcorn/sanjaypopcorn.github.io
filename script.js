const aircraftData = {
    "VT-RIA": { weight: 432.45, arm: 1.843 },
    "VT-RIB": { weight: 433.45, arm: 1.85 },
    "VT-RBD": { weight: 435.2, arm: 1.856 },
    "VT-RBX": { weight: 416.45, arm: 1.89 },
    "VT-RBY": { weight: 420.95, arm: 1.893 },
    "VT-RBR": { weight: 432.45, arm: 1.892 },
    "VT-RFG": { weight: 431.45, arm: 1.892 },
    "VT-RBS": { weight: 433.45, arm: 1.892 },
    "VT-RBU": { weight: 431.45, arm: 1.892 }
};

const pilotArm = 1.8;
const copilotArm = 1.8;
const fuelArm = 2.209;

document.getElementById('calculate-button').addEventListener('click', calculate);

function calculate() {
    const selectedAircraft = document.getElementById('aircraft-select').value;
    const pilotWeight = parseFloat(document.getElementById('pilot-weight').value);
    const copilotWeight = parseFloat(document.getElementById('copilot-weight').value);
    const fuelLiters = parseFloat(document.getElementById('fuel-weight').value);
    const fuelWeight = fuelLiters * 0.72;

    if (!selectedAircraft || isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(fuelLiters)) {
        alert("Please fill in all fields with valid values.");
        return;
    }

    const aircraft = aircraftData[selectedAircraft];
    const aircraftWeight = aircraft.weight;
    const aircraftArm = aircraft.arm;
    const aircraftMoment = aircraftWeight * aircraftArm;

    const pilotMoment = pilotWeight * pilotArm;
    const copilotMoment = copilotWeight * copilotArm;
    const fuelMoment = fuelWeight * fuelArm;

    const totalWeight = aircraftWeight + pilotWeight + copilotWeight + fuelWeight;
    const totalMoment = aircraftMoment + pilotMoment + copilotMoment + fuelMoment;
    const cg = totalMoment / totalWeight;

    const results = `
        <p>Aircraft -> Weight: ${aircraftWeight} kgs, Arm: ${aircraftArm} m, Moment: ${aircraftMoment}</p>
        <p>Pilot -> Weight: ${pilotWeight} kgs, Arm: ${pilotArm} m, Moment: ${pilotMoment}</p>
        <p>Copilot -> Weight: ${copilotWeight} kgs, Arm: ${copilotArm} m, Moment: ${copilotMoment}</p>
        <p>Fuel -> Weight: ${fuelWeight.toFixed(2)} kgs, Arm: ${fuelArm} m, Moment: ${fuelMoment.toFixed(4)}</p>
        <p>Total Weight: ${totalWeight} kgs</p>
        <p>Total Moment: ${totalMoment.toFixed(2)}</p>
        <p>CG: ${cg.toFixed(3)} m</p>
    `;
    
    document.getElementById('results').innerHTML = results;
}
