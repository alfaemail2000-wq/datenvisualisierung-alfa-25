// const aicheck = {
//     kickeck: () => {
//       const main = document.querySelector("main");
//       const kibtncontainer = document.createElement("div");
//       const kicheckbtn = document.createElement("button");
//       kicheckbtn.textContent = "AI Check";
//       kibtncontainer.append(kicheckbtn);
//       main.appendChild(kibtncontainer);
  
//       // Click handler is async
//       kicheckbtn.addEventListener("click", async () => {
//         console.log("AI Check button clicked");
  
//         // Example training data
//         const X = tf.tensor2d([
//           [80, 60],
//           [30, 25],
//           [70, 90],
//           [50, 40]
//         ]);
//         const Y = tf.tensor2d([
//           [90],
//           [40],
//           [95],
//           [60]
//         ]);
  
//         // Build simple linear model
//         const model = tf.sequential();
//         model.add(tf.layers.dense({ units: 1, inputShape: [2] }));
//         model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
  
//         // Wait for training to finish
//         await model.fit(X, Y, { epochs: 300 });
//         console.log("Training complete");
  
//         // Make predictions
//         const candidate = tf.tensor2d([[80, 60]]);
//         const prediction = model.predict(candidate);
//         prediction.array().then(arr => {
//           console.log("Predicted success % for candidate:", arr[0][0].toFixed(2));
//         });
//       });
//     }
//   };
  
//   // Initialize
//   aicheck.kickeck();
  