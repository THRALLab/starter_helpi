const useColor = () => {
    const generateColor = () => {
      // Define a fixed shade of blue
      const blue = 230; // Adjust this value to your desired shade of blue
  
      // Define the color with a fixed alpha value
      const color = `rgba(173, 216, ${blue}, 0.88)`; // You can adjust the alpha value if needed
  
      // Apply background color to body (optional)
      document.body.style.backgroundColor = color;
  
      return {
        frontWave: color,
        backWave: color, // Using the same color for both waves
        backgroundColor: color,
      };
    };
  
    return {
      generateColor,
    };
  };
  
  export default useColor;
  