// // Function to convert and compress an image to base64
export function compressAndConvertToBase64(file, maxWidth, maxHeight, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader?.readAsDataURL(file);
    // kdjkdj

    reader.onload = function (event) {
      const img = new Image();

      img.onload = function () {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions while maintaining aspect ratio
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Convert canvas content to base64
        const base64String = canvas.toDataURL("image/jpeg", quality);
        resolve(base64String);
      };

      img.onerror = reject;

      img.src = event.target.result;
    };

    reader.onerror = reject;
  });
}



// Function to convert and compress an image to base64
// export function compressAndConvertToBase64(file, maxWidth, maxHeight, quality) {
//   return new Promise((resolve, reject) => {
//     if (!(file instanceof Blob)) {
//       return reject(new Error("Input must be a Blob or File."));
//     }
//     if (typeof maxWidth !== "number" || typeof maxHeight !== "number" || typeof quality !== "number") {
//       return reject(new Error("maxWidth, maxHeight, and quality must be numbers."));
//     }

//     const reader = new FileReader();

//     // Read the file as a Data URL
//     reader.readAsDataURL(file);

//     reader.onload = function (event) {
//       if (!event.target.result) {
//         return reject(new Error("Failed to read file. FileReader result is null."));
//       }

//       const img = new Image();

//       img.onload = function () {
//         const canvas = document.createElement("canvas");
//         let width = img.width;
//         let height = img.height;

//         // Calculate new dimensions while maintaining aspect ratio
//         if (width > maxWidth) {
//           height *= maxWidth / width;
//           width = maxWidth;
//         }

//         if (height > maxHeight) {
//           width *= maxHeight / height;
//           height = maxHeight;
//         }

//         canvas.width = width;
//         canvas.height = height;

//         const ctx = canvas.getContext("2d");
//         if (!ctx) {
//           return reject(new Error("Failed to get canvas 2D context."));
//         }
//         ctx.drawImage(img, 0, 0, width, height);

//         // Convert canvas content to base64
//         try {
//           const base64String = canvas.toDataURL("image/jpeg", quality);
//           resolve(base64String);
//         } catch (err) {
//           reject(new Error("Failed to convert canvas to Base64: " + err.message));
//         }
//       };

//       img.onerror = function () {
//         reject(new Error("Failed to load image for compression."));
//       };

//       img.src = event.target.result; // Set image source
//     };

//     reader.onerror = function () {
//       reject(new Error("FileReader failed to read the file."));
//     };
//   });
// }
