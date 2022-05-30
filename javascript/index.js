// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    // ... Your code here
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;

                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.error("STEP 4", error)
                );
              },
              (error) => console.error("STEP 3", error)
            );
          },
          (error) => console.error("STEP 2", error)
        );
      },
      (error) => console.error("STEP 1", error)
    );
    // ...
  },
  (error) => console.error("STEP 0", error)
);

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  //  ... Your code here
  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6)
              .then((step6) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step6}</li>`;
              })
              .then(() => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>Steak is ready!</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");
              });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  // ... Your code here
  const zeroStep = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${zeroStep}</li>`;
  const firstStep = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${firstStep}</li>`;
  const secondStep = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${secondStep}</li>`;
  const thirdStep = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${thirdStep}</li>`;
  const fourthStep = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${fourthStep}</li>`;
  const fifthStep = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${fifthStep}</li>`;
  const sixthStep = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${sixthStep}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

const p0 = obtainInstruction("brusselsSprouts", 0);
const p1 = obtainInstruction("brusselsSprouts", 1);
const p2 = obtainInstruction("brusselsSprouts", 2);
const p3 = obtainInstruction("brusselsSprouts", 3);
const p4 = obtainInstruction("brusselsSprouts", 4);
const p5 = obtainInstruction("brusselsSprouts", 5);
const p6 = obtainInstruction("brusselsSprouts", 6);
const p7 = obtainInstruction("brusselsSprouts", 7);

const allSteps = Promise.all([p1, p2, p3, p4, p5, p6, p7]);

console.log(allSteps);

allSteps.then((values) => {
  for (let i = 0; i < values.length; i++) {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[i]}</li>`;
  }
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
