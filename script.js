const aircraftData = {
    //P2008JC
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
    "VT-RBL": { weight: 426.95, arm: 1.84, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RFY": { weight: 432.7, arm: 1.856, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RFZ": { weight: 434.0, arm: 1.857, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" }, 
    "VT-RBV": { weight: 431.45, arm: 1.84, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },//Seoni
    "VT-RBW": { weight: 432.45, arm: 1.84, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RFE": { weight: 433.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    "VT-RFF": { weight: 431.45, arm: 1.892, pilotArm: 1.8, copilotArm: 1.8, fuelArm: 2.209, fuelMultiplier: 0.72, type: "p2008jc" },
    //P-Mentor
    "VT-RFH": { weight: 453.45, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFI": { weight: 454.45, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFJ": { weight: 454.45, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFK": { weight: 460.45, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFL": { weight: 454.45, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFS": { weight: 458.4, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFO": { weight: 457.1, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    "VT-RFN": { weight: 456.4, arm: 1.804, pilotArm: 1.940, copilotArm: 1.940, fuelArm: 2.139, fuelMultiplier: 0.72, type: "pmentor" },
    //Cessna
    "VT-CAQ": { weight: 849.27, arm: 103.81, pilotArm: 93.98, copilotArm: 93.98, fuelArm: 121.92, fuelMultiplier: 0.84, type: "cessna" },
    "VT-CAY": { weight: 837.5, arm: 105.55, pilotArm: 93.98, copilotArm: 93.98, fuelArm: 121.92, fuelMultiplier: 0.84, type: "cessna" },
    //P2010
    "VT-RFT": { weight: 819.14, arm: 0.298, type: "p2010" },
    "VT-RFU": { weight: 816.17, arm: 0.289, type: "p2010" },
    //P2006T
    "VT-RIC": { weight: 0, arm: 0, type: "p2006t" },
    "VT-RBB": { weight: 0, arm: 0, type: "p2006t" },
    "VT-RFW": { weight: 0, arm: 0, type: "p2006t" }
};

document.getElementById('calculate-button').addEventListener('click', calculate);

function calculate() {
    try {
        const selectedAircraft = document.getElementById('aircraft-select').value;
        if (!selectedAircraft || !aircraftData[selectedAircraft]) {
            throw new Error("Please select a valid aircraft.");
        }

        const aircraft = aircraftData[selectedAircraft];

        if (aircraft.type === "p2008jc") {
            handleP2008JC(aircraft);
        } else if (aircraft.type === "pmentor") {
            handlePMentor(aircraft);
        } else if (aircraft.type === "cessna") {
            handleCessna(aircraft);
        } else if (aircraft.type === "p2010") {
            handleP2010(aircraft);
        } else {
            throw new Error("Unsupported aircraft type.");
        }

    } catch (e) {
        document.getElementById("totalResult").innerText = e.message;
    }
}

function handleP2008JC(aircraft) {
    
    // Parse inputs, check for NaN
    const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
    const copilotWeight = parseFloat(document.getElementById("copilot-weight").value) || 0;
    const fuelLiters = parseFloat(document.getElementById("fuel-weight").value) || 0;
    
    if (isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(fuelLiters)) {
        throw new Error("Please enter valid weights.");
    }
    
    const aircraftMoment = aircraft.weight*aircraft.arm;
    const fuelMoment = fuelLiters*0.72*2.209;
    const pilotMoment = pilotWeight*1.8;
    const copilotMoment = copilotWeight*1.8;

    const fuelWeight = fuelLiters * 0.72;

    const totalWeight = aircraft.weight + pilotWeight + copilotWeight + fuelWeight;
    const totalMoment = aircraftMoment + pilotMoment + copilotMoment + fuelMoment;

    let displayedCG;

    const cg = totalMoment / totalWeight;
    displayedCG = `CG: ${cg.toFixed(3)} m`; // TODO 1.841 - 1.978, 650 MTOW

    // Update the results display
    document.getElementById("aircraftResult").innerHTML = `<td>Aircraft</td><td>${aircraft.weight.toFixed(2)}</td><td>${aircraft.arm}</td><td>${aircraftMoment.toFixed(4)}</td>`;
    document.getElementById("pilotResult").innerHTML = `<td>Pilot</td><td>${pilotWeight.toFixed(2)}</td><td>${1.8}</td><td>${pilotMoment.toFixed(2)}</td>`;
    document.getElementById("copilotResult").innerHTML = `<td>Copilot</td><td>${copilotWeight.toFixed(2)}</td><td>${1.8}</td><td>${copilotMoment.toFixed(2)}</td>`;
    document.getElementById("fuelResult").innerHTML = `<td>Fuel</td><td>${fuelWeight.toFixed(2)}</td><td>${2.209}</td><td>${fuelMoment.toFixed(4)}</td>`;

    // For total results (footer row)
    document.getElementById("totalResult").innerHTML = `
        <td>Total</td><td>${totalWeight.toFixed(2)}</td><td></td><td>${totalMoment.toFixed(4)}</td></tr>`;
        //  <tr><td colspan="4">${displayedCG}</td></tr>`;
    document.getElementById("cgResult").innerHTML = `<td></td><td></td><td></td<td></td><td>${displayedCG}</td>`;

}

function handlePMentor(aircraft) {
    
    // Parse inputs, check for NaN
    const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
    const copilotWeight = parseFloat(document.getElementById("copilot-weight").value) || 0;
    const fuelLiters = parseFloat(document.getElementById("fuel-weight").value) || 0;
    
    if (isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(fuelLiters)) {
        throw new Error("Please enter valid weights.");
    }
    
    const aircraftMoment = aircraft.weight*aircraft.arm;
    const fuelMoment = fuelLiters*0.72*2.139
    const pilotMoment = pilotWeight*1.94;
    const copilotMoment = copilotWeight*1.94;

    const fuelWeight = fuelLiters * 0.72;

    const totalWeight = aircraft.weight + pilotWeight + copilotWeight + fuelWeight;
    const totalMoment = aircraftMoment + pilotMoment + copilotMoment + fuelMoment;

    let displayedCG;

    const cg = totalMoment / totalWeight;
    displayedCG = `CG: ${cg.toFixed(3)} m`;

    // Update the results display
    document.getElementById("aircraftResult").innerHTML = `<td>Aircraft</td><td>${aircraft.weight.toFixed(2)}</td><td>${aircraft.arm}</td><td>${aircraftMoment.toFixed(4)}</td>`;
    document.getElementById("pilotResult").innerHTML = `<td>Pilot</td><td>${pilotWeight.toFixed(2)}</td><td>${1.94}</td><td>${pilotMoment.toFixed(2)}</td>`;
    document.getElementById("copilotResult").innerHTML = `<td>Copilot</td><td>${copilotWeight.toFixed(2)}</td><td>${1.94}</td><td>${copilotMoment.toFixed(2)}</td>`;
    document.getElementById("fuelResult").innerHTML = `<td>Fuel</td><td>${fuelWeight.toFixed(2)}</td><td>${2.139}</td><td>${fuelMoment.toFixed(4)}</td>`;

    // For total results (footer row)
    document.getElementById("totalResult").innerHTML = `
    <td>Total</td><td>${totalWeight.toFixed(2)}</td><td></td><td>${totalMoment.toFixed(4)}</td>`;
    document.getElementById("cgResult").innerHTML = `<td></td><td></td><td></td<td></td><td>${displayedCG}</td>`;
}

function handleCessna(aircraft) {

    // Parse inputs, check for NaN
    const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
    const copilotWeight = parseFloat(document.getElementById("copilot-weight").value) || 0;
    const fuelLiters = parseFloat(document.getElementById("fuel-weight").value) || 0;
    
    if (isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(fuelLiters)) {
        throw new Error("Please enter valid weights.");
    }
    
    const aircraftMoment = aircraft.weight*aircraft.arm;
    const fuelMoment = fuelLiters*0.84*121.92;
    const pilotMoment = pilotWeight*93.98;
    const copilotMoment = copilotWeight*93.98;

    const fuelWeight = fuelLiters * 0.84;

    const totalWeight = aircraft.weight + pilotWeight + copilotWeight + fuelWeight;
    const totalMoment = aircraftMoment + pilotMoment + copilotMoment + fuelMoment;

    let displayedCG;
    let cessnaAUWMessage = "";
    const maxAllUpWeight = totalWeight - 1;
    const maxAllUpMoment = totalMoment - 121.92;
    const cessnaCG = maxAllUpMoment / maxAllUpWeight;
    displayedCG = `CG: ${cessnaCG.toFixed(3)}cm`;

    // Update the results display
    document.getElementById("aircraftResult").innerHTML = `<td>Aircraft</td><td>${aircraft.weight.toFixed(2)}</td><td>${aircraft.arm}</td><td>${aircraftMoment.toFixed(4)}</td>`;
    document.getElementById("pilotResult").innerHTML = `<td>Pilot</td><td>${pilotWeight.toFixed(2)}</td><td>${93.98}</td><td>${pilotMoment.toFixed(2)}</td>`;
    document.getElementById("copilotResult").innerHTML = `<td>Copilot</td><td>${copilotWeight.toFixed(2)}</td><td>${93.98}</td><td>${copilotMoment.toFixed(2)}</td>`;
    document.getElementById("cessnaFuel").innerHTML = `<td>Fuel</td><td>${fuelWeight.toFixed(2)}</td><td>${121.92}</td><td>${fuelMoment.toFixed(4)}</td>`;

    // For total results (footer row)
    document.getElementById("totalResult").innerHTML = `<td>Total</td><td>${totalWeight.toFixed(2)}</td><td></td><td>${totalMoment.toFixed(4)}</td>`;

    document.getElementById("cessnaSpecificResult").innerHTML = `<td>Max AUW</td><td>${maxAllUpWeight.toFixed(2)}</td><td></td><td>${maxAllUpMoment.toFixed(4)}</td>`;
    document.getElementById("cgResult").innerHTML = `<td></td><td></td><td></td<td></td><td>${displayedCG}</td>`;
}

function handleP2006T(aircraft) {
    // Parse inputs, check for NaN
    const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
    const copilotWeight = parseFloat(document.getElementById("copilot-weight").value) || 0;
    const fuelLiters = parseFloat(document.getElementById("fuel-weight").value) || 0;
    
    if (isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(fuelLiters)) {
        throw new Error("Please enter valid weights.");
    }

    //s
}

function handleP2010(aircraft) {

    // Parse inputs, check for NaN
    const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
    const copilotWeight = parseFloat(document.getElementById("copilot-weight").value) || 0;
    const tofuelLiters = parseFloat(document.getElementById("fuel-weight").value) || 0;
    const ldgfuelLiters = parseFloat(document.getElementById("landing-fuel").value) || 0;
    
    if (isNaN(pilotWeight) || isNaN(copilotWeight) || isNaN(tofuelLiters)) {
        throw new Error("Please enter valid weights.");
    }

    const aircraftMoment = aircraft.weight*aircraft.arm;
    const pilotMoment = pilotWeight*0.29;
    const copilotMoment = copilotWeight*0.29;
    const dryWeight = aircraft.weight + pilotWeight + copilotWeight; 
    const dryMoment = aircraftMoment + pilotMoment + copilotMoment;
    const dryArm = dryMoment / dryWeight;
    const tofuelWeight = tofuelLiters*0.8;
    const ldgfuelWeight = ldgfuelLiters*0.8;
    const tofuelMoment = tofuelWeight*0.625;
    const ldgfuelMoment = ldgfuelWeight*0.625;

    let baggageWeight = 0;
    let baggageMoment;
    let takeoffCG, landingCG;
    let takeoffWeight, landingWeight;
    let takeoffMoment, landingMoment;

    while (true) {
        baggageMoment = baggageWeight * 1.612;
        takeoffWeight = dryWeight + tofuelWeight + baggageWeight;
        landingWeight = dryWeight + ldgfuelWeight + baggageWeight;
        takeoffMoment = dryMoment + tofuelMoment + baggageMoment;
        landingMoment = dryMoment + ldgfuelMoment + baggageMoment;
        takeoffCG = takeoffMoment / takeoffWeight;
        landingCG = landingMoment / landingWeight;

        // Define CG limits based on weight
        let lowerLimit = (takeoffWeight > 1000) ? 0.351 : 0.275;
        let upperLimit = 0.454;

        // Check if both CG values are within limits
        if (takeoffCG >= lowerLimit && takeoffCG <= upperLimit &&
            landingCG >= lowerLimit && landingCG <= upperLimit) {
            break; // Exit loop if both takeoff and landing CG are in range
        }

        // If we reach an unreasonable baggage weight, stop loop
        if (baggageWeight > 40) {
            console.error("Unable to balance CG within reasonable baggage weight.");
            break;
        }

        baggageWeight += 10; // Increment baggage by 10kg
    }

    //Update the results display
    document.getElementById("aircraftResult").innerHTML = `<td>Aircraft</td><td>${aircraft.weight.toFixed(2)}</td><td>${aircraft.arm}</td><td>${aircraftMoment.toFixed(3)}</td>`;
    document.getElementById("pilotResult").innerHTML = `<td>Pilot</td><td>${pilotWeight}</td><td>${0.29}</td><td>${pilotMoment.toFixed(2)}</td>`;
    document.getElementById("copilotResult").innerHTML = `<td>Copilot</td><td>${copilotWeight}</td><td>${0.29}</td><td>${copilotMoment.toFixed(2)}</td>`;
    document.getElementById("dryweightResult").innerHTML = `<td>Dry Weight</td><td>${dryWeight.toFixed(2)}</td><td>${dryArm.toFixed(3)}</td><td>${dryMoment.toFixed(3)}</td>`;
    document.getElementById("takeofffuelResult").innerHTML = `<td>T/O Fuel</td><td>${tofuelWeight.toFixed(2)}</td><td>${0.625}</td><td>${tofuelMoment.toFixed(3)}</td>`;
    document.getElementById("landingfuelResult").innerHTML = `<td>Ldg Fuel</td><td>${ldgfuelWeight.toFixed(2)}</td><td>${0.625}</td><td>${ldgfuelMoment.toFixed(3)}</td>`;
    document.getElementById("baggageResult").innerHTML = `<td>Baggage</td><td>${baggageWeight}</td><td>${1.612}</td><td>${baggageMoment.toFixed(2)}</td>`;
    document.getElementById("takeoffResult").innerHTML = `<td>T/O AUW</td><td>${takeoffWeight.toFixed(2)}</td><td>T/O Moment</td><td>${takeoffMoment.toFixed(3)}</td>`;
    document.getElementById("landingResult").innerHTML = `<td>LDG AUW</td><td>${landingWeight.toFixed(2)}</td><td>LDG Moment</td><td>${landingMoment.toFixed(3)}</td>`;
    document.getElementById("totalResult").innerHTML = `<td>T/O CG</td><td>${takeoffCG.toFixed(3)}</td><td>LDG CG</td><td>${landingCG.toFixed(3)}</td>`;


}

document.getElementById('aircraft-select').addEventListener('change', function() {
    const selectedAircraft = this.value;

    const aircraft = aircraftData[selectedAircraft];
    
    // Get the P2010 fuel inputs container
    const p2010FuelInputs = document.getElementById('p2010-fuel-inputs');

    if (aircraft.type === 'p2010') {
        // Show the fuel inputs for P2010 aircraft
        p2010FuelInputs.style.display = 'block';
    } else {
        // Hide the fuel inputs for other aircraft
        p2010FuelInputs.style.display = 'none';
    }
});